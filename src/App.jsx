import { useState } from "react";
import AddParticipant from "./components/AddParticipant";
import Header from "./components/Header";
import PersonsList from "./components/PersonsList";
import Settlement, { calculateSettlements } from "./components/Settlement";
import { Calculator } from "lucide-react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const addPerson = (name, amount) => {
    setPersons((prev) => [...prev, { id: crypto.randomUUID(), name, amount }]);
    setShowResult(false);
    console.log("added");
  };

  const removePerson = (id) => {
    setPersons((prev) => prev.filter((p) => p.id !== id));
    setShowResult(false);
  };

  const transactions = calculateSettlements(persons);
  const total = persons.reduce((s, p) => s + p.amount, 0);
  const perPerson = persons.length > 0 ? total / persons.length : 0;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 px-4 sm:px-8 py-6 sm:py-10">
      <div className="mx-auto w-full max-w-5xl flex flex-col items-center">
        <Header />

        <AddParticipant onAdd={addPerson} />

        <PersonsList persons={persons} onRemove={removePerson} />

        {persons.length >= 2 && !showResult && (
          <div className="flex justify-center pt-2 w-full max-w-3xl">
            <button
              onClick={() => setShowResult(true)}
              size="lg"
              className="bg-sky-600 rounded-md w-full sm:w-auto mt-4 px-5 py-2.5 flex gap-2 cursor-pointer hover:bg-sky-700 transition-transform duration-200 ease-out hover:scale-105 shadow-sm"
            >
              <Calculator className="text-white" />
              <span className="text-white font-semibold">Calculate Split</span>
            </button>
          </div>
        )}

        {showResult && (
          <Settlement transactions={transactions} perPerson={perPerson} />
        )}
      </div>
    </div>
  );
};

export default App;
