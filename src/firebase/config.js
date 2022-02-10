import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBIhy2kjvHwQUIsAu1tjkD0Bxq4nJ_9BsA",
    authDomain: "vue-tutos.firebaseapp.com",
    projectId: "vue-tutos",
    storageBucket: "vue-tutos.appspot.com",
    messagingSenderId: "447478160072",
    appId: "1:447478160072:web:4888c7e4e888c28db4e3fd"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp }