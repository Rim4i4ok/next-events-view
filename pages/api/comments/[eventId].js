import {
  connectToDb,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/mongodb-utils";

const COLLECTION = "comments";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const { client, db } = await connectToDb("newsletter");

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

    try {
      const result = insertDocument(db, COLLECTION, newComment);
      console.log("new comment", result);
      newComment._id = result.insertedId;
    } catch (exception) {
      res.status(500).json({ message: "Insert data failed." });
      console.log("error", exception);
      return;
    }

    client.close();

    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const documents = await getAllDocuments(db, COLLECTION);

    res.status(200).json({ comments: documents });
  }

  client.close();
}

export default handler;
