import React, { useEffect, useState } from 'react';
import InitializeFirebase from '../Components/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

InitializeFirebase();

const UseFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const createAccount = ({ email, password, name, location, navigate }) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const desti = location?.from || '/';
                navigate(desti);
                saveData(email, name);
                setError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setLoading(false));
    };

    const logIn = ({ email, password, location, navigate }) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const desti = location?.from || '/';
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

    const saveData = (email, name) => {
        const user = { email, name };
        axios.post('http://localhost:5000/user', user)
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