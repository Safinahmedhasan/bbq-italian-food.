import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';



export const AuthContext = createContext(null); 

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const googleSignIn = () => {
        const googleSignIn = new GoogleAuthProvider();
        return signInWithPopup(auth ,googleSignIn);
    }

    const gitHubSignIN = () =>{
        const gitHubSignIN = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubSignIN);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
        })
        return() =>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        user,  
        createUser,
        signIn,
        logOut,
        googleSignIn,
        gitHubSignIN

    }

    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;