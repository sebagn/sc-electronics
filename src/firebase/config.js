// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA3aht1x4N8_mrXp5xl9C2TukJuFBrLA74",
	authDomain: "sc-electronics.firebaseapp.com",
	projectId: "sc-electronics",
	storageBucket: "sc-electronics.appspot.com",
	messagingSenderId: "1008606158465",
	appId: "1:1008606158465:web:2d9309365b24470a6a3780",
	measurementId: "G-LY8HLZTE9X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
    