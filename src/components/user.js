import React from 'react';
import { IoIosCloseCircle } from "react-icons/io"

function User({users, removeUser}) {

    return users.map((user, index) => (
        <div className="user-index-item" key={index}>
            <div>{user.text}</div> 
            <div className="close-circle-icons">
                <IoIosCloseCircle onClick={() => removeUser(user.id)}></IoIosCloseCircle>
            </div>
        </div>
    ))
}

export default User;