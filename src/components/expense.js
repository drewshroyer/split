import React from 'react';
import { IoIosCloseCircle } from "react-icons/io"

function Expense({expenses, removeExpense}) {
 

    return expenses.map((expense, index) => (
        <div className="expense-index-item" key={index}>
            <div>{expense.text}</div> 
            <div className="close-circle-icons-large">
                <div className="item-container">{expense.description.map((user, index1) => (
                        <div className="item" key={index1}>{user}</div>))}
                </div>
                <div className="line-item-expense">${expense.num}</div> 
                <IoIosCloseCircle onClick={() => removeExpense(expense.expenseId)}></IoIosCloseCircle>
            </div>
        </div>
    ))
}

export default Expense;