import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async function(_,{rejectWithValue, dispatch}){
        try{
            const res = await axios.get('https://api.escuelajs.co/api/v1/categories')
            console.log(res)
            return res.data.slice(0,5)
        }catch(err){
            return rejectWithValue(err.message)
        }
    }
)



const categoriesSlice = createSlice({
    name:'categories',
    initialState:{
        categoriesList:[],
        status: null,
        error: null,
    },
    reducers:{
        getCategoriesList:(state, action) => {
            state.categoriesList = action.payload
            console.log('categoriesSlice:', state.categoriesList)
        },
        filterCategoriesList:(state,action) => {
            state.categoriesList.filter(item => item)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchCategories.pending,(state,action)=>{
            state.status = 'loading';
            state.error = null;
        });
        builder.addCase(fetchCategories.fulfilled,(state, action)=>{
            state.status = 'resolved';
            state.categoriesList = action.payload;
        });
        builder.addCase(fetchCategories.rejected,(state, action)=>{
            state.status = 'rejected';
            state.error = action.payload;
        });
    }
})

export const {getCategoriesList, filterCategoriesList} = categoriesSlice.actions
export default categoriesSlice.reducer