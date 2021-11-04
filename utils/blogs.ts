import { db } from '../firebase';
const blogs = async () => {
  const snapshot = await db.collection('blogs').get();
  snapshot.docs.forEach((doc) => console.log(doc.data()));
};

export default blogs;
