import React from 'react';

const Cart = ({ cart, handleRemoveItemFromCart }) => {
    //conditional message rendering
    let meassage;
    if (cart.length === 0) {
        meassage = <h5>Please buy something!!!</h5>
    }
    else if (cart.length === 1) {
        meassage = <h4>Forgot your loved one??? <br /> <br /> Buy another now!!!</h4>
    }
    else {
        meassage = <h6>Thanks for buying!!</h6>
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
            {meassage}
        </div>
    );
};

export default Cart;