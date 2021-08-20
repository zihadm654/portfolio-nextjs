import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
const config = {
  apiKey: 'AIzaSyAITQLz7ewSKRzzBI9yZo8bExX2qi8oYUU',
  authDomain: 'portfolio-next-50c1e.firebaseapp.com',
  projectId: 'portfolio-next-50c1e',
  storageBucket: 'portfolio-next-50c1e.appspot.com',
  messagingSenderId: '18054685625',
  appId: '1:18054685625:web:5f277c169487736bca4c68',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.firestore();
const store = firebase.storage();
export { db, store };
