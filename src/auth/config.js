import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD1Ri3g1q8TGPAmVE3dBjK_Lmek5qwQ4LQ",
  authDomain: "my-app-98f0b.firebaseapp.com",
  databaseURL: "https://my-app-98f0b-default-rtdb.firebaseio.com",
  projectId: "my-app-98f0b",
  storageBucket: "my-app-98f0b.appspot.com",
  messagingSenderId: "1019379842225",
  appId: "1:1019379842225:web:58e61c650d3f3362787690"
};

export const authConfig = firebase.initializeApp(config);

export const firebaseDb = authConfig.database().ref();