import { Link } from "react-router-dom";
import TextInput from "./TextInput";

export default function NavBarMain(){
    return(
        <>
            <div className="top-0 flex flex-row w-full justify-between h-16 items-center text-xl bg-zinc-900">
                <div className="ml-4">
                        <span className="text-yellow-500">Game</span>
                        <span className="text-cyan-500">Stack</span>
                </div>
                <Link to="/profile">
                    <span className="text-stone-100 hover:text-rose-600 transition-colors duration-200 ease-in">Profile</span>
                </Link>
                <Link to="/games">
                    <span className="text-stone-100 hover:text-rose-600 transition-colors duration-200 ease-in">Games</span>
                </Link>
                <TextInput text={"Search"} className={"mr-4"}/>
            </div>
        </>
    )
}