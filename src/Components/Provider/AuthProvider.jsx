/* eslint-disable no-unused-vars */
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";



 export const AuthContext = createContext(null);

 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password) =>{
          return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser)
    
        });
        return () => {
            unSubscribe();
        }
      },[])
     const authInfo ={
        user,
        createUser,
        signIn,
        logout
        


     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;