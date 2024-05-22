import Basket from './Basket.svg'

export default function Button({text, onClick, pay = false}){
    return(
        <button 
            onClick={()=>{onClick()}}
            className="flex justify-center items-center gap-2 bg-gray-600  transition: duration-500 hover:scale-110 hover:bg-gray-800; active:bg-gray-400  rounded m-3 text-white p-2  cursor-pointer"
        >
                {text}
                {pay &&  <img src={Basket} alt="Basket" className='w-4'/>}
        </button>
    )
}