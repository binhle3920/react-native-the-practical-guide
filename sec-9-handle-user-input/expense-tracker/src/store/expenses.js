import {createSlice} from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.55,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'A brand new cabinet',
    amount: 999.99,
    date: new Date('2022-10-21')
  },
  {
    id: 'e3',
    description: 'New clothes for my partner',
    amount: 14.75,
    date: new Date('2022-10-22')
  },
  {
    id: 'e4',
    description: 'A pair of shoes',
    amount: 59.55,
    date: new Date('2021-12-19')
  },
  {
    id: 'e5',
    description: 'A brand new cabinet',
    amount: 999.99,
    date: new Date('2022-10-21')
  },
  {
    id: 'e6',
    description: 'New clothes for my partner',
    amount: 14.75,
    date: new Date('2022-10-22')
  },
  {
    id: 'e7',
    description: 'A pair of shoes',
    amount: 59.55,
    date: new Date('2021-12-19')
  },
  {
    id: 'e8',
    description: 'A brand new cabinet',
    amount: 999.99,
    date: new Date('2022-10-21')
  },
  {
    id: 'e9',
    description: 'New clothes for my partner',
    amount: 14.75,
    date: new Date('2022-10-22')
  }
]

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: DUMMY_EXPENSES
  },
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      state.expenses.unshift({id: id, ...action.payload});
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

export const addExpense = expensesSlice.actions.addExpense;
export const deleteExpense = expensesSlice.actions.deleteExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export default expensesSlice.reducer;
