import React, {useEffect, useState} from 'react';

import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import {useDispatch, useSelector} from "react-redux";
import {fetchExpensesAxios} from "../utils/http";
import {setExpense} from "../store/expenses";
import LoadingOverlay from "../components/common/LoadingOverlay";
import ErrorOverlay from "../components/common/ErrorOverlay";


const AllExpenses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const expenses = useSelector((state) => state.expenses.expenses);

  const dispatch = useDispatch();

  useEffect(() => {
    const getExpenses = async () => {
      setIsLoading(true);

      try {
        const fetchedExpenses = await fetchExpensesAxios();
        dispatch(setExpense({expenses: fetchedExpenses}));
      } catch (error) {
        console.log(error);
        setError("Could not fetch expenses!");
      }

      setIsLoading(false);
    };

    getExpenses();
  }, []);

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />
  }

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <ExpensesOutput
        expenses={expenses}
        expensesPeriod="Total"
        fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
