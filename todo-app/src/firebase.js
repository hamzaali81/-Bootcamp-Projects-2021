import firebase from  "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAHo_FlX7-A4uF0CeVAq6J3pkeJZP-mxt0",
  authDomain: "todo-app-redux-80f71.firebaseapp.com",
  projectId: "todo-app-redux-80f71",
  storageBucket: "todo-app-redux-80f71.appspot.com",
  messagingSenderId: "484933621272",
  appId: "1:484933621272:web:a229e9e70d500c7dec956d"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db,auth,storage,provider };