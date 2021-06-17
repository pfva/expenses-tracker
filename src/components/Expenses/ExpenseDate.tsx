import Card from '../UI/Card';
import './ExpenseDate.css';

type ExpenseDateProps = {
  date: Date
}

function ExpenseDate(props: ExpenseDateProps) {
  const month: string = props.date.toLocaleString('en-US', { month: 'long' });
  const day: string = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year: number = props.date.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
