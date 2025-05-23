'use client'
import './CartButton.scss'
import { CartContext } from '@/cart/add/cart';
import {useContext } from 'react';

export default function CartButton(){
    const {cartItems} = useContext(CartContext);
    return(
        <>
            {cartItems.length > 0 ? 
                    <button className="cart-fixed" type="button" data-bs-toggle="offcanvas" data-bs-target="#cart" aria-controls="offcanvasRight">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="white" className="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                        
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartItems.length}
                        </span>
                    </button>
            : ''}
        </>
    )
}