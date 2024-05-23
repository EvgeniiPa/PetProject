import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function(id, {rejectWithValue, dispatch}){
        try{
            const res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
            return res.data
        }catch(err){
            rejectWithValue(err.messege)
        }
    }
)


const productsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        status: null,
        error: null
    },
    reducers:{
        getProductsList:(state,action)=>{
            state.products = action.payload;
            state.status = 'resolved';
        },
        removeProductsList:(state,action)=>{
            state.products = [];
            state.status = 'deleted';
        }
    },
    extraReducers: builder=>{
        builder.addCase(fetchProducts.pending, (state, action)=>{
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status = 'resolved';
            state.products = action.payload;
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state,action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        })
    }
})

export const {getProductsList, removeProductsList} = productsSlice.actions
export default productsSlice.reducer