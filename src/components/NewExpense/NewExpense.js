import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (previousExpenseData) => {
    const expenseData = {
      ...previousExpenseData,
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
