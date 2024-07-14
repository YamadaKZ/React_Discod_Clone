
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA1t-DuDIFGMg9JHYIt7NplFOO63GczMSc",
    authDomain: "react-discord-clone-25c79.firebaseapp.com",
    projectId: "react-discord-clone-25c79",
    storageBucket: "react-discord-clone-25c79.appspot.com",
    messagingSenderId: "778752991263",
    appId: "1:778752991263:web:90464ca75f9144ae35752a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider};

