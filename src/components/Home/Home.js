import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])

    //handle add to cart data
    const handleAddToCart = tshirts => {
        // console.log(tshirts)

        //handle duplicate and update Cart data
        const exists = cart.find(tShirt => tShirt.id === tshirts.id);
        if (exists) {
            alert('already added')
        }
        else {
            //update Cart data
            const newCart = [...cart, tshirts];
            setCart(newCart)
            // alert('successfully added')
        }
    }

    //remove item from cart
    const handleRemoveItemFromCart = tshirts => {
        // console.log(tshirts)
        const remainingItemInCart = cart.filter(tshirt => tshirt.id !== tshirts.id);
        setCart(remainingItemInCart)
    }

    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }

            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;