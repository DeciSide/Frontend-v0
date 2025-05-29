import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl space-y-6"
      >
        <h1 className="text-4xl font-bold">Benvenuto su <span className="text-blue-600">DeciSide</span></h1>
        <p className="text-lg text-gray-700">
          La piattaforma che ti aiuta a prendere decisioni importanti nella vita grazie all'intelligenza artificiale e al supporto umano.
        </p>
        <ul className="text-left text-gray-600 list-disc list-inside">
          <li>Guidato passo-passo dall'AI</li>
          <li>Simulazione degli scenari possibili</li>
          <li>Storico delle decisioni personali</li>
          <li>Supporto da coach umani on-demand</li>
        </ul>
        <Button className="text-white bg-blue-600 hover:bg-blue-700">Provalo ora</Button>
      </motion.div>
    </div>
  );
}
