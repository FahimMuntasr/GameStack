import { Link } from "react-router-dom";
import Button from "../Components/Button.jsx";
export default function CreateAcc(){
    return(
        <div className="flex flex-col justify-center items-center text-center min-h-screen text-zinc-400 ">
                <h1 className="text-7xl font-light p-6">Registration</h1>
                <div className="flex flex-col items-start">
                    <input className="rounded-lg text-zinc-700 bg-zinc-400 w-96 h-10 mt-2 mb-2 placeholder:text-zinc-700 pl-3"placeholder="Username"/>
                    <small className="mb-3 ml-3">Maximum of 16 characters</small>
                </div>
                <input className="rounded-lg bg-zinc-400 w-96 h-10 mt-2 mb-2 placeholder:text-zinc-700 pl-3" placeholder="Email address"/>
                <div className="flex flex-col items-start">
                    <input className="rounded-lg bg-zinc-400 w-96 h-10 mt-2 mb-2 placeholder:text-zinc-700 pl-3" placeholder="Password"/>
                    <small className="mb-3 ml-3">Minimum of 6 characters</small>
                </div>
                <input className="rounded-lg bg-zinc-400 w-96 h-10 mt-2 mb-2 placeholder:text-zinc-700 pl-3" placeholder="Password Confirmation"/>
                <Button className="w-96 mt-2" text={"Register"} />
                <Link className="text-zinc-400 hover:text-zinc-50 mt-2" to="/login">Already have an account?</Link>
        </div>
    )
}