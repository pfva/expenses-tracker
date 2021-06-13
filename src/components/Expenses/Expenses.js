import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [pickedYear, setPickedYear] = useState('2021');

  const changeYearHandler = pickedYear => {
    setPickedYear(pickedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={changeYearHandler} pickedYear={pickedYear} />
      {props.expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
