// import firebase from 'firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import {firestore } from 'firebase/firestore' ;
// import { auth} from 'firebase/auth' ;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF7Zx9xj31R2H7dIZZrCQd6kJoVzXepOo",
  authDomain: "netflix-f54b3.firebaseapp.com",
  projectId: "netflix-f54b3",
  storageBucket: "netflix-f54b3.appspot.com",
  messagingSenderId: "705235842034",
  appId: "1:705235842034:web:2fe9fb4620653f54b3f16b",
  measurementId: "G-07NF5LQFGG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export { auth }
export default db
