import {configureStore} from '@reduxjs/toolkit'
import authorizationReducer from './authorizationSlice'
import categoriesReducer from './categoriesSlice'
import productsReducer from './productsSlice'
import shoppingCartSlice from './shoppingCartSlice'


 const store =  configureStore({
    reducer:{
        authorization: authorizationReducer,
        categoriesList: categoriesReducer,
        productsList: productsReducer,
        shoppingCartList: shoppingCartSlice,
    },
})

export default store