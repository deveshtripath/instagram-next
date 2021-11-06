import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStore } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCghnOXcxUJH0sWIboy6M1cmhwN67ZEL8U",
    authDomain: "insta-41e34.firebaseapp.com",
    projectId: "insta-41e34",
    storageBucket: "insta-41e34.appspot.com",
    messagingSenderId: "584718527857",
    appId: "1:584718527857:web:2e41e9b279208ff9465ad0",
    measurementId: "G-XDP54QC2VM"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStore();

export { app, db, storage };