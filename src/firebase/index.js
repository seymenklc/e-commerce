import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvje3I10EacQXmm-bSNyh4rq952PkSuKk",
    authDomain: "e-commerce-24897.firebaseapp.com",
    projectId: "e-commerce-24897",
    storageBucket: "e-commerce-24897.appspot.com",
    messagingSenderId: "229364345960",
    appId: "1:229364345960:web:84f2a7d8a402f686d9dfdd"
};

const app = initializeApp(firebaseConfig);

// services
const auth = getAuth(app);

export { auth };