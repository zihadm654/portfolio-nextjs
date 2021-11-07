import { MongoClient } from 'mongodb';

module.exports = async () => {
  console.log('Connected to database');

  if (!process.env.DB_URL) {
    throw new Error(
      'Please define the DATABASE_URL environment variable inside .env.local'
    );
  }

  if (!process.env.DB_NAME) {
    throw new Error(
      'Please define the DATABASE_NAME environment variable inside .env.local'
    );
  }

  const client = await MongoClient.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(process.env.DB_NAME);

  return { db, client };
};

// const MONGODB_URI = process.env.DB_URL;
// const MONGODB_DB = process.env.DB_NAME;

// // check the MongoDB URI
// if (!MONGODB_URI) {
//   throw new Error('Define the MONGODB_URI environmental variable');
// }

// // check the MongoDB DB
// if (!MONGODB_DB) {
//   throw new Error('Define the MONGODB_DB environmental variable');
// }

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//   // check the cached.
//   if (cachedClient && cachedDb) {
//     // load from cache
//     return {
//       client: cachedClient,
//       db: cachedDb,
//     };
//   }

//   // set the connection options
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   // Connect to cluster
//   let client = new MongoClient(MONGODB_URI, opts);
//   await client.connect();
//   let db = client.db(MONGODB_DB);

//   // set cache
//   cachedClient = client;
//   cachedDb = db;

//   return {
//     client: cachedClient,
//     db: cachedDb,
//   };
// }
