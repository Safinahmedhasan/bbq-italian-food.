import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';



export const AuthContext = createContext(null); 

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password, displayName) =>{
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const signIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const googleSignIn = () => {
        setLoading(false);
        const googleSignIn = new GoogleAuthProvider();
        return signInWithPopup(auth ,googleSignIn);
    }

    const gitHubSignIN = () =>{
        setLoading(false);
        const gitHubSignIN = new GithubAuthProvider();
        return signInWithPopup(auth, gitHubSignIN);
    }

    const logOut = () =>{
        setLoading(false);
        return signOut(auth);
    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
            setLoading(false);
        })
        return() =>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        user,  
        createUser,
        loading,
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