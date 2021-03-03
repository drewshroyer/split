import React, {useState} from 'react';
import UserForm from "./userForm";
import User from "./user"

function UserList() {
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
        <div>
             <div className="users-outer-container">
                <UserForm onSubmit={addUser}></UserForm>
                <div className="users-container">
                    <User users={users} removeUser={removeUser}></User>
                </div>
            </div>
        </div>
    )
}

export default UserList;