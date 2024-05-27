import { useDispatch, useSelector } from 'react-redux'
import { closeShoppingPage } from '../../app/store/shoppingCartSlice'
import Cross from '../images/Cross.svg'

export default function ShoppingCart(){
    const { shoppingStore } = useSelector(state => state.shoppingCartList)
    const dispatch = useDispatch()


    return(
        <div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0">
            <div className="bg-gray-300 absolute top-0 left-0 opacity-50 w-screen h-screen z-0"></div>
            <div className='flex flex-col z-1'>
                <div className='flex justify-end' onClick={()=>dispatch(closeShoppingPage())}>
                    <img src={Cross} alt=""  className="w-10 transition: duration-500 hover:scale-125"/>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center w-96 m-auto bg-gray-300 rounded border-stale-500 border-2 z-2">
                    <span>Корзина</span>
                    <div className='h-96'>
                        {shoppingStore.length === 0 ? <>Корзина пуста</> :
                         <div>
                            {<h4>Товаров в  корзине: {shoppingStore.length}</h4>}
                            {}
                         </div>
                         }
                    </div>
                </div>
            </div>
        </div>
    )
}