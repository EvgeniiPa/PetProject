import { useState } from "react"
import Button from "../../entities/Button/Button"
import InputField from "../../entities/InputField/InputField"
import { useDispatch } from "react-redux"
import {closePage, openPage} from '../../app/store/authorizationSlice'
import Smile from '../images/SmileAuthorization.svg'
import Cross from '../images/Cross.svg'

export default function AuthorizationPage(){
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [newLogin, setNewLogin] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [checkUser, setCheckUser] = useState(true)
    const [checkNewUser, setCheckNewUser] = useState(false)
    const dispatch = useDispatch()
    
    function addUser(){
        let objUser = JSON.parse(localStorage.getItem(login))

        if(localStorage.getItem(login) && objUser.password === password ){
            setPassword('')
            setLogin('')
            dispatch(openPage())
            return
        }
        setPassword('')
        setLogin('')
        setCheckUser(false)
        console.log("Вы еще не зарегестрированы")
    }

    function cancel(){
        setPassword('')
        setLogin('')
        dispatch(openPage())
    }

    function removeAllUsers(){
        localStorage.clear()
    }

    function addNewUser(){
        if(newLogin.trim().length !== 0 && newPassword.trim().length !== 0){
            localStorage.setItem(newLogin, JSON.stringify({login: newLogin, password: newPassword}))
            setNewLogin('')
            setNewPassword('')
            setCheckUser(true)
            setCheckNewUser(false) 
            console.log(JSON.parse(localStorage.getItem(newLogin)))
        }
        return
    }

    function clearInputFields(){
        setNewLogin('')
        setNewPassword('')
    }

    function backStep(){
        setCheckUser(true)
    }


    return(
        <main className="flex justify-center w-full h-screen bg-gren-700 bg-authorization fixed  top-0 left-0">
            <div className="bg-gray-300 absolute top-0 left-0 opacity-50 w-screen h-screen z-0"></div>
            <div className="flex flex-col gap-3 justify-between items-center w-96 m-auto bg-gray-400 rounded border-stale-500 border-2 z-2">
                <div className="flex justify-end  w-full" >
                        <img src={Cross} alt="closeCross"  className="w-10 transition: duration-500 hover:scale-125" onClick={()=> dispatch(openPage())}/>
                </div>
                {checkUser ? 
                    <>
                        <h3 className="text-white text-2xl">Авторизация</h3>
                        <div className="flex flex-col">
                            <InputField type='text' placeholder='Login...' onChange={(e)=>setLogin(e.target.value)} value={login}/>
                            {login.length === 0 && <span className="text-white">Обязательное поле</span>}
                        </div>
                        <div className="flex flex-col"> 
                            <InputField type='text' placeholder='Password...' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                            {password.length === 0 && <span className="text-white">Обязательное поле</span>}    
                        </div>
                    
                        <div className="flex justify-between w-full">
                        <>
                            {login.length !== 0 &&  password.length !== 0 ? <Button text='Далее' onClick={()=>addUser()}/> : 
                            <Button text='Далее' disabled />}
                        </>
                            <Button text='Отмена' onClick={()=>cancel()}/>
                        </div>
                    </>
                   :
                    <>
                    {!checkNewUser ? 
                        <>
                            <span className="font-medium text-white">Такого логина или пароля не существует</span>
                            <div>
                                <img src={Smile} alt="smile" className="h-20"/>
                            </div>
                            <div className="flex justify-between w-full">
                                <Button text='Создать аккаунт' onClick={()=>setCheckNewUser(true)}/>
                                <Button text='Назад' onClick={()=>backStep()}/>
                            </div>
                        </> 
                        :
                        <>
                            <h2 className="text-white text-2xl">Регистарция</h2>
                            <InputField type='text' placeholder='Login...' onChange={(e)=>setNewLogin(e.target.value)} value={newLogin}/>
                            <InputField type='text' placeholder='Password...' onChange={(e)=>setNewPassword(e.target.value)} value={newPassword}/>
                            <div className="flex justify-between w-full">
                                <Button text='Сохранить' onClick={()=>addNewUser()}/>
                                <Button text='Очистить поля' onClick={()=>clearInputFields()}/>
                            </div>
                        </>
                       }
                    </>
                } 
                     
            </div>
         </main>
    )
}