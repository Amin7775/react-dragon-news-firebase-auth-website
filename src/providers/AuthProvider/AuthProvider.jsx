import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

// Register User
    const createUser = (name,photoURL,email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in user
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User State handler
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])


    // logout
    const logOut = () =>{
        return signOut(auth)
    }

  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    signInUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
