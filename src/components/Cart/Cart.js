import React from 'react';

const Cart = ({ cart, handleRemoveItemFromCart }) => {
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
        </div>
    );
};

export default Cart;