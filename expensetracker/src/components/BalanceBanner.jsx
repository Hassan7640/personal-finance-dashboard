export default function BalanceBanner({ totalBalance }) {
  const isPositive = totalBalance >= 0;
  
  return (
    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl mb-6 shadow-sm text-center">
      <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Current Balance</h2>
      <h1 className={`text-3xl font-bold mt-1 ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
        {isPositive ? '£' : '-£'}{Math.abs(totalBalance).toFixed(2)}
      </h1>
    </div>
  );
}
