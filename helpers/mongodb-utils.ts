import { MongoClient } from "mongodb";

export async function connectToDb(dbName) {
  const url =
    "mongodb+srv://test-1:TsZ5FghMszIvyRpP@cluster1.1dcen9j.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(url);
  const db = client.db(dbName);

  return { client, db };
}

export async function insertDocument(db, collection, document) {
  return await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(db, collection, sort) {
  return await db.collection(collection).find().toArray();
}
