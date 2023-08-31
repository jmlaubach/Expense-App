import "./NewExpense.css";

function AddExpense(props) {
  const clickHandler = () => {
    props.onAddNewExpense();
  };

  return (
    <div className="new-expense__button">
      <button onClick={clickHandler}>Add New Expense</button>
    </div>
  );
}

export default AddExpense;
