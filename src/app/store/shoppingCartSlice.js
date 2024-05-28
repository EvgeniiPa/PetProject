import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const shoppingCartSlice = createSlice({
    name:'shoppingCart',
    initialState:{
        shoppingStore:[],
        status: false,
    },
    reducers:{
        setCart:(state, action)=>{
            let copyCart = state.shoppingStore.find(item => item.id === action.payload.id);
            let filterCart = state.shoppingStore.filter(item => item.id === action.payload.id)

            if(state.shoppingStore.length !== 0 && !copyCart){
                let cart = action.payload;

                cart = {...cart, count: Number(1)};
                state.shoppingStore = [...state.shoppingStore, cart]
                console.log('Вторая ступень', state.shoppingStore)
            }else if(state.shoppingStore.length !== 0 && filterCart.length !== 0  ){
                let cart = state.shoppingStore.find(item => item.id === action.payload.id);
                let newShopList = state.shoppingStore.filter(item => item.id !== action.payload.id);

                cart.count = cart.count + 1;
                state.shoppingStore = [...newShopList, cart]
                console.log('Третья ступень', state.shoppingStore)
            }else{
                let cart = action.payload;

                cart = {...cart, count: Number(1)};
                state.shoppingStore  = [cart];
                console.log('Первая ступень', state.shoppingStore, copyCart)
            }
        },
        deleteCart:(state,action)=>{
            state.shoppingStore  = state.shoppingStore.filter(item => item.id !== action.payload)
        },
        openShoppingPage:(state) =>{
            state.status = true
            console.log(state.shoppingStore)
        },
        closeShoppingPage:(state) =>{
            state.status = false
        },
        plusProduct:(state, action)=>{
          
        },
        minusProduct:(state, action) =>{

        },
    }
})

export const {setCart, deleteCart, openShoppingPage, closeShoppingPage, plusProduct, minusProduct} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer