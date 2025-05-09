import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxCMxlFc73nmpWkfXqYXIeI7s8grd-30I",
  authDomain: "aziz-tech-5afec.firebaseapp.com",
  projectId: "aziz-tech-5afec",
  storageBucket: "aziz-tech-5afec.firebasestorage.app",
  messagingSenderId: "994827158551",
  appId: "1:994827158551:web:875c2eae340c0b9b720852"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Enforce login session to last only until tab/browser is closed
setPersistence(auth, browserSessionPersistence).catch((error) => {
  console.error("Persistence setting error:", error);
});

export { auth };
