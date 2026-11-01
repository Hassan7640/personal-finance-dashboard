export default function TransactionList({ expenses, onDelete }) {
  return (
    <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">Transaction History</h3>
      
      {expenses.length === 0 ? (
        <p className="text-slate-400 text-sm text-center py-4">No transactions recorded yet.</p>
      ) : (
        <ul className="space-y-3 p-0 m-0">
          {expenses.map((item) => {
            const isExpense = item.amount < 0;
            return (
              <li key={item.id} className={`flex justify-between items-center p-4 bg-slate-50 border-l-4 rounded-r-lg shadow-sm transition-all hover:translate-x-0.5 ${isExpense ? 'border-l-rose-500' : 'border-l-emerald-500'}`}>
                <div className="text-left">
                  <span className="font-semibold text-slate-800 block text-sm sm:text-base">{item.description}</span>
                  <span className="text-xs text-slate-500 font-medium px-2 py-0.5 bg-slate-200 rounded mt-1 inline-block">{item.category}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`font-bold text-sm sm:text-base ${isExpense ? 'text-rose-600' : 'text-emerald-600'}`}>
                    {isExpense ? '-£' : '+£'}{Math.abs(item.amount).toFixed(2)}
                  </span>
                  <button onClick={() => onDelete(item.id)} className="text-slate-400 hover:text-rose-600 p-1 rounded transition-colors text-lg line-none border-none bg-transparent cursor-pointer" aria-label="Delete transaction">
                    ✕
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}