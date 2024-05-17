export default function InputField({type, placeholder, value, onChange}){
    return(
        <input  
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            className="rounded border-none outline-2 outline-violet-500"
        />
    )
}