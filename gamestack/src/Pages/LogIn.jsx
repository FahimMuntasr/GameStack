import { Link, useNavigate } from "react-router-dom";
import TextInput from "../Components/TextInput";
import Button from "../Components/Button";
import FootNote from "../Components/FootNote";
import NavBarAnon from "../Components/NavBarAnon";
import { useState } from "react";

export default function LogIn() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (user) =>
        (user.email === emailOrUsername || user.username === emailOrUsername) &&
        user.password === password
    );
    if (matchedUser) {
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      navigate("/games");
    } else {
      setError("Invalid email/username or password.");
    }
  };

  return (
    <>
      <NavBarAnon />
      <div className="flex flex-col justify-center items-center text-center min-h-screen text-zinc-400 ">
        <h1 className="text-7xl font-light p-6">Welcome back</h1>

        {error && <p className="text-red-400 mb-2">{error}</p>}

        <TextInput
          text={"Email/Username"}
          className="w-96"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
        />
        <TextInput
          text={"Password"}
          className="w-96"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-row  w-96">
          <input type="checkbox" className="mr-2"></input>
          <p>Remember me</p>
        </div>
        <Button text={"Log In"} className="w-96 mt-2" onClick={handleLogin} />

        <Link className="text-zinc-400 hover:text-zinc-50 mt-2" to="/register">
          Dont have an account?
        </Link>
      </div>
      <FootNote />
    </>
  );
}
