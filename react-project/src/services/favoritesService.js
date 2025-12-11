import { doc, setDoc, getDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 

export async function addFavorite(uid, tour) {
  const docRef = doc(db, "users", uid, "favorites", tour.id.toString());
  await setDoc(docRef, tour); 
}



export async function removeFavorite(uid, tourId) {
  const docRef = doc(db, "users", uid, "favorites", tourId.toString());
  await deleteDoc(docRef);
}

export async function getFavorites(uid) {
  const collRef = collection(db, "users", uid, "favorites");
  const snapshot = await getDocs(collRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
