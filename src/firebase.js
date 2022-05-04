// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBzMnKcP5evAURStOZHyAWrQRmS0xmQMAM",

  authDomain: "e-commmerce-app-c5377.firebaseapp.com",

  projectId: "e-commmerce-app-c5377",

  storageBucket: "e-commmerce-app-c5377.appspot.com",

  messagingSenderId: "272991852531",

  appId: "1:272991852531:web:d7091f96ac12c5fdd06486",

  measurementId: "G-JC3V62RWH1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app;