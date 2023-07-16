import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGaXAVrVkz77d4Qz95h7J9UKub5GckTRw",
  authDomain: "book-haven-1335e.firebaseapp.com",
  projectId: "book-haven-1335e",
  storageBucket: "book-haven-1335e.appspot.com",
  messagingSenderId: "909947682574",
  appId: "1:909947682574:web:d068ca1e9eaa4b1b3aa15f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
