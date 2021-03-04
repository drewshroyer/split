import {useState} from 'react';

const UserForm = (props) => {
    const [name, setNames] = useState('');
    const [phone, setPhones] = useState('');


    const handleNameChange = e => {
        setNames(e.target.value);
    }
     const handlePhoneChange = e => {
        setPhones(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: name,
            num: phone,
            due: 0.00
        })

        setNames('');
        setPhones('');
    }

    return (
        <form className="user-input-container" onSubmit={handleSubmit} >
          <div className="top-bar-lunchers">
            <h3>crew</h3>
            <button onClick={handleSubmit}>Enter</button>
          </div>
            <input
              placeholder="Name"
              className="user-input"
              name="name"
              value={name}
              onChange={handleNameChange}
            >
            </input>
            <input
              placeholder="Phone Number"
              className="user-input"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}>
            </input>
        </form>
    )
}


export default UserForm;