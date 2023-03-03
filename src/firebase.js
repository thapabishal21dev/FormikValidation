import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsJI3mTvAX5SfMvmiS5u6mGHkenHCGbjM",
  authDomain: "react-contact-form-3c514.firebaseapp.com",
  projectId: "react-contact-form-3c514",
  storageBucket: "react-contact-form-3c514.appspot.com",
  messagingSenderId: "269280932149",
  appId: "1:269280932149:web:72e3c98073b161e8ae5c7c",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
