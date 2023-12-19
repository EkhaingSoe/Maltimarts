import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalQuantity: 0,
        totalAmount:0,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
           
            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice:newItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity));
            console.log(state.totalQuantity);
            console.log(state.cartItems);
            console.log(newItem)
           

        },
        removeFromCart: (state, { payload }) => {
            state.cartItems = state.cartItems.filter(
              (item) => item.id !== payload.id
            );
            state.totalQuantity-=payload.quantity
          },
        searchItem: (state, action) => {
            const items = state.cartItems.filter(item => item.productName.toLowerCase().includes(action.payload.toLowerCase()));
            console.log(items);
        }
    }
})

export const { addItem,searchItem,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer