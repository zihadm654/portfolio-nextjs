import { connect, connection } from 'mongoose';
// Attempts to connect to MongoDB and then tries to connect locally
const MONGO_URI = process.env.MONGODB_URI;

const options: any = {
  useUnifiedTopology: true,

  useNewUrlParser: true,
};

export const connectToDatabase = async () => {
  if (!connection.readyState) {
    console.log('Connecting to ', MONGO_URI);
    connect(MONGO_URI, options);
  }
};
