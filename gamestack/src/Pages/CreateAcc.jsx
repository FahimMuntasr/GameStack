import { Link } from "react-router-dom";

export default function CreateAcc(){
    return(
        <>
            <h1>Registration</h1>
            <input placeholder="Username"/>
            <small>Maximum of 16 characters</small>
            <input placeholder="Email address"/>
            <input placeholder="Password"/>
            <small>Minimum of 6 characters</small>
            <input placeholder="Password Confirmation"/>
            <button>Register</button>
            <Link to="/login">Already have an account?</Link>
        </>
    )
}