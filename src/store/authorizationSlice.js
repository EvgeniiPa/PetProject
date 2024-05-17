import { createSlice } from "@reduxjs/toolkit";


const authorizationSlice = createSlice({
    name:'authorization',
    initialState:{
        authorizationPage: true,
    },
    reducers:{
        openPage: state => {
            state.authorizationPage = true
            console.log('TAM')
        },
        closePage: state => {
            state.authorizationPage = false
            console.log("TUT")
        }
    }
})


export const { openPage, closePage } = authorizationSlice.actions
export default authorizationSlice.reducer