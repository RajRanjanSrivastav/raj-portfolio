
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCIEoyNGDMs1TYJUYXVuI87ofqmcl88wac",
  authDomain: "raj-sportfolio.firebaseapp.com",
  projectId: "raj-sportfolio",
  storageBucket: "raj-sportfolio.appspot.com",
  messagingSenderId: "197736029690",
  appId: "1:197736029690:web:c70a16f57b831c39e75843"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()