import { collection, query, where, getDocs, documentId, } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const getPlayerData = async (category, id) => {

  let q;
  if (id) {
    
    q = query(collection(db, "itemscollection"), where(documentId(), "==", id));

  } else if ((category !== 'allItems') && ' ') {
    // OJO CAMBIAR ACA POSITION POR OTRA CATEGORIES
    // TALVEZ AGREGAR UNA CATEGORIA HOME PARA LOS ITEMS DEL HOME
    q = query(collection(db, "itemscollection"), where("position", "==", category));

  } else {

    q = query(collection(db, "itemscollection"));

  }

  const docs = [];
  const querySnapshot = await getDocs(q); 

  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id }); 
  });

  return docs;
};
