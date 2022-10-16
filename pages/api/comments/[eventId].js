import { connectToDb } from "../../../helpers/mongodb-utils";

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

    const result = await db
      .collection("comments")
      .insertOne({ comment: newComment });

    console.log("new comment", result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: "Added comment", comment: result });
  }

  if (req.method === "GET") {
    const dummyComments = [
      { id: "com1", name: "Gar", text: "Hello world!" },
      { id: "com2", name: "Kumr", text: "Hello!" },
      { id: "com3", name: "Tik", text: "World!" },
      { id: "co4", name: "Tiwt", text: "Hello there!" },
      { id: "co5", name: "Saloma", text: "There!" },
    ];

    res.status(200).json({ comments: dummyComments });
  }

  client.close();
}

export default handler;
