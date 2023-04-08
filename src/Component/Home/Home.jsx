import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        // akane find ts id soman soman tshirt id mane   pura tshirt id  er modde ai ts id find ak bar niba and ditobar mila gele nicar conditon colba         
        // ar conditon dea hoca find akaber near por jodi abar soman soman mane jodi abar nea hoi tahole if colba ar soman soman na hole else colba
        const exist = cart.find(ts => ts._id == tshirt._id);
        if (exist) {
            toast('you have already added this t-shirt');
        }
        else {

            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
    }
    const handleRemoveFromCart = id => {
        // console.log(id);
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className="t-shirts-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">

                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;