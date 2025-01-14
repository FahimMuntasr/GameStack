export default function Button({text,className}){
    return(
        <button className={`rounded-lg p-2 text-xl text-stone-100 font-medium bg-rose-500 hover:bg-rose-600 ${className}`} >{text}</button>
    )
}