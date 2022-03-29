import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import initializeAuthentication from "./firebase.init";

initializeAuthentication();

const useFirebase = () => {
  
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  // Google Sign In
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .finally(() => setIsLoading(false))

      .catch((error) => {
        console.log(error.message);
      });
  };
  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };

  //Email Registration 
  const registration = (name, email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        // update name after registrationn
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false);
      return () => unsubscribe;
    });
  }, [user.email]);

  const login = (email, password, history, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setUser(user);

        alert("Login Successfull");
        const destination = location?.state?.from || "/";
        history.push(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("logout successfully");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    user,
    googleSignIn,
    setUser,
    setName,
    updateName,
    registration,
    login,
    logout,
    isLoading,
    error,
  };
};
export default useFirebase;
