// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfR245SKE94EVrkd78X8DtHZZKNvbUFUo",
  authDomain: "react-cursos-94b4e.firebaseapp.com",
  projectId: "react-cursos-94b4e",
  storageBucket: "react-cursos-94b4e.appspot.com",
  messagingSenderId: "859939198623",
  appId: "1:859939198623:web:3d9e9c4d76f2ebc8c9b4aa",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
