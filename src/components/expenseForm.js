import {useState} from 'react';
// import ExpenseList from './expenseList';

const ExpenseForm = (props) => {
    const [name, setNames] = useState('');
    const [price, setPrices] = useState('');
    const [spender, setSpenders] = useState([]);

    const handleNameChange = e => {
        setNames(e.target.value);
    }
     const handlePriceChange = e => {
        setPrices(e.target.value);
    }

    const handleSpenderChange = e => {
        setSpenders([...spender, e.target.value]);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            expenseId: Math.floor(Math.random() * 100000),
            text: name,
            num: parseInt(price),
            description: spender
        })

        setNames('');
        setPrices('');
        setSpenders([]);

        let currentChecked = document.getElementsByClassName('checkbox');
        for(let i = 0; i<currentChecked; i++) {
            currentChecked.checked = false;
        }
    }

    let userOptions = props.users.map((user, index) => (
        <div key={index} className="checkbox">
            <input type="checkbox"  id={`checkbox`} value={user.text}></input>
            <label htmlFor={user.text}>{user.text}</label>
         </div>
    ))

    
    return (
        <form className="expense-input-container" onSubmit={handleSubmit} >
          <div className="expenses-inputs">
            <h3>expenses</h3>
            <button className="add-expense-botton" onClick={handleSubmit}>Add Expense</button>
          </div>
          <div className="expense-price-name-inputs">
                <input
                placeholder="Name"
                className="expense-input"
                name="name"
                value={name}
                onChange={handleNameChange}
                >
                </input>
                <input
                placeholder="Price"
                className="expense-input"
                name="price"
                value={price}
                onChange={handlePriceChange}>
                </input>
            </div>
            <div className="spender-selection-container">
                <h3>spender:</h3>
                    <div className="spender-options" onChange={handleSpenderChange} name="spender" size={props.users.length} multiple>
                         {userOptions}   
                    </div>
            </div>
        </form>
    )
}

export default ExpenseForm;