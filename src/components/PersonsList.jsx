import { X, User } from "lucide-react";

const PersonsList = ({ persons, onRemove }) => {
  if (persons.length === 0) {
    return (
      <div className="bg-white/90 backdrop-blur shadow-lg mt-6 flex flex-col items-center py-8 px-6 rounded-xl w-full max-w-xl md:max-w-3xl border border-slate-200/70">
        <p className="font-semibold text-slate-600 text-sm">
          No participants yet. Add someone above to get started.
        </p>
      </div>
    );
  }

  const total = persons.reduce((s, p) => s + p.amount, 0);

  return (
    <div className="bg-white/90 backdrop-blur shadow-lg mt-6 flex flex-col items-center py-6 px-6 rounded-xl w-full max-w-xl md:max-w-3xl border border-slate-200/70">
      <div className="pb-3 mb-2 border-b border-slate-200 flex items-center justify-between w-full">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Participants
        </h2>
        <span className="text-sm text-slate-500">
          Total: ₹{total.toFixed(2)}
        </span>
      </div>

      <ul className="w-full divide-y divide-slate-200">
        {persons.map((p) => (
          <li
            key={p.id}
            className="flex items-center justify-between px-2 py-3 group transition-colors hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center ring-1 ring-sky-200">
                <User className="w-4 h-4 text-sky-700" />
              </div>
              <span className="font-medium text-slate-800">{p.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-800 tabular-nums">
                ₹{p.amount.toFixed(2)}
              </span>
              <button
                onClick={() => onRemove(p.id)}
                className="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
                aria-label={`Remove ${p.name}`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonsList;
