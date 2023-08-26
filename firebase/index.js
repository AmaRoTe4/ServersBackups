import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  collection,
  getDocs,
  doc,
} from "firebase/firestore";
import { API_KEY_FIREBASE, APPID, MEASUREMENTID } from "../const.js";

const firebaseConfig = {
  apiKey: API_KEY_FIREBASE,
  appId: APPID,
  measurementId: MEASUREMENTID,
  authDomain: "sdn-company.firebaseapp.com",
  projectId: "sdn-company",
  storageBucket: "sdn-company.appspot.com",
  messagingSenderId: "20813884094",
};

const aux = initializeApp(firebaseConfig);
const db = getFirestore(aux);

export const getData = async (userId) => {
  try {
    const userDocRef = doc(db, "sitios", userId);
    const data = await getDoc(userDocRef);
    if (!data.exists()) return console.log("data no encontrada");
    return data.data();
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getAllData = async () => {
  try {
    const result = collection(db, "sitios");
    const data = await getDocs(result);
    let retorno = [];
    data.forEach((n) => {
      retorno.push({ ...n.data(), _id: n.id });
    });
    return retorno;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
