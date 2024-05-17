import Button from "../../components/Button/Button"
import { openPage } from "../../store/authorizationSlice"
import { useDispatch } from "react-redux"

export default function MainPage(){ 
    const dispatch = useDispatch()
    
    return(
        <main className="flex flex-col w-screen  h-screen bg-green-500">
            <span>Вы вошли в личный кабинет</span>
            <Button text='Выход' onClick={()=>dispatch(openPage())}/>

        </main>
    )
}