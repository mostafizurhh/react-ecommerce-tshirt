import React from 'react';
import './Tshirt.css'

const Tshirt = ({ tshirt }) => {
    const { picture, name, id, price, gender } = tshirt
    return (
        <div className='tshirt'>
            <div>
                <img src={picture} alt="" />
            </div>
            <h6>{name}</h6>
            <p><small>Price: ${price}</small></p>
            <p><small>Gender: {gender}</small></p>
            <button style={{ marginTop: 10 }}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;