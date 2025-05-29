// api/ai_analysis_deciside.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getDecisionAnalysis(decision, options, values) {
  const prompt = `
Ti presento un problema decisionale:
- Decisione: ${decision}
- Opzioni: ${options.join(", ")}
- Valori: ${values}

Fai un’analisi con pro e contro e un suggerimento.`;
  const resp = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 600,
  });
  return resp.data.choices[0].message.content;
}
