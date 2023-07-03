import { getDocs, query } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default async function getDocuments(collection) {
  let docRef = query(collection(db, 'projects'));
  const snap = await getDocs(docRef);
  let result = null;
  let error = null;
  try {
    result = await snap;
  } catch (e) {
    error = e;
  }
  return {
    result,
    error,
  };
}
