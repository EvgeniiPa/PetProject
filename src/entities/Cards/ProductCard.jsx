export default function ProductCard({item} ){
    return(
        <div  
            className="flex flex-col items-center w-40 border-r-red-50 border-2 rounded shadow-xl transition duration-750 hover:scale-105 duration-300" 
        >
            <img className="rounded rounded-b-none" src={`${item.image}`} alt="Card" />
            <span className="text-gray-500 font-bold">{item.name}</span>
        </div>
    )
}