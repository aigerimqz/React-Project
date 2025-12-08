import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../firebase"; 


export const getLocalFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};
export const saveLocalFavorites = (items) => {
  localStorage.setItem("favorites", JSON.stringify(items));
};

export const getUserFavorites = async (uid) => {
  const docRef = doc(db, "favorites", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().items : [];
};

export const addUserFavorite = async (uid, itemId) => {
  const docRef = doc(db, "favorites", uid);
  await setDoc(docRef, { items: arrayUnion(itemId) }, { merge: true });
};

export const removeUserFavorite = async (uid, itemId) => {
  const docRef = doc(db, "favorites", uid);
  await updateDoc(docRef, { items: arrayRemove(itemId) });
};
