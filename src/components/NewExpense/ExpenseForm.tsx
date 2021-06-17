import { useState } from 'react';
import { ExpenseDataInputType } from '../../types/commonTypes';
import './ExpenseForm.css';

type ExpenseFormProps = {
  onSaveExpenseData: (expenseData: ExpenseDataInputType) => void;
}

const ExpenseForm = (props: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    const expenseData: ExpenseDataInputType = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    hideFormHandler();
  };

  const showFormHandler = (): void => {
    setShowForm(true);
  };

  const hideFormHandler = (): void => {
    setShowForm(false);
  };

  return showForm ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={hideFormHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  ) : (
    <>
      <h2 className="new-expense__heading">Add your expenses to visualize your spending on a monthly basis</h2>
      <button onClick={showFormHandler}>Add New Expense</button>
    </>
  );
};

export default ExpenseForm;
