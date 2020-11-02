import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyB1u4b-8sHBsoRqmAUf4Qhyet99goh9Q4c",
  authDomain: "students-mitra.firebaseapp.com",
  databaseURL: "https://students-mitra.firebaseio.com",
  projectId: "students-mitra",
  storageBucket: "students-mitra.appspot.com",
  messagingSenderId: "10038853739",
  appId: "1:10038853739:web:0b68c328d074b2cd65712e",
  measurementId: "G-919CLL1N37"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;