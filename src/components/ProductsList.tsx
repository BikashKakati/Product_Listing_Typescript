import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/productSlice';

type Quantity = {
    large: number;
    medium: number;
    small: number;
}
type ProductData = {
        id: number,
        title: string,
        description: string,
        price: number,
        quantity: { large: number, medium: number, small: number },

}

const ProductsList= ({product}:{product:ProductData}) => {
    const Dispatch = useDispatch();
    const {title, description, price, quantity } = product;


    function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
        const sizeType = (e.target as HTMLButtonElement).name as keyof Quantity ;
        if(!quantity[sizeType]){
            alert(`${sizeType} size out of stock`);
            return;
        }
        Dispatch(addToCart({...product, quantity: [sizeType]}));
    }

    return (
        <li>
            {title}--
            {description}--
            {price}--
            <button name='large' onClick={handleAddToCart}>large:{quantity.large}</button>
            <button name='medium' onClick={handleAddToCart}>medium:{quantity.medium}</button>
            <button name='small' onClick={handleAddToCart}>small:{quantity.small}</button>

        </li>
    )
}

export default ProductsList