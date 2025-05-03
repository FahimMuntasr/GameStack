import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button.jsx";
import TextInput from "../Components/TextInput.jsx";
import FootNote from "../Components/FootNote.jsx";
import NavBarAnon from "../Components/NavBarAnon.jsx";
import { useState } from "react";
export default function CreateAcc() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [backlog, setBacklog] = useState([]);
  const [playing, setPlaying] = useState([]);
  const [completed, setCompleted] = useState([]);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !password || !username || !passwordConfirm) {
      setError("Please fill in all fields.");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (username.length > 16) {
      setError("Username must be less than 16 characters");
      return;
    }
    if (password !== passwordConfirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be atleast 6 characters.");
      return;
    }
    const existingUser = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUser.some((user) => user.email === email)) {
      setError("Email already exists.");
      return;
    }
    setBacklog();
    setCompleted();
    setPlaying();
    const newUser = { username, email, password, backlog, playing, completed };
    existingUser.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUser));
    navigate("/login");
  };
  return (
    <>
      <NavBarAnon />
      <div className="flex flex-col justify-center items-center text-center min-h-screen text-zinc-400 ">
        <h1 className="text-7xl font-light p-6">Registration</h1>
        <form onSubmit={handleSignUp} className="flex flex-col items-center">
          <div className="flex flex-col items-start mb-4">
            <TextInput
              text={"Username"}
              value={username}
              className="w-96"
              onChange={(e) => setUsername(e.target.value)}
            />
            <small className="mb-3 ml-3">Maximum of 16 characters</small>
          </div>
          <div className="flex flex-col items start mb-4">
            <TextInput
              text={"Email Address"}
              className="w-96"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start mb-4">
            <TextInput
              text={"Password"}
              className="w-96"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small className="mb-3 ml-3">Minimum of 6 characters</small>
          </div>
          <div className="flex flex-col items-start mb-4">
            <TextInput
              text={"Password Confirmation"}
              className="w-96"
              value={passwordConfirm}
              type="password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {/* <Link to="/games">
            <Button className="w-96 mt-2" text={"Register"} />
          </Link> */}
          <Button type="submit" className="w-96 mt-2" text={"Register"} />
        </form>
        <Link className="text-zinc-400 hover:text-zinc-50 mt-2" to="/login">
          Already have an account?
        </Link>
      </div>
      <FootNote />
    </>
  );
}
