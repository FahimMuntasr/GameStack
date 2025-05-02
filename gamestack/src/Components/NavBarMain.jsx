import { Link } from "react-router-dom";
import PropTypes from "prop-types";

NavBarMain.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};
export default function NavBarMain({ searchQuery, setSearchQuery }) {
  return (
    <>
      <div className="top-0 flex flex-row w-full justify-between h-16 items-center text-xl bg-zinc-900">
        <div className="ml-4">
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
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search games"
          className="mr-4 px-2 py-1 rounded bg-zinc-800 text-white placeholder-zinc-400"
        />
      </div>
    </>
  );
}
