import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const config = {
    apiKey: "AIzaSyBU4BDmPvWw05dvKBqPYp-2CMrn7H4CiPY",
    authDomain: "project-6751930609199525635.firebaseapp.com",
    projectId: "project-6751930609199525635",
    storageBucket: "project-6751930609199525635.appspot.com",
    messagingSenderId: "1057399083477",
    appId: "1:1057399083477:web:893caa5c74c19b1007ad5c",
    measurementId: "G-YEEWE0ZSKT"
};
firebase.initializeApp(config);

export default firebase;

