import { connectToDb, insertDocument } from "../../helpers/mongodb-utils";

const COLLECTION = "emails";

async function handler(req, res) {
  console.log("hello");
  if (req.method === "POST") {
    const userEmail = req.body.email;

    // some validdation
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const { client, db } = await connectToDb("newsletter");
    try {
      await insertDocument(db, COLLECTION, { email: userEmail });
    } catch (exception) {
      res.status(500).json({ message: "Insert data failed." });
      console.log("error", exception);
    }

    client.close();

    // console.log("API call ", userEmail);
    res.status(201).json({ message: "Signed" });
  }
}

export default handler;
