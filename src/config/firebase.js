
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpNLGqlBC9IsKwrATyfGegB7pM1_CfrkA",
  authDomain: "aulafirebase-bfef9.firebaseapp.com",
  projectId: "aulafirebase-bfef9",
  storageBucket: "aulafirebase-bfef9.appspot.com",
  messagingSenderId: "824026759461",
  appId: "1:824026759461:web:9e2006aa638daecce21acc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };