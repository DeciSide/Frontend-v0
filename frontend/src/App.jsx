import { motion } from 'framer-motion';

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded shadow max-w-xl text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Benvenuto su DeciSide</h1>
        <p className="text-lg text-gray-700">La piattaforma che ti aiuta a prendere decisioni importanti nella vita.</p>
        <p className="mt-4 text-sm text-gray-500">Versione demo in esecuzione correttamente.</p>
      </motion.div>
    </main>
  );
}

export default App;
