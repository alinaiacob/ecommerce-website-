import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQLoFhtN2_apCtEXG22ZhgFZ-F5tp7kJo",
    authDomain: "e-commerce-5257d.firebaseapp.com",
    projectId: "e-commerce-5257d",
    storageBucket: "e-commerce-5257d.appspot.com",
    messagingSenderId: "795167605142",
    appId: "1:795167605142:web:307f1e6b451eee32c29db7",
    measurementId: "G-DBC8H1WV1K"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
export const db=firebaseApp.firestore();
 export const auth=firebase.auth();