// api/decision.js
import { getDecisionAnalysis } from "./ai_analysis_deciside";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }
  const { userId, decision, options, values } = req.body;
  if (!userId || !decision || !options || !values) {
    return res.status(400).json({ error: "Dati incompleti" });
  }
  try {
    const suggestion = await getDecisionAnalysis(decision, options, values);
    return res.json({ success: true, suggestion });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Errore interno" });
  }
}
