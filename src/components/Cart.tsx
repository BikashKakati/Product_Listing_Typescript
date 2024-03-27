import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Cart = () => {
    const { cartData } = useSelector((state: RootState) => state.products); return (
        <div>
            <h2>Cart</h2>
            <ul>
                {
                    cartData.map((cartProduct) => {
                        return (
                            <li key={cartProduct.id}>
                                {cartProduct.title}--
                                {cartProduct.price}--
                                Large:{cartProduct.quantity.large || 0}
                                Medium:{cartProduct.quantity.medium || 0}
                                Small:{cartProduct.quantity.small || 0}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Cart