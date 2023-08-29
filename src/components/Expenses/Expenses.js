import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter'

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const chooseYear = (chosenYear) => {
    setFilteredYear(chosenYear);
  };

  return (
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onYearChoice={chooseYear}/>
        <ExpenseItem
          title={props.expenseList[0].title}
          amount={props.expenseList[0].amount}
          date={props.expenseList[0].date}
        />
        <ExpenseItem
          title={props.expenseList[1].title}
          amount={props.expenseList[1].amount}
          date={props.expenseList[1].date}
        />
        <ExpenseItem
          title={props.expenseList[2].title}
          amount={props.expenseList[2].amount}
          date={props.expenseList[2].date}
        />
        <ExpenseItem
          title={props.expenseList[3].title}
          amount={props.expenseList[3].amount}
          date={props.expenseList[3].date}
        />
      </Card>
  );
}

export default Expenses;