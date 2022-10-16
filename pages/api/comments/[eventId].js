import { connectToDb } from "../../../helpers/mongodb-utils";

const COLLECTION = "comments";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const { client, db } = await connectToDb("events");

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid data" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId: eventId,
    };

    const result = await db.collection(COLLECTION).insertOne(newComment);

    console.log("new comment", result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: "Added comment", comment: result });
  }

  if (req.method === "GET") {
    const documents = await db
      .collection(COLLECTION)
      .find({ eventId: eventId })
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }

  client.close();
}

export default handler;
