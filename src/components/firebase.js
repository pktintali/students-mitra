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
}
export default new Firebase();
