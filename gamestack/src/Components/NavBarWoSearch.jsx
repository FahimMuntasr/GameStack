import { Link } from "react-router-dom";

export default function NavBarMain() {
  return (
    <>
      <div className="top-0 flex flex-row w-full justify-between h-16 items-center text-xl bg-zinc-900 pl-40 pr-40">
        <Link to="/profile">
          <span className="text-stone-100 hover:text-rose-600 transition-colors duration-200 ease-in">
            Profile
          </span>
        </Link>
        <div className="ml-4">
          <span className="text-yellow-500">Game</span>
          <span className="text-cyan-500">Stack</span>
        </div>
        <Link to="/games">
          <span className="text-stone-100 hover:text-rose-600 transition-colors duration-200 ease-in">
            Games
          </span>
        </Link>
      </div>
    </>
  );
}
