// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxKfsnjfpZI3zzulMMETqY5cz0IY2yXrg",
  authDomain: "instagram-2-d6f24.firebaseapp.com",
  projectId: "instagram-2-d6f24",
  storageBucket: "instagram-2-d6f24.appspot.com",
  messagingSenderId: "722173953474",
  appId: "1:722173953474:web:870c3ee5e6b65a8a81825b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }