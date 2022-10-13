import { connectDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

async function handler(req, res) {
    if (req.method !== "POST") return;

    const { fname, lname, email, password } = req.body;

    const client = await connectDatabase();
    const db = client.db();

    const exists = await db.collection("users").findOne({ email });
    if (exists) {
        res.status(422).json({ message: "User Already exists" });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);
    const result = await db.collection("users").insertOne({
        fname,
        lname,
        email,
        password: hashedPassword,
    });

    res.status(200).json({ message: "Created User!", result });
    client.close();
}

export default handler;
