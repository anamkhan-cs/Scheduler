import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBEufLu-EiKdWB0A1RITPZlwBW7JgBUgkg",
    authDomain: "scheduler-830ba.firebaseapp.com",
    databaseURL: "https://scheduler-830ba.firebaseio.com",
    projectId: "scheduler-830ba",
    storageBucket: "scheduler-830ba.appspot.com",
    messagingSenderId: "714871797427",
    appId: "1:714871797427:web:2550dc105c1aef28bf22c6",
    measurementId: "G-KGL1ETEGXR"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;