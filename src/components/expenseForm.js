import {useState} from 'react';

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
        let array = [];
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
          for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                array.push(checkboxes[i].value);
            }
        }
        setSpenders(array);
        console.log(array);
    }


    const handleSubmit = e => {
        e.preventDefault();

        handleSpenderChange();
    
        props.onSubmit({
            expenseId: Math.floor(Math.random() * 100000),
            text: name,
            num: price,
            description: spender
        })

        setNames('');
        setPrices('');
        setSpenders([]);
    }


    let userOptions = props.users.map((user, index) => (
        <div key={index} className="checkbox" onChange={handleSpenderChange} >
            <input type="checkbox"  id={`checkbox`} value={user.text} ></input>
            <label className="checkbox-label" htmlFor={user.text}>{user.text}</label>
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
                    <div className="spender-options" name="spender" size={props.users.length} multiple>
                         {userOptions}   
                    </div>
            </div>
        </form>
    )
}

export default ExpenseForm;