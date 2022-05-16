import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAITQLz7ewSKRzzBI9yZo8bExX2qi8oYUU',
  authDomain: 'portfolio-next-50c1e.firebaseapp.com',
  databaseURL: 'https://portfolio-next-50c1e-default-rtdb.firebaseio.com',
  projectId: 'portfolio-next-50c1e',
  storageBucket: 'portfolio-next-50c1e.appspot.com',
  messagingSenderId: '18054685625',
  appId: '1:18054685625:web:5f277c169487736bca4c68',
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export { db };
