import { Link } from "react-router-dom"
export default function LandingPage(){
    return(
        <>
            <p className="text-sky-400"><span>Game</span><span>Stack</span></p>
            <p>Discover, collect and track your games</p>
            <span>
                <Link to="/register">Create a free account</Link> or 
                <Link to="/login"> log in</Link> if you have an account
            </span>
        </>
    )
}