import { Link } from "react-router-dom";
import Button from "../Components/Button.jsx";
import TextInput from "../Components/TextInput.jsx";
import FootNote from "../Components/FootNote.jsx";
import NavBarAnon from "../Components/NavBarAnon.jsx";
export default function CreateAcc(){
    return(
        <>
            <NavBarAnon/>
            <div className="flex flex-col justify-center items-center text-center min-h-screen text-zinc-400 ">
                    <h1 className="text-7xl font-light p-6">Registration</h1>
                    <div className="flex flex-col items-start">
                        <TextInput text={"Username"} className="w-96"/>
                        <small className="mb-3 ml-3">Maximum of 16 characters</small>
                    </div>
                    <TextInput text={"Email Address"} className="w-96"/>
                    <div className="flex flex-col items-start">
                        <TextInput text={"Password"} className="w-96"/>
                        <small className="mb-3 ml-3">Minimum of 6 characters</small>
                    </div>
                    <TextInput text={"Password Confirmation"} className="w-96"/>
                    <Link to="/games">
                        <Button className="w-96 mt-2" text={"Register"} />
                    </Link>
                    <Link className="text-zinc-400 hover:text-zinc-50 mt-2" to="/login">Already have an account?</Link>
            </div>
            <FootNote/>
        </>
    )
}