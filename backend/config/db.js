import mongoose from "mongoose";
const MONGO_URI = ''

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`Mongodb connected : ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error : ${err.message}`);
    process.exit(1);
  }
};
export default connectDB;
