import {useState} from 'react';
// import ExpenseList from './expenseList';

const ExpenseForm = (props) => {
    const [name, setNames] = useState('');
    const [price, setPrices] = useState('');
    const [spender = [], setSpenders] = useState('')

    const handleNameChange = e => {
        setNames(e.target.value);
    }
     const handlePriceChange = e => {
        setPrices(e.target.value);
    }

    const handleSpenderChange = e => {
        setSpenders(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            expenseId: Math.floor(Math.random() * 100000),
            text: name,
            num: price,
            description: spender
        })

        setNames('');
        setPrices('');
        setSpenders('');
    }
    let userOptions = props.users.map((user, index) => (
        <label htmlFor="radioApple">{user.text}
        <input type="radio" id="radioApple"></input>
        </label>
    ))

    return (
        <form className="expense-input-container" onSubmit={handleSubmit} >
          <div className="expenses-inputs">
            <h3>expenses</h3>
            <button onClick={handleSubmit}>Add Expense</button>
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
                <div className="spender-options">
                    <div class="radio-toolbar" onChange={handleSpenderChange} value={[spender]} name="spender" size={props.users.length} multiple>
                         {userOptions}   
                    </div>
                 </div>
            </div>
        </form>
    )
}


export default ExpenseForm;