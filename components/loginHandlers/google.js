import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const provider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        await firebase.auth().signInWithPopup(provider);
    } catch (error) {
        console.log(error);
    }
};

export default signInWithGoogle;