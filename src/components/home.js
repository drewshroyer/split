import React from "react";
import NavBar from "./nav-bar"
import UserList from "./userList"
import ExpenseList from "./expenseList";

const Home = () => {

    return (
        <div className="website-container">  
            <NavBar></NavBar>
            <UserList></UserList>   
            <ExpenseList></ExpenseList>
        </div>

    )
}

export default Home;