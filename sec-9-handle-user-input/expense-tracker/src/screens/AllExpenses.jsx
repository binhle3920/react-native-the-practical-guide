import React from 'react';

import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import {useSelector} from "react-redux";

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  return (
    <ExpensesOutput
        expenses={expenses}
        expensesPeriod="Total"
        fallbackText="No registered expenses found!"/>
  );
};

export default AllExpenses;
