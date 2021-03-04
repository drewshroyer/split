import React, {useState} from 'react';
import ExpenseForm from "./expenseForm";
import Expense from "./expense";
import TotalExpense from "./totalExpense";

function ExpenseList({users}) {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        if (!expense.text || /^\s*$/.test(expense.text)) {
            return;
        }
        const newExpenses = [expense, ...expenses];
        setExpenses(newExpenses);
        console.log(expense, ...expenses);
    }   

    const removeExpense = (expenseId) => {
        const removeArr = [...expenses].filter(expense => expense.expenseId !== expenseId)
        setExpenses(removeArr);
    }

 
    return (
        <div>
             <div className="expenses-outer-container">
                <ExpenseForm users={users} onSubmit={addExpense}></ExpenseForm>
                <div className="expenses-container">
                    <Expense expenses={expenses} removeExpense={removeExpense}></Expense>
                </div>
                <TotalExpense expenses={expenses}></TotalExpense>
            </div>
        </div>
    )
}

export default ExpenseList;