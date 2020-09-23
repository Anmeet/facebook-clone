// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBP0CMvyy0QQDcEK3t1_I-jq7q2GXvqAEY',
  authDomain: 'facebook-clone-amit.firebaseapp.com',
  databaseURL: 'https://facebook-clone-amit.firebaseio.com',
  projectId: 'facebook-clone-amit',
  storageBucket: 'facebook-clone-amit.appspot.com',
  messagingSenderId: '601761530772',
  appId: '1:601761530772:web:4a02e8675393ffec880581',
  measurementId: 'G-BPSBF42LVJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
