import { useState, useEffect } from 'react';

export function useTransactions() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('tracker_expenses');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('tracker_expenses', JSON.stringify(expenses));
  }, [expenses]);

  const totalBalance = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  const handleAddExpense = (newTransaction) => {
    setExpenses([newTransaction, ...expenses]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  const filteredExpenses = activeFilter === 'All'
    ? expenses
    : expenses.filter(item => item.category === activeFilter);

  return {
    totalBalance,
    activeFilter,
    setActiveFilter,
    filteredExpenses,
    handleAddExpense,
    handleDelete
  };
}
