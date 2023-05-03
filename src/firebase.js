import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB-Er6hB75dbf5Klutblf9MYUEzZrj-L-w",
  authDomain: "svelte-crud-16a16.firebaseapp.com",
  projectId: "svelte-crud-16a16",
  storageBucket: "svelte-crud-16a16.appspot.com",
  messagingSenderId: "713968042682",
  appId: "1:713968042682:web:3fc12d8f47daff2eec3883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app)