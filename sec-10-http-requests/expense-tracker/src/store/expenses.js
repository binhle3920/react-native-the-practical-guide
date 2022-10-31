import {createSlice} from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: []
  },
  reducers: {
    setExpense: (state, action) => {
      state.expenses = action.payload.expenses.reverse();
    },
    addExpense: (state, action) => {
      state.expenses.unshift({...action.payload});
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter((expense) => expense.id !== action.payload.id);
    },
    updateExpense: (state, action) => {
      const updatableExpenseIndex = state.expenses.findIndex(
          (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state.expenses[updatableExpenseIndex];
      state.expenses[updatableExpenseIndex] = { ...updatableExpense, ...action.payload.data };
    }
  }
});

export const setExpense = expensesSlice.actions.setExpense;
export const addExpense = expensesSlice.actions.addExpense;
export const deleteExpense = expensesSlice.actions.deleteExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export default expensesSlice.reducer;
