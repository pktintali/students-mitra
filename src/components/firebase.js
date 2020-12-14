import app from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
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

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.store = app.storage();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    window.sessionStorage.removeItem("dpmin");
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

  isUserVerified() {
    return this.auth.currentUser.emailVerified;
  }

  async sendEmailVerificationLink() {
    return await this.auth.currentUser.sendEmailVerification();
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
          userId: `${this.auth.currentUser.email}`,
        },
        { merge: true }
      );
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  async incrementCount() {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    const profile = await this.getProfile();
    const newCount = profile.visitCount + 1;
    var date = new Date();
    this.updateProfile({
      visitCount: newCount,
      lastVisit:
        this.formatAMPM(date) +
        "-" +
        date.getDate() +
        "/" +
        date.getMonth() +
        "/" +
        date.getFullYear(),
    });
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
        activeSubject: sub,
      });
  }

  updateMarks(data, sub) {
    //TODO Update Marks Correctly
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db
      .collection("usersData")
      .doc(`${this.auth.currentUser.email}`)
      .collection("marks")
      .doc(sub)
      .set(data, { merge: true });
  }
  async getmarks(sub, email) {
    const marks = await this.db
      .collection("usersData")
      .doc(`${email ? email : this.auth.currentUser.email}`)
      .collection("marks")
      .doc(sub)
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

  async getField(name, email) {
    const marks = await this.db
      .collection("usersData")
      .doc(`${email ? email : this.auth.currentUser.email}`)
      .get();
    return marks.get(name);
  }

  setProfileImage(image) {
    const uploadTask = this.store
      .ref(`images/dp/${this.auth.currentUser.email}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        toast.success("Updated Successfully", {
          positio: toast.POSITION.BOTTOM_RIGHT,
        });
        // alert('Updated Successfully');
      }
    );
  }

  savePostImage(image) {
    const uploadTask = this.store
      .ref(`images/posts/${this.auth.currentUser.email}/${image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        toast.success("Uploaded", { position: toast.POSITION.BOTTOM_RIGHT });
        // alert('Uploaded');
      }
    );
  }

  addPost(post, key) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db.collection("posts").doc(`${key}`).set(post, { merge: true });
  }

  addNotification(noti, key) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }
    return this.db
      .collection("notify")
      .doc(`${key}`)
      .set(noti, { merge: true });
  }

  deletePost(key) {
    this.db.collection("posts").doc(`${key}`).delete();
  }

  deleteNotification(key) {
    this.db.collection("notify").doc(`${key}`).delete();
  }

  async getDpImage() {
    const dpurl = await this.store
      .ref("images/dp/")
      .child(`${this.auth.currentUser.email}`)
      .getDownloadURL();
    return dpurl;
  }

  async getPostImage(image) {
    const url = await this.store
      .ref(`images/posts/${this.auth.currentUser.email}`)
      .child(`${image.name}`)
      .getDownloadURL();
    return url;
  }

  async getIsDp(user) {
    const quote = await this.db.collection("usersData").doc(`${user}`).get();
    return quote.get("dp");
  }

  async getAuthorDp(id) {
    const dp = await this.getIsDp(id);
    if (dp) {
      try {
        const dpurl = await this.store
          .ref("images/dp/")
          .child(`${id}`)
          .getDownloadURL();
        return dpurl;
      } catch (e) {
        console.log(e.message);
      }
    } else {
      return null;
    }
  }

  setImage(image) {
    const uploadTask = this.store.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        this.store
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  }
}
export default new Firebase();
