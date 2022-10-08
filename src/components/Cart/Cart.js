import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {

    // Conditional Rendering
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!!!</p>
    }
    else {
        message = <p>Thanks for buying!</p>
    }
    return (
        <div>
            <h3 className={cart.length > 0 ? `color-orange` : 'color-blue'}>Orders Summary</h3>
            <h5 className={`select-item ${cart.length > 0 && 'color-yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }

            {/* Conditional Rendering display */}
            {
                message
            }
            {/* ternary operation condition ? true : false */}
            {
                cart.length === 1 ? <p></p> : <p></p>
            }
            {/* && operator (if condition is true, i want to display something) */}
            {
                cart.length === 2 && <h2>Thanks for buying Two Items</h2>
            }
        </div>
    );
};

export default Cart;

/* 
Conditional Rendering
1. use element in a variable and then use if-else to set value
    example: 
           let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!!!</p>
    }
    else {
        message = <p>Thanks for buying!</p>
    }
    {message}

2. ternary operation condition ? true : false
    example: 
        {cart.length === 1 ? <p></p> : <p></p>}

3. && operator (if condition is true, i want to display something)
    example: 
        {cart.length === 2 && <h2>Thanks for buying Two Items</h2>}

4. || operator (if condition is false, i want to display something)
    example: 
        {cart.length === 2 || <h2>Thanks for buying Two Items</h2>}
*/