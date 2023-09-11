import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2023");
  // const [filterInfoText, setFilterInfoText] = useState("2020, 2021 & 2022");

  const filterChangeHandler = (selectedYear) => {
    setYearSelected(selectedYear);
    // if (selectedYear === "2020") {
    //   setFilterInfoText("2021, 2022 & 2023");
    // } else if (selectedYear === "2021") {
    //   setFilterInfoText("2020, 2022 & 2023");
    // } else if (selectedYear === "2022") {
    //   setFilterInfoText("2020, 2021 & 2023");
    // } else {
    //   setFilterInfoText("2020, 2021 & 2022");
    // }
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearSelected}
          onAddFilter={filterChangeHandler}
        />
        {/* <p className="white"> data for years {filterInfoText} is hidden</p> */}
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
