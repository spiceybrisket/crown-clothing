import firebase from "firebase/app"

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBCfbbiRodGZoRhSB5qrf49Yv0VrMKbmAA",
  authDomain: "crwn-db-14082.firebaseapp.com",
  databaseURL: "https://crwn-db-14082.firebaseio.com",
  projectId: "crwn-db-14082",
  storageBucket: "",
  messagingSenderId: "756417892877",
  appId: "1:756417892877:web:cd640085f6e12ea6"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
