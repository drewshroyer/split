import React, {useState} from 'react';
import UserForm from "./userForm";

function UserList() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        if (!user.text || /^\s*$/.test(user.text)) {
            return;
        }
        const newUsers = [user, ...users];
        setUsers(newUsers);
        console.log(...users);
    }   

    return (
        <div>
            <UserForm onSubmit={addUser}></UserForm>
        </div>
    )
}

export default UserList;