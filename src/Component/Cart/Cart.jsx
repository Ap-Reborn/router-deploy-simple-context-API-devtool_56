import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length==0){
        message= <p>please add some products</p>
    }
    else{
        message=<div>
            <h3>borolosxxxxx</h3>
            <p>thanks for giving your money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length=== 1 ? 'blue' : 'red'}>order summery {cart.length}</h2>
            <p className={`bold bordered ${cart.length ===3 ? 'yellow' : 'purple'}`}>something</p>
            {cart.length > 2 ? <span className='purple'>aro kino</span> : <small>fokira</small> }
            {message}
            {

                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} 
                <button onClick={()=>handleRemoveFromCart(tshirt._id)}>x</button>
                </p>)
            }
            {
                cart.length == 2 && <p>Double bonanza</p>
            }
            {
                cart.length === 3 || <h3>tinta tw hoilo na</h3>
            }
        </div>
    );
};

export default Cart;
/*
*CONDITIONAL RENDERING
*use if else to set a variable that will contain an element,component
*ternary oparetor: condition ? 'for true' : 'false'
*Logical && : (if the condition is true then the next thing will displayed);
*Logical || : (if the condition is false then the nex thing will be displayed)
*/

/*
*CONDITONAL CSS CLASS
*use ternary
*ternary inside a template string
*/ 