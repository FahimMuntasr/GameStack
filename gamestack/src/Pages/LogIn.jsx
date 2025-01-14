import { Link } from "react-router-dom";
import TextInput from "../Components/TextInput";
import Button from "../Components/Button";

export default function LogIn(){
    return(
        <div className="flex flex-col justify-center items-center text-center min-h-screen text-zinc-400 ">
            <h1 className="text-7xl font-light p-6">Welcome back</h1>
            <TextInput text={"Email/Username"}/>
            <TextInput text={"Password"}/>
            <div className="flex flex-row  w-96">
                <input type="checkbox" className="mr-2"></input>
                <p>Remember me</p>
            </div>
            <Button text={"Log In"} className="w-96 mt-2"/>
            <Link className="text-zinc-400 hover:text-zinc-50 mt-2" to='/register'>Don't have an account?</Link>
        </div>
    )
}