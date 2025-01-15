import { Link } from "react-router-dom";
import TextInput from "./TextInput";

export default function NavBarMain(){
    return(
        <>
            <div className="top-0 flex flex-row w-full justify-between h-16 items-center text-xl">
                <div className="ml-4">
                        <span className="text-yellow-500">Game</span>
                        <span className="text-cyan-500">Stack</span>
                </div>
                <Link to="/profile">
                    <span className="text-green-500">Profile</span>
                </Link>
                <Link to="/games">
                    <span className="text-green-500">Games</span>
                </Link>
                <TextInput text={"Search"} className={"mr-4"}/>
            </div>
        </>
    )
}