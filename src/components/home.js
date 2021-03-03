import React from "react";
import NavBar from "./nav-bar"
import UserList from "./userList"

const Home = () => {


    return (
        <div className="website-container">  
            <NavBar></NavBar>
            <UserList></UserList>   
        </div>

    )
}

export default Home;