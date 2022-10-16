import { connectToDb } from "../../helpers/mongodb-utils";

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

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    // console.log("API call ", userEmail);
    res.status(201).json({ message: "Signed" });
  }
}

export default handler;
