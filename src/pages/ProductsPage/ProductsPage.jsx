import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../app/store/categoriesSlice"
import { fetchProducts } from "../../app/store/productsSlice"
import Clothes from "../../entities/Clothes/Clothes"
import ProductCard from "../../entities/Cards/ProductCard"

export default function ProductsPage(){ 
    const dispatch = useDispatch()
    const {categoriesList} = useSelector(state => state.categoriesList)
    const {products} = useSelector(state => state.productsList)

    useEffect(()=>{
        dispatch(fetchCategories())
        console.log(categoriesList)
    },[])

    function getProducts(id){
        const res =  dispatch(fetchProducts(id))
        console.log(products)
    }



    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 m-auto mt-10">
                {categoriesList.length !== 0 && categoriesList.map((item)=>{
                    return(
                        <div onClick={() => getProducts(item.id)} key={item.id}>
                            <ProductCard item={item} />
                        </div> 
                        )
                    })
                }
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