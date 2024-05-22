import { createSlice } from "@reduxjs/toolkit";


const authorizationSlice = createSlice({
    name:'authorization',
    initialState:{
        authorizationPage: true,
    },
    reducers:{
        openPage: state => {
            state.authorizationPage = true
        },
        closePage: state => {
            state.authorizationPage = false
        }
    }
})


export const { openPage, closePage } = authorizationSlice.actions
export default authorizationSlice.reducer