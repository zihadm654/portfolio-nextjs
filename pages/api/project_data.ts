import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export default async function handler(req, res) {
  const query = req.query.slug;
  const ref = doc(db, 'projects', 'id');
  const docSnap = await getDoc(ref);

  res.json(docSnap);
}
