import { Link } from "react-router-dom";

export default function NavBarWoSearch() {
  return (
    <div className="w-full h-16 flex items-center justify-between px-6 md:px-20 bg-zinc-900 shadow-md fixed top-0 z-50">
      {/* Left - Profile */}
      <Link to="/profile">
        <span className="text-stone-100 text-lg font-medium hover:text-rose-500 transition-colors duration-200">
          Profile
        </span>
      </Link>

      {/* Center - Logo */}
      <div className="text-2xl font-extrabold tracking-wide">
        <span className="text-yellow-400">Game</span>
        <span className="text-cyan-400">Stack</span>
      </div>

      {/* Right - Games */}
      <Link to="/games">
        <span className="text-stone-100 text-lg font-medium hover:text-rose-500 transition-colors duration-200">
          Games
        </span>
      </Link>
    </div>
  );
}
