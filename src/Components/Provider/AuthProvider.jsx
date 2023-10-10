/* eslint-disable no-unused-vars */
import { getAuth,createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";



 export const AuthContext = createContext(null);

 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] =useState(true)

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // const signIn = (email,password) =>{
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // }
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log('user in the auth state changed',currentUser);
            setUser(currentUser)
            setLoading(false);
    
        });
        return () => {
            unSubscribe();
        }
      },[])
     const authInfo ={
        user,
        createUser,
        
        logout,
        setLoading,
        loading
        


     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;