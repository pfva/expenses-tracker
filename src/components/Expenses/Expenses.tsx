import { useState } from 'react';
import { ExpenseDataType } from '../../types/commonTypes';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

type ExpensesProps = {
  expenses: ExpenseDataType[]
}

function Expenses(props: ExpensesProps) {
  const [pickedYear, setPickedYear] = useState('2021');

  const changeYearHandler = (pickedYear: string): void => {
    setPickedYear(pickedYear);
  };

  const filteredExpenses: ExpenseDataType[] = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={changeYearHandler}
        pickedYear={pickedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
