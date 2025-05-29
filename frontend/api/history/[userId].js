// api/history/[userId].js
let decisions = []; // qui potresti collegare un DB

export default function handler(req, res) {
  const { userId } = req.query;
  const userHistory = decisions.filter(d => d.userId === userId);
  return res.json(userHistory);
}
