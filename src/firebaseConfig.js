import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7ewR1I218IjK9iAgx4uPFzY5wU73ki7o",
  authDomain: "web-store-9632f.firebaseapp.com",
  projectId: "web-store-9632f",
  storageBucket: "web-store-9632f.firebasestorage.app",
  messagingSenderId: "553733866346",
  appId: "1:553733866346:web:39647717026a2966b09b13",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { app, auth };