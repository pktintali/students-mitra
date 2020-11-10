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

  async sendPasswordResetEmail(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  getCurrentUserEmail() {
    return this.auth.currentUser && this.auth.currentUser.email;
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db.doc(`usersData/${this.auth.currentUser.uid}`).set({
      quote,
    });
  }

  async getCurrentUserQuote() {
    const quote = await this.db
      .doc(`usersData/${this.auth.currentUser.uid}`)
      .get();
    return quote.get("quote").country;
  }

  updateProfile(profile) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db
      .collection("usersData")
      .doc(`${this.auth.currentUser.email}`)
      .set(
        {
          profile,
          userId:`${this.auth.currentUser.email}`
          
        },
        { merge: true }
      );
  }

  async getProfile() {
    const quote = await this.db
      .collection("usersData")
      .doc(`${this.auth.currentUser.email}`)
      .get();
    return quote.get("profile");
  }

  updateActiveSubjects(sub) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db
      .collection("usersData")
      .doc(`${this.auth.currentUser.email}`)
      .update({
        activeSubject:sub
      });
  }

  updateMarks(data, type) {
    //TODO Update Marks Correctly
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db
      .collection("usersData")
      .doc(`${this.auth.currentUser.email}`)
      .collection("marks")
      .doc(type)
      .set(data, { merge: true });
  }

  async getmarks(type) {
    const marks = await this.db
      .collection("usersData")
      .doc(`${this.auth.currentUser.email}`)
      .collection("marks")
      .doc(type)
      .get();
    return marks;
  }

  addField(data) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db
      .doc(`usersData/${this.auth.currentUser.email}`)
      .set(data, { merge: true });
  }

  async getField(name) {
    const marks = await this.db
      .collection("usersData")
      .doc(`${this.auth.currentUser.email}`)
      .get();
    return marks.get(name);
  }
}
export default new Firebase();
