import { useState } from 'react';

export default function TransactionForm({ onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); 

    if (!description.trim()) {
      setError('Please enter a description for this transaction.');
      return;
    }

    if (!amount) {
      setError('Please enter a monetary amount.');
      return;
    }

    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Amount must be a positive number greater than £0.00.');
      return;
    }

    onAddExpense({
      id: Date.now(),
      description: description.trim(),
      amount: category === 'Income' ? parsedAmount : -Math.abs(parsedAmount),
      category
    });

    setDescription('');
    setAmount('');
  };

  const isFormIncomplete = !description.trim() || !amount;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 border border-slate-200 rounded-xl mb-8 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-800">Add New Transaction</h3>
      
      {error && (
        <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium rounded-lg animate-fade-in text-left">
          ⚠️ {error}
        </div>
      )}
      
      <input 
        type="text" 
        placeholder="Description (e.g., Netflix)" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 ${
          error && !description.trim() ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
        }`}
      />
      
      <input 
        type="number" 
        step="0.01"
        placeholder="Amount (£)" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 ${
          error && (!amount || parseFloat(amount) <= 0) ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
        }`}
      />
      
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
      >
        <option value="Food">Food</option>
        <option value="Rent">Rent/Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Streaming">Streaming Subscription</option>
        <option value="Income">Income (Deposit)</option>
      </select>
      
      <button 
        type="submit" 
        disabled={isFormIncomplete}
        className={`w-full py-2.5 text-white font-medium rounded-lg transition-all shadow-sm ${
          isFormIncomplete 
            ? 'bg-slate-300 cursor-not-allowed text-slate-500' 
            : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.99]'
        }`}
      >
        Add Transaction
      </button>
    </form>
  );
}
