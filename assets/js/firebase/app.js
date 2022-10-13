// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyC8rHDcmclfrynuTLA1dve-VYVxfM6TFlM",
authDomain: "mundo-invertido-ff7bc.firebaseapp.com",
projectId: "mundo-invertido-ff7bc",
storageBucket: "mundo-invertido-ff7bc.appspot.com",
messagingSenderId: "1041942508738",
appId: "1:1041942508738:web:f32637e1dd937b9f13b75b"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app