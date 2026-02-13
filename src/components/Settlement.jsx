import { ArrowRight } from "lucide-react";

export const calculateSettlements = (persons) => {
  if (persons.length < 2) return [];

  const total = persons.reduce((s, p) => s + p.amount, 0);
  const perPerson = total / persons.length;

  const balances = persons.map((p) => ({
    name: p.name,
    balance: p.amount - perPerson,
  }));

  const debtors = balances
    .filter((b) => b.balance < -0.01)
    .map((b) => ({ ...b, balance: -b.balance }))
    .sort((a, b) => b.balance - a.balance);

  const creditors = balances
    .filter((b) => b.balance > 0.01)
    .sort((a, b) => b.balance - a.balance);

  let txns = [];

  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const amt = Math.min(debtors[i].balance, creditors[j].balance);
    if (amt > 0.01) {
      txns.push({ from: debtors[i].name, to: creditors[j].name, amount: amt });
    }
    debtors[i].balance -= amt;
    creditors[j].balance -= amt;
    if (debtors[i].balance < 0.01) i++;
    if (creditors[j].balance < 0.01) j++;
  }

  return txns;
};

const Settlement = ({ transactions, perPerson }) => {
  if (transactions.length === 0) {
    return (
      <div className="bg-white/90 backdrop-blur shadow-lg mt-6 rounded-xl p-6 text-center w-full max-w-xl md:max-w-3xl border border-slate-200/70">
        <p className="text-slate-600 text-sm font-semibold">
          Everyone is settled up!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur shadow-lg mt-6 rounded-xl overflow-hidden w-full max-w-xl md:max-w-3xl border border-slate-200/70">
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Settlement
        </h2>
        <span className="text-sm text-slate-500">
          ₹{perPerson.toFixed(2)} per person
        </span>
      </div>
      <div className="p-4 sm:p-6 space-y-3">
        {transactions.map((t, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-slate-50 transition-colors"
          >
            <span className="font-medium text-slate-800 text-sm w-1/3 truncate">
              {t.from}
            </span>
            <div className="flex items-center justify-center gap-2 text-sky-700 w-1/3">
              <span className="text-xs font-semibold tabular-nums">
                ₹{t.amount.toFixed(2)}
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <span className="font-medium text-slate-800 text-sm w-1/3 text-right truncate">
              {t.to}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settlement;
