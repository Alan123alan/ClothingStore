import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithRedirect, signInWithPopup, signInWithEmailAndPassword ,GoogleAuthProvider} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2oPGHmRlNjzsfuBkjfinI5RhWb5ShwwM",
    authDomain: "fir-backend-adc97.firebaseapp.com",
    projectId: "fir-backend-adc97",
    storageBucket: "fir-backend-adc97.appspot.com",
    messagingSenderId: "824163860400",
    appId: "1:824163860400:web:df4ac320e09808f186a075"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt : "select_account"
});

export const auth = getAuth();

//These functions return a promise that resolves to the signed in user and the provider creds
export const signInWithGooglePopup = ()=>signInWithPopup(auth, googleProvider);
//In the case of signInWithRedirect it is important to remember that redirecting will cause
//that the component where the function was called to unmount restarting the state if not handled correctly
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth, googleProvider);

export const signUpWithEmailAndPassword = async(email, password)=>{
    const {user} = await createUserWithEmailAndPassword(auth, email, password);
    return user;
};

export const signIn = async(email, password)=>{
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    return user;
};

export const db = getFirestore();

export const createUserDocFromAuth = async(user, additionalInfo={})=>{
    const documentRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(documentRef);
    if(userSnapshot.exists()) return "User already exists in database";
    const createdAt = new Date();
    user = {
        id: user.uid,
        displayName : user.displayName,
        createdAt,
        ...additionalInfo
    };
    try {
        await setDoc(documentRef, user);
        return `User ${user.displayName} was created.`;
    } catch (error) {
        return `Error creating the user:${error.code}`;
    }
};

// export const signInWithGooglePopup = async ()=>{
//     const user = await signInWithPopup(auth, provider);
//     console.log(user);
//     return user
// };