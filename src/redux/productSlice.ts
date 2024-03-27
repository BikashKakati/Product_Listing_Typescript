import { createSlice } from "@reduxjs/toolkit";
interface Quantity {
    large: number;
    medium: number;
    small: number;
}
type ProductState = {
    productsData: {
        id: number,
        title: string,
        description: string,
        price: number,
        quantity: { large: number, medium: number, small: number },
    }[],
    cartData: {
        id: number,
        title: string,
        description: string,
        price: number,
        quantity: { large: number, medium: number, small: number },
    }[],
}

const initialState: ProductState = {
    productsData: [],
    cartData: [],
}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addNewProduct: function (state, action) {
            state.productsData.push(action.payload);
        },
        addToCart: function (state, { payload }) {
            const sizeType = payload.quantity as keyof Quantity;
            //managing addtocart
            const existCartIndex = state.cartData.findIndex((cartProduct) => cartProduct.id === payload.id);
            const existCartProduct = state.cartData[existCartIndex];

            if (existCartIndex >= 0) {
                state.cartData[existCartIndex] = {
                    ...existCartProduct,
                    quantity: {
                        ...existCartProduct.quantity,
                        [sizeType]: (existCartProduct.quantity[sizeType] || 0) + 1
                    }
                }
            } else {
                state.cartData.push({ ...payload, quantity: { [sizeType]: 1 } })
            }

            // managing remove product
            const existProductIndex = state.productsData.findIndex((product) => product.id === payload.id);
            const existProduct = state.productsData[existProductIndex];
            state.productsData[existProductIndex] = {
                ...existProduct,
                quantity: {
                    ...existProduct.quantity,
                    [sizeType]: existProduct.quantity[sizeType] - 1
                }
            }
        }
    }
})
export default productSlice.reducer;
export const { addNewProduct, addToCart } = productSlice.actions;