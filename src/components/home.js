import React, {useState} from "react";
import NavBar from "./nav-bar"
import ExpenseList from "./expenseList";
import UserForm from "./userForm";
import User from "./user"

const Home = () => {
    const [users, setUsers] = useState([]);
    const [expenses, setExpenses] = useState([]);

    const addUser = (user) => {
        if (!user.text || /^\s*$/.test(user.text)) {
            return;
        }
        const newUsers = [user, ...users];
        setUsers(newUsers);
        console.log(user,...users);
    }   

    const removeUser = (id) => {
        const removeArr = [...users].filter(user => user.id !== id)
        setUsers(removeArr);
    }

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
        <div className="website-container">  
            <NavBar></NavBar>
            <div className="restructure-container">
            <div className="users-outer-container">
                <UserForm onSubmit={addUser}></UserForm>
                <div className="users-container">
                    <User expenses={expenses} users={users} removeUser={removeUser}></User>
                </div>
            </div>
            <div className="thin-divider"></div>
            <ExpenseList users={users} removeExpense={removeExpense} expenses={expenses} addExpense={addExpense}></ExpenseList>
            </div>
        </div>

    )
}

export default Home;