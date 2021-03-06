import { ExpenseDataType } from '../../types/commonTypes';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

type ExpensesListProps = {
  expenses: ExpenseDataType[]
}

const ExpensesList = (props: ExpensesListProps) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found for the selected year.
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
