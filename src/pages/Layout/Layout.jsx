import {Link, Outlet} from 'react-router-dom'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu.jsx'
import Button from '../../entities/Button/Button.jsx'
import { useDispatch } from 'react-redux'
import { openPage } from '../../app/store/authorizationSlice.js'
import Cross from './Cross.svg'

export default function Layuot(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const dispatch = useDispatch()



    return(
        <>
            <header className='flex justify-end h-10 bg-gray-500 relative'> 
               {!toggleMenu && <BurgerMenu width='40px' onClick={()=>setToggleMenu(true)}/>}
               {toggleMenu && 
                <nav className='flex w-40 justify-between items-between text-white bg-gray-400 absolute rounded'>
                    <div className= 'flex flex-col justify-between'>
                        <div className='flex flex-col gap-4 justify-start p-4'>
                          <span className='hover:text-violet-500 '> <Link to="/"> Home</Link></span> 
                          <span className='hover:text-violet-500 '> <Link to="/todoList">Todo List</Link></span> 
                          <span className='hover:text-violet-500 '><Link to="/contacts" >Contacts</Link></span>       
                        </div>
                        <Button onClick={()=>dispatch(openPage())} text='Выход' />
                    </div>
                    <div onClick={()=> setToggleMenu(false)} className='w-8 h-8'>
                            <img src={Cross} alt="Cross" />
                    </div>
                </nav> }
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </>
    )
}