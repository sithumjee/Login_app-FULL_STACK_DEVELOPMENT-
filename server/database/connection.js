import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
  //connect to database
  const mongoServer = await MongoMemoryServer.create(); //create a new instance of MongoMemoryServer
  const uri = mongoServer.getUri(); //get the uri from MongoMemoryServer

  const db = await mongoose.connect(uri); //connect to database
  console.log("Database connected");
  return db; //return database
}

export default connect; //export connect function
