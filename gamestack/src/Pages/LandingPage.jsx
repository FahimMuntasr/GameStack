import { Link } from "react-router-dom";
import Button from "../Components/Button";
import FootNote from "../Components/FootNote";
export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center min-h-screen px-4">
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight">
          <span className="text-yellow-500">Game</span>
          <span className="text-cyan-500">Stack</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-green-500 mt-4">
          Discover, collect and track your games
        </p>
        <div className="text-sm sm:text-base text-gray-500 mt-6 flex flex-wrap justify-center items-center gap-2">
          <Link to="/register">
            <Button text={"Create a free account"} />
          </Link>
          <span> or </span>
          <Link to="/login" className="text-stone-300 hover:text-stone-50">
            log in
          </Link>
          <span> if you have an account</span>
        </div>
      </div>
      <FootNote />
    </>
  );
}
