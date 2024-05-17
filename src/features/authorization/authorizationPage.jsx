import { useState } from "react"
import Button from "../../components/Button/Button"
import InputField from "../../components/InputField/InputField"
import { useDispatch } from "react-redux"
import {closePage} from '../../store/authorizationSlice'

export default function AuthorizationPage(){
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [newLogin, setNewLogin] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [checkUser, setCheckUser] = useState(true)
    const [checkNewUser, setCheckNewUser] = useState(false)
    const page = useDispatch()
    
    function addUser(){
        let objUser = JSON.parse(localStorage.getItem(login))

        if(localStorage.getItem(login) && objUser.password === password ){
            setPassword('')
            setLogin('')
            page(closePage())
            console.log(page(closePage))
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
        <main className="flex justify-center w-screen h-screen bg-gray-300 bg-authorization">
             <div className="flex flex-col gap-3 items-center w-96 m-auto bg-slate-400 rounded border-violet-500 border-2">
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
                            <Button onClick={()=>console.log('Нужно заполнить поля')} text='Далее' disabled />}
                       </>
                        <Button text='Отмена' onClick={()=>cancel()}/>
                        <Button text='Очистить кэш' onClick={()=>removeAllUsers()}/>
                    </div>
                </>
            :
                <>
                {checkNewUser ? 
                    <>
                        <h2 className="text-white text-2xl">Регистарция</h2>
                        <InputField type='text' placeholder='Login...' onChange={(e)=>setNewLogin(e.target.value)} value={newLogin}/>
                        <InputField type='text' placeholder='Password...' onChange={(e)=>setNewPassword(e.target.value)} value={newPassword}/>
                        <div className="flex justify-between w-full">
                            <Button text='Сохранить пользователя' onClick={()=>addNewUser()}/>
                            <Button text='Очистить поля' onClick={()=>clearInputFields()}/>
                        </div>
                    </>
                    : 
                    <>
                        <span className="text-white">Такого логина или пароля не существует</span>
                        <div>
                            <Button text='Создать аккаунт' onClick={()=>setCheckNewUser(true)}/>
                            <Button text='Назад' onClick={()=>backStep()}/>
                        </div>
                    </> }
                </>
            }            
            </div>
         </main>
    )
}