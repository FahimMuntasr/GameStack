export default function TextInput({text}){
    return(
        <input className="rounded-lg text-zinc-700 bg-zinc-400 w-96 h-10 mt-2 mb-2 placeholder:text-zinc-700 pl-3"placeholder={text}/>
    )
}