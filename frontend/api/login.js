import { v4 as uuidv4 } from "uuid";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Nome richiesto" });
  const userId = uuidv4();
  return res.json({ userId });
}
