import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const getPlayerData = async (position) => {
  let q;
  if (position !== 'allItems') {
    // OJO CAMBIAR ACA POSITION POR OTRA CATEGORIES
    // TALVEZ AGREGAR UNA CATEGORIA HOME PARA LOS ITEMS DEL HOME
    q = query(collection(db, "playersCollection"), where("position", "==", position));
  } else {
    q = query(collection(db, "playersCollection"));
  }

  const docs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });

  return docs;
};