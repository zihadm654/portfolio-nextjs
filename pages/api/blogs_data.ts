// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '../../lib/mongo';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('portfolio_db');
  const data = await db.collection('blogs').find().toArray();
  res.json(data);
}
