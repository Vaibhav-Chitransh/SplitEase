import { Plus } from "lucide-react";
import { useState } from "react";

const AddParticipant = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = parseFloat(amount);
    if (!name.trim() || isNaN(parsed) || parsed < 0) return;
    onAdd(name.trim(), parsed);
    setName("");
    setAmount("");
  };

  return (
    <div className="bg-white/90 backdrop-blur shadow-lg flex flex-col gap-6 justify-center mt-6 sm:mt-8 py-8 w-full max-w-xl md:max-w-3xl rounded-xl px-4 border border-slate-200/70">
      <p className="text-slate-600 font-bold text-lg sm:text-xl">ADD PERSON</p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Name"
          className="outline-none border border-slate-200 rounded-md px-2 w-full sm:w-1/2 h-10 bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount Spent"
          className="outline-none border border-slate-200 rounded-md px-2 w-full sm:w-1/4 h-10 bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          type="submit"
          className="bg-sky-600 rounded-md w-full sm:w-1/4 px-4 py-2 flex gap-2 cursor-pointer hover:bg-sky-700 transition-transform duration-200 ease-out hover:scale-105 shadow-sm"
        >
          <Plus className="text-white" />
          <span className="text-white font-semibold">Add Person</span>
        </button>
      </form>
    </div>
  );
};

export default AddParticipant;
