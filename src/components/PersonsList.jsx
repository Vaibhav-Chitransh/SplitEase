import { X, User } from "lucide-react";

const PersonsList = ({ persons, onRemove }) => {
  if (persons.length === 0) {
    return (
      <div className="bg-white/90 backdrop-blur shadow-lg mt-6 flex flex-col items-center py-8 px-6 rounded-xl w-full max-w-xl md:max-w-3xl border border-slate-200/70 dark:bg-slate-900/70 dark:border-slate-800 transition-colors duration-300">
        <p className="font-semibold text-slate-600 text-sm dark:text-slate-400">
          No participants yet. Add someone above to get started.
        </p>
      </div>
    );
  }

  const total = persons.reduce((s, p) => s + p.amount, 0);

  return (
    <div className="bg-white/90 backdrop-blur shadow-lg mt-6 flex flex-col items-center py-6 px-6 rounded-xl w-full max-w-xl md:max-w-3xl border border-slate-200/70 dark:bg-slate-900/70 dark:border-slate-800 transition-colors duration-300">
      <div className="pb-3 mb-2 border-b border-slate-200 flex items-center justify-between w-full dark:border-slate-800">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider dark:text-slate-400">
          Participants
        </h2>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Total: ₹{total.toFixed(2)}
        </span>
      </div>

      <ul className="w-full divide-y divide-slate-200 dark:divide-slate-800">
        {persons.map((p) => (
          <li
            key={p.id}
            className="flex items-center justify-between px-2 py-3 group transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center ring-1 ring-sky-200 dark:bg-sky-500/10 dark:ring-sky-400/30">
                <User className="w-4 h-4 text-sky-700 dark:text-sky-300" />
              </div>
              <span className="font-medium text-slate-800 dark:text-slate-100">{p.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-800 tabular-nums dark:text-slate-100">
                ₹{p.amount.toFixed(2)}
              </span>
              <button
                onClick={() => onRemove(p.id)}
                className="w-7 h-7 rounded-md flex items-center justify-center cursor-pointer text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 dark:text-slate-500 dark:hover:text-red-400 dark:hover:bg-red-500/10"
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
