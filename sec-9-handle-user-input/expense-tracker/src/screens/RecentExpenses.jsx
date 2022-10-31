import ExpensesOutput from "../components/expenses-output/ExpensesOutput";
import {useSelector} from "react-redux";
import {getDateMinusDays} from "../utils/date";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date > date7DaysAgo) && (expense.date <= today);
  })

  return (
      <ExpensesOutput
          expenses={recentExpenses}
          expensesPeriod="Last 7 Days"
          fallbackText="No expenses registered for the last 7 days"/>
  );
};

export default RecentExpenses;
