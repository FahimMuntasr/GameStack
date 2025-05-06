import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBarWoSearch from "../Components/NavBarWoSearch";
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

  const addToList = (listName) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.email) {
      alert("User not logged in.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((u) => u.email === currentUser.email);

    if (userIndex === -1) {
      alert("Current user not found.");
      return;
    }

    const user = users[userIndex];

    // Ensure all lists exist
    if (!user.backlog) user.backlog = [];
    if (!user.playing) user.playing = [];
    if (!user.completed) user.completed = [];

    // Function to remove ID from all lists
    const removeFromAllLists = (id) => {
      user.backlog = user.backlog.filter((gameId) => gameId !== id);
      user.playing = user.playing.filter((gameId) => gameId !== id);
      user.completed = user.completed.filter((entry) =>
        Array.isArray(entry) ? entry[0] !== id : entry !== id
      );
    };

    const isInList = (list, id) => {
      if (list === "completed") {
        return user.completed.some((entry) =>
          Array.isArray(entry) ? entry[0] == id : entry == id
        );
      } else {
        return user[list].includes(id);
      }
    };

    const wasInAnotherList = ["backlog", "playing", "completed"].some((list) =>
      isInList(list, id)
    );

    if (wasInAnotherList) {
      // Remove from all other lists
      removeFromAllLists(id);
      alert(`Game was already in another list. Moving it to ${listName}.`);
    }

    // Add to the new list
    if (listName === "completed") {
      let rating = prompt("Enter your rating out of 10:");
      if (rating === null) return;
      rating = parseFloat(rating);
      if (isNaN(rating) || rating < 0 || rating > 10) {
        alert("Invalid rating.");
        return;
      }
      user.completed.push([id, rating]);
    } else {
      user[listName].push(id);
    }

    // Save changes
    users[userIndex] = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Game added to ${listName}!`);
  };

  console.log(url);
  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-zinc-800 text-gray-200">
      <NavBarWoSearch />

      {/* Content */}
      <div className="w-full max-w-6xl px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-6 text-center text-white">
          {gameDetails.name}
        </h1>

        {/* Image */}
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 space-y-4 mb-6">
          <img
            className="w-full rounded-lg shadow-md"
            src={gameDetails.background_image}
            alt={gameDetails.name}
          />
        </div>

        {/* Details Card */}
        <div className="flex flex-col w-full bg-zinc-900 border-2 border-zinc-400 rounded-lg shadow-lg p-4 space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <ul className="space-y-2 text-sm w-full md:w-2/5 text-gray-300 mb-4 md:mb-0">
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

            <p className="text-sm w-full md:w-3/5 leading-relaxed text-gray-200">
              {gameDetails.description_raw}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 px-4">
        <button
          onClick={() => addToList("backlog")}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Backlog
        </button>
        <button
          onClick={() => addToList("playing")}
          className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
        >
          Playing
        </button>
        <button
          onClick={() => addToList("completed")}
          className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-900 transition"
        >
          Completed
        </button>
      </div>

      <FootNote />
    </div>
  );
}
