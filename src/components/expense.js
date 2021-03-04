import React from 'react';
import { IoIosCloseCircle } from "react-icons/io"

function Expense({expenses, removeExpense}) {

    return expenses.map((expense, index) => (
        <div className="expense-index-item" key={index}>
            <div>{expense.text}</div> 
            <div className="close-circle-icons">
                <div>{expense.num}</div> 
                <IoIosCloseCircle onClick={() => removeExpense(expense.expenseId)}>                 {expense.description}</IoIosCloseCircle>
            </div>
        </div>
    ))
}

export default Expense;