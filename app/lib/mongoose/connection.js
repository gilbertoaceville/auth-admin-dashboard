import mongoose from 'mongoose';

export async function connectToDB() {
  const connection = {};

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
}
