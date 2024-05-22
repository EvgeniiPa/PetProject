import {configureStore} from '@reduxjs/toolkit'
import authorizationReducer from './authorizationSlice'
import categoriesReducer from './categoriesSlice'
import productsReducer from './productsSlice'


 const store =  configureStore({
    reducer:{
        authorization: authorizationReducer,
        categoriesList: categoriesReducer,
        productsList: productsReducer,
    },
})

export default store