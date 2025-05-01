import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBarMain from "../Components/NavBarMain";
import FootNote from "../Components/FootNote";
export default function GameDetails() {
  const location = useLocation();
  const id = location.state?.game.id;

  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = "183b214550c74ba2b84e5a8c05960de2";
  let url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error : ${response.statusText}`);
        }
        const data = await response.json();
        setGameDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchGameDetails();
    }
  }, [id, url]);
  if (loading) {
    return (
      <div className="h-full flex justify-center items-center mt-96">
        <p className="text-violet-100 text-8xl">...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex justify-center items-center mt-96">
        <p className="text-violet-100 text-8xl">Error: {error}</p>
      </div>
    );
  }
  if (!gameDetails) {
    return (
      <div className="h-full flex justify-center items-center">
        <p>No game details available.</p>
      </div>
    );
  }
  console.log(url);
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-zinc-800 text-gray-200">
      <NavBarMain />
      {/* Content */}
      <div className="w-2/3 relative z-10 flex flex-col items-center ">
        <h1 className="text-4xl font-bold mt-6 mb-6 text-center text-white">
          {gameDetails.name}
        </h1>

        <div className="w-1/2 space-y-4 mb-6">
          <img
            className="w-full rounded-lg shadow-md"
            src={gameDetails.background_image}
            alt={gameDetails.name}
          />
        </div>
        <div className="flex flex-col w-full items-center border-2 border-zinc-400 rounded-lg overflow-hidden bg-zinc-900 shadow-lg p-4">
          <div className="w-full p-4 text-gray-300 flex flex-row">
            <ul className="h-full space-y-2 w-2/5 text-sm text-gray-300">
              <li className="text-sky-400">
                <span className="font-semibold text-yellow-400">Released:</span>{" "}
                {gameDetails.released}
              </li>
              <li className="text-sky-400">
                <span className="font-semibold text-yellow-400">Rating:</span>{" "}
                {gameDetails.metacritic}
              </li>
              <li className="text-sky-400">
                <span className="font-semibold text-yellow-400">PlayTime:</span>{" "}
                {gameDetails.playtime} hrs
              </li>
              <li className="text-sky-400">
                <span className="font-semibold text-yellow-400">
                  Platforms:
                </span>{" "}
                {gameDetails.platforms.map((p) => p.platform.name).join(", ")}
              </li>
              <li className="text-sky-400">
                <span className="font-semibold text-yellow-400">Stores:</span>{" "}
                {gameDetails.stores.map((s) => s.store.name).join(", ")}
              </li>
              <li className="text-sky-400">
                <span className="font-semibold text-yellow-400">
                  Developers:
                </span>{" "}
                {gameDetails.developers.map((d) => d.name).join(", ")}
              </li>
              <li className="text-sky-400">
                <span className="font-semibold text-yellow-400">Genres:</span>{" "}
                {gameDetails.genres.map((g) => g.name).join(", ")}
              </li>
            </ul>
            <p className="text-sm w-3/5 leading-relaxed">
              {gameDetails.description_raw}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
          Backlog
        </button>
        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition">
          Playing
        </button>
        <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-900 transition">
          Completed
        </button>
      </div>
      <FootNote />
    </div>
  );
}
