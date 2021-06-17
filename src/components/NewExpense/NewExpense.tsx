import { ExpenseDataInputType, ExpenseDataType } from '../../types/commonTypes';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

type NewExpenseProps = {
  onAddExpense: (expenseData: ExpenseDataType) => void;
}

const NewExpense = (props: NewExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseDataInputType) => {
    const expenseData: ExpenseDataType = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
