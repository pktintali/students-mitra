import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB1u4b-8sHBsoRqmAUf4Qhyet99goh9Q4c",
  authDomain: "students-mitra.firebaseapp.com",
  databaseURL: "https://students-mitra.firebaseio.com",
  projectId: "students-mitra",
  storageBucket: "students-mitra.appspot.com",
  messagingSenderId: "10038853739",
  appId: "1:10038853739:web:0b68c328d074b2cd65712e",
  measurementId: "G-919CLL1N37",
};

//firebase.initializeApp(firebaseConfig);
// firebase.analytics();
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
  }
  
  isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
  }
  
  addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}
		return this.db.doc(`usersData/${this.auth.currentUser.uid}`).set({
			quote
		})
  }
  
  async getCurrentUserQuote() {
		const quote = await this.db.doc(`usersData/${this.auth.currentUser.uid}`).get()
		return quote.get('quote').country
  }
  
  updateProfile(profile) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}
		return this.db.collection('usersData').doc(`${this.auth.currentUser.email}`).set({
			profile
		},{ merge: true })
  }

  async getProfile() {
		const quote = await this.db.collection('usersData').doc(`${this.auth.currentUser.email}`).get()
		return quote.get('profile')
  }

  updateMarks(profile) {
    //TODO Update Marks Correctly
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}
		return this.db.collection('usersData').doc(`${this.auth.currentUser.email}`).collection('marks').doc('0').set({
			profile
		},{ merge: true })
  }

  async getmarks() {
		const marks = await this.db.collection('usersData').doc(`${this.auth.currentUser.email}`).collection('marks').doc('1').get()
		return marks;
  }
  
  
}
export default new Firebase();
