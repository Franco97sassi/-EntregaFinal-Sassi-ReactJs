 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTWElmEbtSJu_ke1LgDvUWRsTy8CnIcaU",
  authDomain: "proyectoreact-f6154.firebaseapp.com",
  projectId: "proyectoreact-f6154",
  storageBucket: "proyectoreact-f6154.appspot.com",
  messagingSenderId: "528873633100",
  appId: "1:528873633100:web:c08e8bd1a04bb7697e8be9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;