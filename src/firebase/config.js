import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {nn
    apiKey: "AIzaSyAEKtLTrPGPhb4FAI0lE5kFKHa7kpISnYk",
    authDomain: "sunlit-flag-288016.firebaseapp.com",
    projectId: "sunlit-flag-288016",
    storageBucket: "sunlit-flag-288016.appspot.com",
    messagingSenderId: "739542113832",
    appId: "1:739542113832:web:23b16f84abdd7914999f1d",
    measurementId: "G-EBHE8S49P0",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { firestore, auth, storage, analytics };
