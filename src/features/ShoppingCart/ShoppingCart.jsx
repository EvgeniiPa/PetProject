import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { closeShoppingPage, deleteCart, minusProduct, plusProduct } from '../../app/store/shoppingCartSlice'
import Button from '../../entities/Button/Button'
import Cross from '../images/Cross.svg'

export default function ShoppingCart(){
    const [summPay, setSummPay] = useState(0);
    const { shoppingStore } = useSelector(state => state.shoppingCartList);
    const dispatch = useDispatch()

    useEffect(()=>{
        shoppingStore.map(item=>{
            let count = item.count;
            let totalSumm = +item.price * +count
            setSummPay(summPay => summPay + totalSumm) 
        })
    }, [])

    return(
        <div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0">
            <div className="bg-gray-300 absolute top-0 left-0 opacity-50 w-screen h-screen z-0"></div>
            <div className='flex flex-col z-1'>
                <div className='flex justify-end' onClick={()=>dispatch(closeShoppingPage())}>
                    <img src={Cross} alt=""  className="w-10 transition: duration-500 hover:scale-125"/>
                </div>
                <div className="flex flex-col gap-3 justify-between items-center min-w-96 m-auto bg-gray-300 rounded border-stale-500 border-2 z-2">
                    <span>Корзина</span>
                    <div className='min-h-96 max-h-shopCart'>
                        {shoppingStore.length === 0 ? <>Корзина пуста</> :
                         <div>
                            {<h4 className='text-center mb-4'>Товаров в  корзине: {shoppingStore.length}</h4>}
                            <div className='flex flex-wrap gap-3'>
                                {shoppingStore.map((item,index)=>{
                                    return(
                                        <div className='flex flex-col justify-between w-40' key={item.id + index}>
                                            <img src={item.images[0]} alt="Icon" className='min-h-40'/>
                                            <div className=''>
                                                <h4 className='text-center'>{item.title}</h4>
                                                <h4 className='text-center font-bold'>{item.price}$</h4>
                                            </div>
                                            <Button text="Удалить" onClick={()=>dispatch(deleteCart(item.id))}/>
                                            <div className='flex justify-between'>
                                                <div onClick={()=>dispatch()}>{`<`}</div>
                                                <h4>{item.count}</h4>
                                                <span  onClick={()=>dispatch()}>{`>`}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <span>Сумма: {summPay}</span>
                         </div>
                         }
                    </div>
                </div>
            </div>
        </div>
    )
}