import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAd66jEMB2ceDpM-3oYCW29twfp9l6KoSo",
  authDomain: "disneyplus-clone-cb4e4.firebaseapp.com",
  projectId: "disneyplus-clone-cb4e4",
  storageBucket: "disneyplus-clone-cb4e4.appspot.com",
  messagingSenderId: "234607762958",
  appId: "1:234607762958:web:18fe380e2aab98aac2665f",
  measurementId: "G-R5G2WNB207"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage ,signInWithPopup};
export default db;
