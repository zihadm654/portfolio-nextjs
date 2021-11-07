// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { connectToDatabase } = require('../../lib/mongo.ts');

const ObjectId = require('mongodb').ObjectId;

// export default async function handler(req, res) {
//     // switch the methods
//     switch (req.method) {
//         case 'GET': {
//             return getPosts(req, res);
//         }

//         case 'POST': {
//             return addPost(req, res);
//         }

//         case 'PUT': {
//             return updatePost(req, res);
//         }

//         case 'DELETE': {
//             return deletePost(req, res);
//         }
//     }
// }

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the Daily route' });
}
