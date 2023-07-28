import mongoose, { ConnectOptions } from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('please provide uri');
}
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

const connectToDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
    console.log('MongoDB connected');
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  return cached.conn;
};
export default connectToDB;
