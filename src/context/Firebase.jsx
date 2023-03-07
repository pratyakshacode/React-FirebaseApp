import { initializeApp } from "firebase/app";
import { createContext, useContext} from "react";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth'
import {collection, getFirestore, addDoc, getDocs} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBkmPI4EgWKUhxjhtd7JKY7PdZ0-Iz1VEY",
  authDomain: "implementfirebase-8f467.firebaseapp.com",
  projectId: "implementfirebase-8f467",
  storageBucket: "implementfirebase-8f467.appspot.com",
  messagingSenderId: "948238965703",
  appId: "1:948238965703:web:7b50a7c6fe582b5715d7e2",
  measurementId: "G-X4LY467MPK",

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const AppContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(app)
const storage = getStorage(app);



export const useFirebase = () => useContext(AppContext);

// Initialize Firebase


const createUser = (email, password)=>{
    createUserWithEmailAndPassword(auth, email, password);
}

const validateUser = (email, password)=>{
    signInWithEmailAndPassword(auth, email, password);
}

const validateGoogle = async ()=>{
    await signInWithPopup(auth, googleProvider);
    
}

const addBook = async (name,price, image) =>{

    const imageRef = ref(storage, `uploads/images/${Date.now()}-${image.name}`);
    const result = await uploadBytes(imageRef, image);

    return await addDoc(collection(firestore, "books"),{
        name, price, 
        imageUrl: result.ref.fullPath,
    })
}

const listAllBooks = ()=>{
    return getDocs(collection(firestore, "books"));
}

const getImageURL = (path)=>{
    return getDownloadURL(ref(storage, path));
}
export const FirebaseContext = (props)=>{


    return (
        <AppContext.Provider value={{createUser, validateUser, validateGoogle, auth, addBook, listAllBooks, getImageURL}}>
            {props.children}
        </AppContext.Provider>
    )
}