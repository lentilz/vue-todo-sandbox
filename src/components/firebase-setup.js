import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  // in firebase account config
};

const firebaseApp = firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};

firestore.settings(settings);

// this will return the database associated with the app configuration
export default firebaseApp.firestore();
