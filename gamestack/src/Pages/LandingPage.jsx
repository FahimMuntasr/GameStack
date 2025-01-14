import { Link } from "react-router-dom"
export default function LandingPage(){
    return(
        <div className="flex flex-col justify-center items-center text-center min-h-screen bg-zinc-900 ">
            <div className="text-9xl font-bold">
                <span className="text-yellow-500">Game</span>
                <span className="text-cyan-500">Stack</span>
            </div>
            <p className="text-3xl font-light text-green-500">
                Discover, collect and track your games
            </p>
            <span className="text-gray-500 mt-5">
                <Link 
                    to="/register" 
                    className="rounded-lg p-2 text-xl text-stone-100 font-medium bg-rose-500 hover:bg-rose-600"
                >
                    Create a free account
                </Link> 
                <span> or </span> 
                <Link 
                    to="/login" 
                    className="text-stone-300 hover:text-stone-50"
                > log in
                </Link> 
                <span> if you have an account</span>
            </span>
        </div>
    )
}