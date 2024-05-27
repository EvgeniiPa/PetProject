import { createSlice } from "@reduxjs/toolkit";


const shoppingCartSlice = createSlice({
    name:'shoppingCart',
    initialState:{
        shoppingStore:[],
        status: false,
    },
    reducers:{
        setCart:(state, action)=>{
            if(state.shoppingStore.length !== 0 ){
                state.shoppingStore = [...state.shoppingStore, action.payload]
            }else{
                state.shoppingStore  = [action.payload]
            }
        },
        deleteCart:(state,action)=>{
            state.shoppingStore  = state.shoppingStore.filter(item => item.id !== action.payload)
        },
        openShoppingPage:(state,action) =>{
            state.status = true
        },
        closeShoppingPage:(state,action) =>{
            state.status = false
        }
    }
})

export const {setCart, deleteCart, openShoppingPage, closeShoppingPage} = shoppingCartSlice.actions
export default shoppingCartSlice.reducer