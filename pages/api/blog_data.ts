import clientPromise from '../../lib/mongo';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const query = req.query.slug;
  const client = await clientPromise;
  const db = client.db('portfolio_db');

  const data = await db
    .collection('blogs')
    .findOne({ _id: new ObjectId(query) });
  res.json(data);
}
