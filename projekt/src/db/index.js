
import firebase from 'firebase/app'
import 'firebase/firestore'




const db = firebase.initializeApp({
   apiKey: "AIzaSyDHQxC5BJtQuUo9MXfYZlQxZpYpCAvAxNY",
   authDomain: "examensprojekt-f9bf0.firebaseapp.com",
   databaseURL: "https://examensprojekt-f9bf0.firebaseio.com",
   projectId: "examensprojekt-f9bf0",
   storageBucket: "examensprojekt-f9bf0.appspot.com",
   messagingSenderId: "425318358603",
   appId: "1:425318358603:web:5b0d279a16a515f07e77ce",
   measurementId: "G-VQLTECJXLG"
}).firestore()

// const db = firebaseApp.firestore();




export default db

const { Timestamp } = firebase.firestore
export { Timestamp }
