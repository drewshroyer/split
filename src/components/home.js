import React, {useState} from "react";
import NavBar from "./nav-bar"
import ExpenseList from "./expenseList";
import UserForm from "./userForm";
import User from "./user"

const Home = () => {
    const [users, setUsers] = useState([]);

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


    return (
        <div className="website-container">  
            <NavBar></NavBar>
            <div className="users-outer-container">
                <UserForm onSubmit={addUser}></UserForm>
                <div className="users-container">
                    <User users={users} removeUser={removeUser}></User>
                </div>
            </div>
            <ExpenseList users={users}></ExpenseList>
        </div>

    )
}

export default Home;