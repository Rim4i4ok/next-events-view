function handler(req, res) {
  const requestId = req.query.requestId;

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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log("new comment", newComment);
    res.status(201).json({ message: "Added comment", comment: newComment });
    return;
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
    return;
  }
}

export default handler;
