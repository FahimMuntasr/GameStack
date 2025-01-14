import { Link } from "react-router-dom";

export default function LogIn(){
    return(
        <>
            <h1>Welcome back</h1>
            <input placeholder="Email/Username"></input>
            <input placeholder="Password"></input>
            <div>
                <input type="checkbox" id="checkbox"></input>
                <p>Remember me</p>
            </div>
            <button>Log In</button>
            <Link to='/register'>Don't have an account?</Link>
        </>
    )
}