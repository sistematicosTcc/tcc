import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBDQOsPKDoLLUaV2tSlWOHSKzKVnocwd5Q",
  authDomain: "cryptop-9679e.firebaseapp.com",
  projectId: "cryptop-9679e",
  storageBucket: "cryptop-9679e.appspot.com",
  messagingSenderId: "231822136391",
  appId: "1:231822136391:web:b9d5bcbc82449ebc22cd62"
};

const app = initializeApp(firebaseConfig);
export const authf = getAuth(app);