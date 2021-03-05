import React from 'react';
import ExpenseForm from "./expenseForm";
import Expense from "./expense";
import TotalExpense from "./totalExpense";

function ExpenseList({users, addExpense, expenses, removeExpense}) {

    return (
        <div>
             <div className="expenses-outer-container">
                <ExpenseForm users={users} onSubmit={addExpense}></ExpenseForm>
                <div className="expenses-container">
                    <div className="line-item-expense-container">
                        <Expense expenses={expenses} removeExpense={removeExpense}></Expense>
                    </div>
                    <TotalExpense expenses={expenses}></TotalExpense>
                </div>  
            </div>
        </div>
    )
}

export default ExpenseList;