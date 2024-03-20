import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoXdmeLgp5dbZHl8rGsZvI7O21aQz77jQ",
  authDomain: "sairaj04-cloned.firebaseapp.com",
  projectId: "sairaj04-cloned",
  storageBucket: "sairaj04-cloned.appspot.com",
  messagingSenderId: "139091639122",
  appId: "1:139091639122:web:414fdfecd7a55a4a43588b",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
