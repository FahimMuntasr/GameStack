import { Link } from "react-router-dom";

export default function NavBarAnon(){
    return(
        <>
            <div className="fixed top-0 flex flex-row w-full justify-center h-16 items-center text-xl">
                <Link to={'/home'}>
                    <span className="text-yellow-500">Game</span>
                    <span className="text-cyan-500">Stack</span>
                </Link>
            </div>
        </>
    )
}