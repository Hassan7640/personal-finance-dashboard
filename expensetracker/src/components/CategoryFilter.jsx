export default function CategoryFilter({ activeFilter, onFilterChange }) {
  const categories = ['All', 'Food', 'Rent', 'Entertainment', 'Streaming', 'Income'];

  return (
    <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm">
      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 text-left">
        Filter By Category
      </h4>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all border ${
              activeFilter === cat
                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            {cat === 'Rent' ? 'Rent/Bills' : cat === 'Income' ? 'Income (Deposits)' : cat}
          </button>
        ))}
      </div>
    </div>
  );
}