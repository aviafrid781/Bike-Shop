import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializedFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializedFirebase;