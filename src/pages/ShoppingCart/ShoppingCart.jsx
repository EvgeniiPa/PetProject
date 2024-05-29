import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { closeShoppingPage, deleteCart, minusProduct, plusProduct, clearShopList } from '../../app/store/shoppingCartSlice'
import Button from '../../entities/Button/Button'
import Cross from './images/Cross.svg'
import Plus from './images/Plus.svg'
import Minus from './images/Minus.svg'
import Cat from './images/SadnessCat.svg'

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


    function minusProductFn(item){
        if(item.count === 0 ){
            dispatch(deleteCart(item.id))
            setSummPay(summPay => summPay - item.price)
        }
        dispatch(minusProduct(item))
        setSummPay(summPay => summPay - item.price)
    }

    function plusProductFn(item){
        dispatch(plusProduct(item))
        setSummPay(summPay => summPay + item.price)
    }


    return(
        <div className="flex flex-col gap-3 justify-between items-center max-w-wrapper min-w-96 m-auto">
            <span className='uppercase font-medium'>Корзина</span>
            <div className='min-h-96 max-h-shopCart'>
                {shoppingStore.length === 0 ? 
                <div className='flex flex-col items-center gap-5'>
                    <h4 className='font-medium'>Корзина пуста</h4>
                    <img src={Cat} alt="" className='w-20'/>
                </div> :
                <div>
                    {<h4 className='text-center mb-4'>Товаров в  корзине: {shoppingStore.length}</h4>}
                    <div className='flex flex-wrap justify-center gap-5 p-2'>
                        {shoppingStore.map((item, index)=>{
                            return(
                                <div className='flex flex-col justify-between w-40 gap-3 border-2' key={item.createId + index}>
                                    <img src={item.images[0]} alt="Icon" className='min-h-40'/>
                                    <div className=''>
                                        <h4 className='text-center'>{item.title}</h4>
                                        <h4 className='text-center font-bold'>{item.price}$</h4>
                                    </div>
                                    <div className='flex justify-between'>
                                        <img src={Minus} alt="Minus" className='w-6 cursor-pointer' onClick={()=>minusProductFn(item)}/>
                                        <h4 className='font-bold'>{item.count}</h4>
                                        <img src={Plus} alt="Minus" className='w-6 cursor-pointer' onClick={()=>plusProductFn(item)}/>
                                    </div>
                                    <Button text="Удалить" onClick={()=>dispatch(deleteCart(item.id))}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex items-center justify-between gap-5 m-3 border-2 p-2'>
                        <span className='font-medium'>Сумма: {summPay} $</span>
                        <Button text="Оплатить" onClick={()=>{
                            alert("Спасибо за оплату!")
                            dispatch(clearShopList())
                        }}/>
                    </div>
                </div>
                }
            </div>
        </div>  
    )
}