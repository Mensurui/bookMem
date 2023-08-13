import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyA45yNRccIV36hzBIBBaJVD5dhgYJ1_q-U",
  authDomain: "booklife-af127.firebaseapp.com",
  projectId: "booklife-af127",
  storageBucket: "booklife-af127.appspot.com",
  messagingSenderId: "331797028170",
  appId: "1:331797028170:web:57d3a72ec455606579f5b3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const booksCollectionRef = collection(db, "books");

export async function getBooks() {
  const querySnapshot = await getDocs(booksCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
}

export async function getBook(id) {
  const docRef = doc(db, "books", id);
  const bookSnapshot = await getDoc(docRef);
  return {
    ...bookSnapshot.data(),
    id: bookSnapshot.id,
  };
}
export async function getHostBooks() {
  const q = query(booksCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}