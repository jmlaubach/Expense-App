import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";

function NewExpense(props) {
  const [viewForm, setViewForm] = useState(true);

  const addNewExpenseHandler = () => {
    setViewForm(false);
  };

  const cancelNewExpenseHandler = () => {
    setViewForm(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {viewForm ? (
        <AddExpense onAddNewExpense={addNewExpenseHandler} />
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelNewExpense={cancelNewExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
