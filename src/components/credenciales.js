// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCdsuqz3Nc0-0MJNzMkVWTVsQtmaYSqi0",
  authDomain: "prueba-tecnica-productos.firebaseapp.com",
  projectId: "prueba-tecnica-productos",
  storageBucket: "prueba-tecnica-productos.appspot.com",
  messagingSenderId: "1057945727853",
  appId: "1:1057945727853:web:9cf969e37af2f233cc6064"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;