import React from 'react';
import { UserForm } from './userForm';

const UsersContainer = ( values, handleChange ) => {

  return (
    <div  className="users-outer-container">
        <UserForm values={values} handleChange={handleChange}></UserForm>
        <div className="users-container">
            <div className="user-index-item">{values.name}</div>
            <div className="user-index-item">Joanna</div>
            <div className="user-index-item">Camille</div>
            <div className="user-index-item">Tito</div>   
        </div>
      </div>
    )
}

export default UsersContainer;