import React, { useEffect, useState } from 'react';
import InitializeFirebase from '../Components/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

InitializeFirebase();

const UseFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const createAccount = ({ email, password, name }) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const logIn = ({ email, password, location, navigate }) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const desti = location?.state?.from || '/';
                navigate.push(desti);
                setError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
    }, []);

    const logOUt = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }


    return ({
        createAccount,
        user,
        logOUt,
        logIn,
        error
    });
};

export default UseFirebase;