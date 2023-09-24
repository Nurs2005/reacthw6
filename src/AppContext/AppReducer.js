import create from 'zustand';

const useStore = create((set) => ({
  budget: 2000,
  expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 40 },
    { id: 13, name: 'car wash', cost: 600 },
  ],
  addExpense: (expense) => set((state) => ({ expenses: [...state.expenses, expense] })),
  deleteExpense: (expenseId) => set((state) => ({ expenses: state.expenses.filter((expense) => expense.id !== expenseId) })),
  setBudget: (newBudget) => set({ budget: newBudget }),
}));

export default useStore;
