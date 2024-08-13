import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAz159IvpTA1I-u-hKdFklNxzBkWhLG-og",
  authDomain: "personal-portfolio-7d86d.firebaseapp.com",
  databaseURL: "https://personal-portfolio-7d86d-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-7d86d",
  storageBucket: "personal-portfolio-7d86d.appspot.com",
  messagingSenderId: "342485047645",
  appId: "1:342485047645:web:17924c626382245afeb0b4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth ,provider)