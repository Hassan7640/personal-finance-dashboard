import { useState, useEffect } from 'react';
import BalanceBanner from './components/BalanceBanner';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import CategoryFilter from './components/CategoryFilter';
import {useTransactions} from './hooks/useTransactions';

export default function App() {

   const {
    totalBalance,
    activeFilter,
    setActiveFilter,
    filteredExpenses,
    handleAddExpense,
    handleDelete
  } = useTransactions();

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
            <span>💷</span> Expense Tracker 
          </h1>
          <p className="text-sm text-slate-500 mt-1">Track your income and streaming subscriptions seamlessly</p>
        </header>
        
        <main className="space-y-6">
          <BalanceBanner totalBalance={totalBalance} />
          <TransactionForm onAddExpense={handleAddExpense} />
          <CategoryFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <TransactionList expenses={filteredExpenses} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
}
