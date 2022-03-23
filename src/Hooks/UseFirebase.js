import React, { useEffect, useState } from 'react';
import InitializeFirebase from '../Components/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

InitializeFirebase();

const UseFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const createAccount = ({ email, password, name, location, navigate }) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const desti = location?.state?.from || '/';
                navigate(desti);
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            }).finally(() => setLoading(false));
    };

    const logIn = ({ email, password, location, navigate }) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const desti = location?.state?.from || '/';
                navigate(desti);
                setError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setLoading(false));
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
            setUser({})
        }).catch((error) => {
            console.log(error)
        });
    }


    return ({
        createAccount,
        user,
        logOUt,
        logIn,
        error,
        loading
    });
};

export default UseFirebase;