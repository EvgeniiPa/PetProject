import {Link, Outlet} from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import BurgerMenu from './BurgerMenu.jsx'
import Button from '../../entities/Button/Button.jsx'
import { openPage } from '../../app/store/authorizationSlice.js'
import Cross from './Cross.svg'
import Favicon from './Favicon.svg'

export default function Layuot(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const dispatch = useDispatch()



    return(
        <div className='flex flex-col w-screen items-between bg-gray-100 min-h-layout'>
            <header className='flex justify-between h-10 bg-gray-200 relative shadow-xl'> 
                <div className='w-10 ml-2'>
                    <img src={Favicon} alt="favicon"/>
                </div>
               {!toggleMenu && <BurgerMenu width='40px' onClick={()=>setToggleMenu(true)}/>}
               {toggleMenu && 
                <nav className='flex w-40 justify-between items-between text-gray bg-gray-200 absolute right-0 rounded shadow-xl'>
                    <div className= 'flex flex-col justify-between'>
                        <div className='flex flex-col gap-4 justify-start p-4'>
                          <span onClick={()=>setToggleMenu(false)} className='uppercase transition: duration-500 hover:scale-110 hover:text-gray-800'> <Link to="/">Каталог</Link></span> 
                          <span onClick={()=>setToggleMenu(false)} className='uppercase transition: duration-500 hover:scale-110 hover:text-gray-800'> <Link to="/todoList">О нас</Link></span> 
                          <span onClick={()=>setToggleMenu(false)} className='uppercase transition: duration-500 hover:scale-110 hover:text-gray-800'> <Link to="/contacts" >Магазины</Link></span>       
                        </div>
                        <Button onClick={()=>dispatch(openPage())} text='Выход' />
                    </div>
                    <div onClick={()=> setToggleMenu(false)} className='w-8 h-8 hover:bg-gray-400'>
                            <img src={Cross} alt="Cross" />
                    </div>
                </nav> }
            </header>
            <main className='max-w-wrapper m-auto'> 
                <Outlet/>
            </main>
            <footer className='flex justify-center items-center h-10 w-screen bg-gray-200 mt-10'>
                <div
                  className="text-gray-700 font-medium transitoin: duration-500 hover:scale-110 activ:text-white">Create by 
                    <a 
                        href="https://github.com/EvgeniiPa?tab=repositories" 
                        className="text-gray-700 font-medium ">Evgenii Pasechnickov
                    </a> 
                </div>
            </footer>
        </div>
    )
}