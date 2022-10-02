function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    // some validdation
    if (!userEmail || !userEmail.includes("@")) {
      req.status(422).json({ message: "Invalid email address" });
      return;
    }

    console.log("API call ", userEmail);
    res.status(201).json({ message: "Signed" });
  }
}

export default handler;
