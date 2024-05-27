import {Link, Outlet} from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closePage, openPage } from '../../app/store/authorizationSlice.js'
import { removeProductsList } from '../../app/store/productsSlice.js'
import BurgerMenu from './BurgerMenu.jsx'
import Button from '../../entities/Button/Button.jsx'
import AuthorizationPage from '../../features/authorization/authorizationPage.jsx'
import ShoppingCart from '../../features/ShoppingCart/ShoppingCart.jsx'
import Cross from './images/Cross.svg'
import Favicon from './images/Favicon.svg'
import Arrow from './images/LinkArrow.svg'
import ShoppingCartIMG from './images/ShoppingCart.svg'
import { openShoppingPage } from '../../app/store/shoppingCartSlice.js'


export default function Layuot(){
    const [toggleMenu, setToggleMenu] = useState(false)
    const {authorizationPage} = useSelector(state => state.authorization)
    const {status} = useSelector(state => state.shoppingCartList)
    const dispatch = useDispatch()

    return(
        <div className='flex flex-col w-screen items-between bg-gray-100 min-h-screen' >
            <header className='flex justify-between h-10 bg-gray-200 relative shadow-xl'> 
                <div className='w-10 ml-2 transition: duration-500 hover:scale-105' onClick={()=>dispatch(removeProductsList())}>
                     <Link to="/"><img src={Favicon} alt="favicon"/></Link>       
                </div>
                <div className='flex gap-5'>
                    <img src={ShoppingCartIMG} alt="shoppingCart" className='w-10 transition: duration-500 hover:scale-110' onClick={()=>dispatch(openShoppingPage())}/>
                    {status && <ShoppingCart/>}
                    {!toggleMenu && <BurgerMenu width='40px' onClick={()=>setToggleMenu(true)}/>}
                    {toggleMenu && 
                    <nav className='flex justify-between items-between text-gray bg-gray-200 absolute right-0 rounded shadow-xl'>
                        <div className= 'flex flex-col justify-between'>
                            <div className='flex flex-col gap-4 justify-start p-4'>
                            <span onClick={()=>setToggleMenu(false)} className='uppercase transition: duration-500 hover:scale-110 hover:text-gray-800'> <Link to="/">Каталог</Link></span> 
                            <span onClick={()=>setToggleMenu(false)} className='uppercase transition: duration-500 hover:scale-110 hover:text-gray-800'> <Link to="/todoList">О нас</Link></span> 
                            <span onClick={()=>setToggleMenu(false)} className='uppercase transition: duration-500 hover:scale-110 hover:text-gray-800'> <Link to="/contacts" >Контакты</Link></span>       
                            </div>
                        {authorizationPage && <Button onClick={()=>dispatch(closePage())} text='Авторизоваться' />}
                        {!authorizationPage && <Button onClick={()=>dispatch(openPage())} text='Выход' />}
                        </div>
                        <div onClick={()=> setToggleMenu(false)} className='w-8 h-8 hover:bg-gray-400'>
                                <img src={Cross} alt="Cross" />
                        </div>
                    </nav> }
                </div>
            </header>
            <main className='max-w-wrapper m-auto'> 
                {!authorizationPage && <AuthorizationPage/>}
                <Outlet/>
            </main>
            <footer className='flex justify-center items-center h-10 w-screen bg-gray-200'>
                <div className="text-gray-700 font-medium transitoin: duration-500 hover:scale-110 activ:text-white">
                    <a  href="https://github.com/EvgeniiPa?tab=repositories" className="text-gray-700 font-medium ">
                        <div className='flex gap-1'>
                            <h5>Create by Evgenii Pasechnickov</h5>
                            <img src={Arrow} alt="link" className='w-4'/>
                        </div>
                    </a> 
                </div>
            </footer>
        </div>
    )
}