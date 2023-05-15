
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDoC2FAEQvPkcWpKHd-1FZiFv-59X70cnY",
  authDomain: "netflix-clone-6867d.firebaseapp.com",
  projectId: "netflix-clone-6867d",
  storageBucket: "netflix-clone-6867d.appspot.com",
  messagingSenderId: "764551610295",
  appId: "1:764551610295:web:92f51a46b4fb397e4cf232",
  measurementId: "G-13RC9H5VSH"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth();