import React from 'react';
import UserExpense from './userExpense';
import { IoIosCloseCircle } from "react-icons/io"

function User({users, removeUser, expenses}) {

    return users.map((user, index) => (
        <div className="user-index-item" key={index}>
            <div>{user.text}</div> 
            <div className="close-circle-icons">
                <UserExpense expenses={expenses} user={user}></UserExpense>
                <IoIosCloseCircle onClick={() => removeUser(user.id)}></IoIosCloseCircle>
            </div>
        </div>
    ))
}

export default User;