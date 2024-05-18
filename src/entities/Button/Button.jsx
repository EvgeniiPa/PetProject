export default function Button({text, onClick, className}){
    return(
        <button 
            onClick={()=>{onClick()}}
            className="bg-violet-500 hover:bg-violet-400 active:bg-violet-700 rounded m-3 text-white p-2  cursor-pointer"
        >
                {text}
        </button>
    )
}