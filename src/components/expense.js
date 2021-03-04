import React from 'react';
import { IoIosCloseCircle } from "react-icons/io"

function Expense({expenses, removeExpense}) {

    return expenses.map((expense, index) => (
        <div className="expense-index-item" key={index}>
            <div>{expense.text}</div> 
            <div>{expense.num}</div> 
            <div className="close-circle-icons">
                {expense.description}
                <IoIosCloseCircle onClick={() => removeExpense(expense.expenseId)}>                 {expense.description}</IoIosCloseCircle>
            </div>
        </div>
    ))
}

export default Expense;