import React from 'react';

const Cart = ({ cart, handleRemoveItemFromCart }) => {
    //conditional messege rendering
    let message;
    if (cart.length === 0) {
        message = <h5>Please buy something!!!</h5>
    }
    else if (cart.length === 1) {
        message = <h4>Forgot your loved one??? <br /> <br /> Buy another now!!!</h4>
    }
    else if (cart.length === 2) {
        message = <h6>only for you!!</h6>
    }
    else {
        message = <h6>Thanks for buying!!!</h6>
    }


    return (
        <div>
            <h2>Order Summary</h2>
            <h6>Order Quantity:{cart.length}</h6>
            {
                cart.map(tshirt => <p
                    key={tshirt.id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItemFromCart(tshirt)} style={{ marginLeft: 5 }}>X</button>
                </p>)
            }
            {message}
            {/* conditional rendering by ternary operator */}
            {cart.length === 2 ? <p>Next one is 20% less!!!</p> : <p></p>}
        </div>
    );
};

export default Cart;