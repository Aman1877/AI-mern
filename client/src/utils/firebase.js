import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-8f3ae.firebaseapp.com",
  projectId: "interviewiq-8f3ae",
  storageBucket: "interviewiq-8f3ae.firebasestorage.app",
  messagingSenderId: "476957894444",
  appId: "1:476957894444:web:c63b54ce6bc0801e366e89",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
