import { Link } from "react-router-dom";
import TextInput from "./TextInput";

export default function NavBarMain(){
    return(
        <>
            <div className="top-0 flex flex-row w-full justify-between h-16 items-center text-xl bg-zinc-950">
                <div className="ml-4">
                        <span className="text-yellow-500">Game</span>
                        <span className="text-cyan-500">Stack</span>
                </div>
                <Link to="/profile">
                    <span className="text-green-500 hover:text-green-300 transition-colors duration-100 ease-in">Profile</span>
                </Link>
                <Link to="/games">
                    <span className="text-green-500 hover:text-green-300 transition-colors duration-100 ease-in">Games</span>
                </Link>
                <TextInput text={"Search"} className={"mr-4"}/>
            </div>
        </>
    )
}