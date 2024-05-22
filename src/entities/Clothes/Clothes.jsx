import { useState } from 'react'
import Cross from './CrossInCard.svg'
import Button from '../Button/Button'



export default function Clothes({item}){
    const [showDescription, setShowDescription] = useState(false)
    const [mainImage, setMainImage] = useState(null)

    function openDiscription(){
        setShowDescription(true)
        setMainImage(item.images[0])
    }

   function closeDiscription(){
     setShowDescription(false)
   }

    function showImage(id){
        console.log("ID", id)
        setMainImage(item.images[id])
    }
   
    return(
        <div>
              <div onClick={()=>openDiscription()}  className="flex flex-col items-center justify-between w-60  bg-gray-200 border-2 rounded-3xl transition duration-750 hover:scale-105 duration-300">         
                        <img className="rounded-3xl rounded-b-none" src={item.images[0]} alt="image" />
                        <div className="flex flex-col justify-between items-center">
                            <h3 className="text-center text-gray-600 font-medium">{item.title}</h3>
                            <span className="font-medium">{item.price}$</span>
                        </div>
                </div> 
                 {showDescription && 
                 <div> 
                    <div className="w-screen h-screen z-1 opacity-80 bg-slate-400 fixed top-0 left-0"></div>
                    <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-2">
                        <div className='flex flex-col items-end gap-2'>
                            <div className=" w-10 h-10"  onClick={ () => closeDiscription()}>
                                    <img src={Cross} alt="Close Cross" className='transition: duration-500 hover:scale-125'/>
                            </div>
                            <div className="flex max-w-descriptionCard m-auto border-2 border-slate-500 rounded p-2 bg-slate-500">
                                <div>
                                    <img src={mainImage} alt="main image" className="rounded rounded-b-none transition: duration-500 hover:scale-110 "/>
                                    <div className="text-white font-medium text-justify">{item.description}</div>
                                </div>
                                <div className="flex flex-col gap-1 ml-1 max-w-40 ">
                                    { item.images.map((item, index)=>{
                                        return(
                                            <div onClick={()=>showImage(index)} className="rounded transition: duration-500 hover:scale-110" key={index} >
                                                <img src={item} alt="description image" className="  rounded"/>
                                            </div>
                                        )
                                    })}
                                    <Button text='Pay' pay={true}/>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}