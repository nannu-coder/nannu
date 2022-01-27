import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./Firebase.Config";


const InitializeFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}

export default InitializeFirebase