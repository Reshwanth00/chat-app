import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxqiw0ZfohmsAMjNTAUoqWMGXwisfst3w",
  authDomain: "new-41622.firebaseapp.com",
  projectId: "new-41622",
  storageBucket: "new-41622.appspot.com",
  messagingSenderId: "718459053416",
  appId: "1:718459053416:web:0b0269c26e42eaf6d322dd"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
