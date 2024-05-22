import { useState } from "react"

export default function CurrentTimer(){
    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())

    setInterval(()=>{
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()
        let seconds = new Date().getSeconds()

        if(hours < 10){
            setHours(`0${hours}`)
        }else{
            setHours(hours)
        }

        if(minutes < 10){
            setMinutes(`0${minutes}`)
        }else{
            setMinutes(minutes)
        }
        
        if(seconds < 10){
            setSeconds(`0${seconds}`)
        }else{
            setSeconds(seconds)
        }
    }, 1000)


    return(
        <div className="bg-gray-400 rounded p-1 border-4 border-gray-800">
             <span className="text-white">{`${hours}:${minutes}:${seconds}`}</span>
        </div>
    )
}