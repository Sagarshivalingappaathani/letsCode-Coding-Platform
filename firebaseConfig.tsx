import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAPFpPdaYgYBtjuoLk7Bd3PMRNt634Hl5U",
  authDomain: "letscode-9dbbf.firebaseapp.com",
  projectId: "letscode-9dbbf",
  storageBucket: "letscode-9dbbf.appspot.com",
  messagingSenderId: "324839464734",
  appId: "1:324839464734:web:526934e520fdd8eddf730f",
  measurementId: "G-0H28MB8C9K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);