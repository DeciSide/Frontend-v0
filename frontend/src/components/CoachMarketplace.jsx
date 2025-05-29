import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const coaches = [
  {
    id: 1,
    name: "Giulia Rossi",
    expertise: "Scelte di carriera e orientamento universitario",
    bio: "Coach certificata con 7 anni di esperienza in supporto ai giovani in transizione."
  },
  {
    id: 2,
    name: "Luca Bianchi",
    expertise: "Transizioni professionali e burnout",
    bio: "Ex manager, ora mentor specializzato in coaching individuale."
  },
  {
    id: 3,
    name: "Elena Verdi",
    expertise: "Relazioni e benessere personale",
    bio: "Psicologa e coach relazionale con focus su scelte personali difficili."
  }
];

export default function CoachMarketplace() {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [userName, setUserName] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-4 text-center">Prenota una sessione con un coach</h2>
        {!selectedCoach ? (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {coaches.map((coach) => (
              <Card key={coach.id} className="p-4 shadow">
                <CardContent>
                  <h3 className="text-xl font-semibold">{coach.name}</h3>
                  <p className="text-sm text-gray-600">{coach.expertise}</p>
                  <p className="my-2">{coach.bio}</p>
                  <Button onClick={() => setSelectedCoach(coach)}>Prenota</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Prenotazione con {selectedCoach.name}</h3>
            <p>Inserisci il tuo nome per confermare la sessione:</p>
            <Input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Il tuo nome" className="max-w-sm mx-auto" />
            <Button disabled={!userName}>Conferma</Button>
            <div>
              <Button variant="outline" onClick={() => setSelectedCoach(null)}>Torna indietro</Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
