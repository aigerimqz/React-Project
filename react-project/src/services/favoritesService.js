import { doc, setDoc, getDoc, deleteDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; 

const LOCAL_FAVORITES_KEY = "localFavorites";

export const getLocalFavorites = () => {
  const data = localStorage.getItem(LOCAL_FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
}

export const setLocalFavorites = (favorites) => {
  localStorage.setItem(LOCAL_FAVORITES_KEY, JSON.stringify(favorites));
}


export async function addFavorite(uid, tour) {
  if(!uid){
    const favorites = getLocalFavorites();
    if(!favorites.find(f => f.id === tour.id))
      favorites.push(tour);
    setLocalFavorites(favorites);
    return tour;
  }
  const docRef = doc(db, "users", uid, "favorites", tour.id.toString());
  await setDoc(docRef, tour); 
  return tour;
}



export async function removeFavorite(uid, tourId) {
  if(!uid){
    let favorites = getLocalFavorites();
    favorites = favorites.filter(f => f.id !== tourId);
    setLocalFavorites(favorites);
    return tourId;
  }
  const docRef = doc(db, "users", uid, "favorites", tourId.toString());
  await deleteDoc(docRef);
  return tourId;
}

export async function getFavorites(uid) {
  if(!uid){
    return getLocalFavorites();
  }
  const collRef = collection(db, "users", uid, "favorites");
  const snapshot = await getDocs(collRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
