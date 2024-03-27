import React, { useRef } from 'react'
import {useDispatch} from "react-redux"
import { addNewProduct } from '../redux/productSlice';

const ProductsInput = () => {
  const Dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null!)
  const descriptionRef = useRef<HTMLInputElement>(null!)
  const priceRef = useRef<HTMLInputElement>(null!)
  const sizeLargeRef = useRef<HTMLInputElement>(null!)
  const sizeMediumRef = useRef<HTMLInputElement>(null!)
  const sizeSmallRef = useRef<HTMLInputElement>(null!)

  type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    quantity: { large: number, medium: number, small: number },
  }

  function handleAddProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      price: Number(priceRef.current.value),
      quantity: {
        large: Number(sizeLargeRef.current.value),
        medium: Number(sizeMediumRef.current.value),
        small: Number(sizeSmallRef.current.value)
      }
    }
    Dispatch(addNewProduct(newProduct));

  }
  return (
    <div>
      <h3>Add Products Here</h3>
      <form onSubmit={handleAddProduct}>
        <input type="text" placeholder='product title' ref={titleRef} />
        <input type="text" placeholder='product description' ref={descriptionRef} />
        <input type="number" placeholder='product price' ref={priceRef} />
        <input type="number" placeholder='Large' ref={sizeLargeRef} />
        <input type="number" placeholder='Medium' ref={sizeMediumRef} />
        <input type="number" placeholder='Small' ref={sizeSmallRef} />
        <input type='submit' value="Add Product" />
      </form>
    </div>
  )
}

export default ProductsInput