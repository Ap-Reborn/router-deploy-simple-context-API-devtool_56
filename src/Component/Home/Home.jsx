import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([]);
    const handleAddToCart = tshirt => {
        console.log(tshirt)
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
                <h2>order summery</h2>
            </div>
        </div>
    );
};

export default Home;