import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GameList({ listName }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "183b214550c74ba2b84e5a8c05960de2";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (!currentUser || !currentUser[listName]) {
        setList([]);
        setLoading(false);
        return;
      }

      try {
        if (listName === "completed") {
          const rawCompleted = currentUser[listName]; // [id, rating]
          const responses = await Promise.all(
            rawCompleted.map(([id]) =>
              fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`).then(
                (res) => res.json()
              )
            )
          );
          const combined = responses.map((game, i) => ({
            ...game,
            rating: rawCompleted[i][1],
          }));
          setList(combined);
        } else {
          const rawList = currentUser[listName]; // [id, id, id...]
          const responses = await Promise.all(
            rawList.map((id) =>
              fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`).then(
                (res) => res.json()
              )
            )
          );
          setList(responses);
        }
      } catch (err) {
        console.error("Failed to fetch game details:", err);
        setList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [listName]);

  const handleRemove = (gameId) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    let updatedList;
    if (listName === "completed") {
      updatedList = currentUser[listName].filter(([id]) => id !== gameId);
    } else {
      updatedList = currentUser[listName].filter((id) => id !== gameId);
    }

    currentUser[listName] = updatedList;

    const updatedUsers = allUsers.map((user) =>
      user.email === currentUser.email
        ? { ...user, [listName]: updatedList }
        : user
    );

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Update UI list
    setList((prevList) => prevList.filter((game) => game.id !== gameId));
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="p-4">
      {list.length === 0 ? (
        <p className="text-gray-300">No games in this list.</p>
      ) : (
        <ul className="space-y-2">
          {list.map((game) => (
            <li
              key={game.id}
              className="flex items-center text-white space-x-4 border-b border-zinc-700 pb-2 cursor-pointer hover:bg-zinc-800 rounded px-2 transition"
              onClick={() => navigate("/gamedetails", { state: { game } })}
            >
              <img
                src={game.background_image || "/placeholder.png"}
                alt={`${game.name} cover`}
                className="w-12 h-12 object-cover rounded"
              />

              <div className="flex justify-between w-full items-center">
                <div className="text-left">
                  <p className="font-semibold">{game.name}</p>
                  {listName === "completed" && (
                    <span
                      className={`text-sm font-semibold ${
                        game.rating <= 3
                          ? "text-red-500"
                          : game.rating <= 7
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {game.rating}/10
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent navigation on click
                    handleRemove(game.id);
                  }}
                  className="text-sm text-red-400 hover:text-red-600"
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
