import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGlaSsBTFO94AtIewxnb0DT8JZnRsdEAo",
  authDomain: "slack-clone-dafe8.firebaseapp.com",
  projectId: "slack-clone-dafe8",
  storageBucket: "slack-clone-dafe8.appspot.com",
  messagingSenderId: "656707145768",
  appId: "1:656707145768:web:4629dc4777e26f8dcc651d",
  measurementId: "G-E6Z5DFHEJ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
