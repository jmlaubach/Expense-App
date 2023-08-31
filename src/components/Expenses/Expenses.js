import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const chooseYear = (chosenYear) => {
    setFilteredYear(chosenYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter 
        selected={filteredYear} 
        onYearChoice={chooseYear} 
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
