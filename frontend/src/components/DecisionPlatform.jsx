import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function DecisionPlatform() {
  const [step, setStep] = useState(1);
  const [decision, setDecision] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [values, setValues] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [scenarios, setScenarios] = useState([]);
  const [history, setHistory] = useState([]);
  const [userName, setUserName] = useState("");

  const handleNextStep = () => {
    if (step === 4) {
      const result = `In base ai tuoi valori (${values}) e alle opzioni (${options.join(", ")}), sembra che la scelta più allineata sia: ${options[0]}`;
      setAnalysis(result);
      const simulatedScenarios = options.map((opt, i) => `Se scegli "${opt}", potresti sperimentare benefici come crescita personale, nuove opportunità o soddisfazione professionale. Ma valuta anche i rischi: instabilità, incertezza o stress.`);
      setScenarios(simulatedScenarios);
      const newEntry = {
        id: Date.now(),
        decision,
        options,
        values,
        suggestion: options[0],
      };
      setHistory((prev) => [...prev, newEntry]);
    }
    setStep((prev) => prev + 1);
  };

  const updateOption = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="space-y-4 p-6">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">1. Come ti chiami?</h2>
                <Input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Inserisci il tuo nome" />
                <Button className="mt-4" onClick={handleNextStep}>Avanti</Button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">2. Qual è la decisione che devi prendere?</h2>
                <Textarea value={decision} onChange={(e) => setDecision(e.target.value)} placeholder="Es. Cambiare lavoro, scegliere l'università..." />
                <Button className="mt-4" onClick={handleNextStep}>Avanti</Button>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">3. Quali sono le opzioni che stai considerando?</h2>
                {options.map((opt, i) => (
                  <Input key={i} value={opt} onChange={(e) => updateOption(i, e.target.value)} placeholder={`Opzione ${i + 1}`} className="mb-2" />
                ))}
                <Button variant="outline" onClick={() => setOptions([...options, ""])}>+ Aggiungi opzione</Button>
                <Button className="mt-4 ml-4" onClick={handleNextStep}>Avanti</Button>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">4. Quali sono i tuoi valori/priorità più importanti?</h2>
                <Textarea value={values} onChange={(e) => setValues(e.target.value)} placeholder="Es. Stabilità, creatività, crescita personale..." />
                <Button className="mt-4" onClick={handleNextStep}>Analizza</Button>
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">5. Analisi e suggerimento personalizzato</h2>
                <p className="mb-4">{analysis}</p>
                <div className="space-y-2">
                  <h3 className="font-semibold">Scenari per ciascuna opzione:</h3>
                  {scenarios.map((s, i) => (
                    <p key={i}>🔹 {s}</p>
                  ))}
                </div>
                <Button className="mt-4" onClick={() => setStep(6)}>Visualizza storico decisionale</Button>
              </div>
            )}

            {step === 6 && (
              <div>
                <h2 className="text-xl font-semibold mb-2">6. Ciao {userName}, questo è il tuo storico decisionale</h2>
                {history.map((entry) => (
                  <Card key={entry.id} className="p-4 mb-2 border">
                    <h3 className="font-semibold">Decisione: {entry.decision}</h3>
                    <p>Opzioni: {entry.options.join(", ")}</p>
                    <p>Valori: {entry.values}</p>
                    <p>Suggerimento: {entry.suggestion}</p>
                  </Card>
                ))}
                <Button className="mt-4" onClick={() => {
                  setStep(2);
                  setDecision("");
                  setOptions(["", ""]);
                  setValues("");
                  setAnalysis("");
                  setScenarios([]);
                }}>Inizia una nuova decisione</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
