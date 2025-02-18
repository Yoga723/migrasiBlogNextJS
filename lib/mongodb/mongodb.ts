// Files untuk mencoba connect ke mongoDB

import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("Please define the MONGODB_URI environment variable inside .env");

let cached: { conn: mongoose.Connection | null; promise: Promise<mongoose.Connection> | null } = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function dbConnect() {
  console.log("trying to connect to mongoDB");
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose.connection);
  }
  cached.conn = await cached.promise;
  console.log("connected to MongoDB");
  return cached.conn;
}

export default dbConnect;
