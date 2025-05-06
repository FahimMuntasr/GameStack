import { Link } from "react-router-dom";
import PropTypes from "prop-types";

NavBarMain.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};
export default function NavBarMain({ searchQuery, setSearchQuery }) {
  return (
    <div className="top-0 flex flex-col lg:flex-row justify-between w-full h-auto lg:h-20 items-center text-xl bg-zinc-900 p-4 space-y-4 lg:space-y-0">
      <div className="flex flex-col lg:flex-row justify-between w-full lg:w-1/3 items-center space-y-2 lg:space-y-0 lg:space-x-4">
        <div className="text-2xl">
          <span className="text-yellow-500">Game</span>
          <span className="text-cyan-500">Stack</span>
        </div>
        <Link to="/profile">
          <span className="text-stone-100 hover:text-rose-600 transition-colors duration-200 ease-in">
            Profile
          </span>
        </Link>
        <Link to="/games">
          <span className="text-stone-100 hover:text-rose-600 transition-colors duration-200 ease-in">
            Games
          </span>
        </Link>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search games"
        className="px-2 py-1 rounded bg-zinc-800 text-white placeholder-zinc-400 w-full lg:w-1/3"
      />
    </div>
  );
}
