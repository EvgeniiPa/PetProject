import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../app/store/categoriesSlice"
import { fetchProducts } from "../../app/store/productsSlice"
import Clothes from "../../entities/Clothes/Clothes"
import ProductCard from "../../entities/Cards/ProductCard"
import Left from './images/LeftArrow.svg'
import Right from './images/RightArrow.svg'

export default function ProductsPage(){ 
    const dispatch = useDispatch()
    const {categoriesList} = useSelector(state => state.categoriesList)
    const {products} = useSelector(state => state.productsList)
    const [numberCard, setNumberCard] = useState(0)

    useEffect(()=>{
        dispatch(fetchCategories())
        console.log(categoriesList)
    },[])

    function getProducts(id){
        const res =  dispatch(fetchProducts(id))
        console.log(products)
    }


    function nextCategori(){
        if(numberCard !== 4 ){
            setNumberCard(numberCard + 1)
        }else{
            setNumberCard(0)
        }
    }

    function previousCategori(){
        if(numberCard > 0 ){
            setNumberCard(numberCard - 1)
        }else{
            setNumberCard(4)
        }
    }


    return(
        <div className="flex flex-col items-center">
            <div className="md:flex md:flex-wrap md:justify-center md:gap-4 md:m-auto md:mt-10 hidden">
                {categoriesList.length !== 0 && categoriesList.map((item)=>{
                    return(
                        <div onClick={() => getProducts(item.id)} key={item.id}>
                            <ProductCard item={item} />
                        </div> 
                        )
                    })
                }
            </div>
            <div className="flex items-center mt-10 md:hidden">
                <img src={Left} alt="leftArrow" onClick={()=>previousCategori()} className="w-20"/>
                <div onClick={() => getProducts(categoriesList[`${numberCard}`].id)}>
                    {categoriesList.length !== 0 && <ProductCard item={categoriesList[`${numberCard}`]} />}
                </div>
                <img src={Right} alt="leftArrow" onClick={()=>nextCategori()} className="w-20"/>
            </div>
            <div className="flex flex-wrap justify-center gap-6  my-20 m-auto">
                {products.length !== 0  && products.map(item =>{
                        return(
                            <Clothes item={item} key={item.id}/>
                        )
                    })}
            </div>
        </div>
    )
}