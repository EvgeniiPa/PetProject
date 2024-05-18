import Button from "../../entities/Button/Button"
import { useState } from "react"
import { openPage } from "../../app/store/authorizationSlice"
import { useDispatch } from "react-redux"
import axios from 'axios'

export default function MainPage(){ 
    const [cat, setCate] = useState('')
    const dispatch = useDispatch()


   async function getCat(){
        try{
            const response = await axios.get(`https://api.thecatapi.com/v1/images/search`)
            const { data }= await response
            setCate(data[0].url)
        }catch(e){
            console.error(e)
        }
    }
    
    return(
        <main className="flex flex-col w-screen items-center bg-gray-100 justify-between">
            <div className="flex flex-col items-center w-96 h-96">
                 <Button onClick={()=> getCat()} text='Позвать котика'/>
                 <img className="w-60 rounded" src={`${cat}`} alt="cat" />
            </div>
            <div className="w-10">
                 <Button className="w-10" text='Выход' onClick={()=>dispatch(openPage())}/>
            </div>
        </main>
    )
}