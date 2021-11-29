import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxG-UwIHubkbtiFyJicHMdp8Ljdf6c5Bs",
    authDomain: "project-react-juli2021.firebaseapp.com",
    projectId: "project-react-juli2021",
    storageBucket: "project-react-juli2021.appspot.com",
    messagingSenderId: "429911770092",
    appId: "1:429911770092:web:9718a8082f01a5f771b6c9",
    measurementId: "G-FML2P7R0MN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
//const provider = GoogleAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();
//const googleAuth = googleAuthProvider();



export { auth, googleAuthProvider};