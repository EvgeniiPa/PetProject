import {Link, Outlet} from 'react-router-dom'
import Button from '../../entities/Button/Button'

export default function Layuot(){
    return(
        <>
            <header className='flex justify-end bg-gray-500'> 
                <nav className='flex w-1/3 h-10 justify-between items-center text-white'>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/todoList">Todo List</Link>
                    <Link to="/contacts" >Contacts</Link>
                </nav> 
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </>
    )
}