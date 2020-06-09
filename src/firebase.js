import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDlLheFDLfWNXhna3pRt3ujBMbjXR08wKI",
    authDomain: "newdata-77f0d.firebaseapp.com",
    databaseURL: "https://newdata-77f0d.firebaseio.com",
    projectId: "newdata-77f0d",
    storageBucket: "newdata-77f0d.appspot.com",
    messagingSenderId: "741321018122",
    appId: "1:741321018122:web:aeab1c9245bfc6952f08f3",
    measurementId: "G-HF4QNJQFGE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;