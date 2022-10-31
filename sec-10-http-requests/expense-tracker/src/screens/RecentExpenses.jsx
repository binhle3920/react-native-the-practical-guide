import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getDateMinusDays} from "../utils/date";
import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import {fetchExpensesAxios} from "../utils/http";
import {setExpense} from "../store/expenses";
import LoadingOverlay from "../components/common/LoadingOverlay";
import ErrorOverlay from "../components/common/ErrorOverlay";

const RecentExpenses = () => {
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
        setError("Could not fetch expenses!");
      }

      setIsLoading(false);
    };

    getExpenses();
  }, []);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date > date7DaysAgo) && (expense.date <= today);
  })

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />
  }

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 Days"
        fallbackText="No expenses registered for the last 7 days"
      />
  );
};

export default RecentExpenses;
