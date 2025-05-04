import { useEffect, useState } from "react";

export default function GameList({ listName }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "183b214550c74ba2b84e5a8c05960de2"; // Replace with your actual API key

  useEffect(() => {
    const fetchGames = async () => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (!currentUser || !currentUser[listName]) {
        setList([]);
        setLoading(false);
        return;
      }

      const rawList =
        listName === "completed"
          ? currentUser[listName].map((entry) => entry[0]) // get only the IDs
          : currentUser[listName];

      try {
        const responses = await Promise.all(
          rawList.map((id) =>
            fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`).then(
              (res) => res.json()
            )
          )
        );
        setList(responses);
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

    // Filter the appropriate list
    const updatedList =
      listName === "completed"
        ? currentUser[listName].filter((entry) => entry[0] !== gameId)
        : currentUser[listName].filter((id) => id !== gameId);

    currentUser[listName] = updatedList;

    // Update allUsers
    const updatedUsers = allUsers.map((user) =>
      user.email === currentUser.email
        ? { ...user, [listName]: updatedList }
        : user
    );

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Update local list state (remove the game from display)
    setList((prevList) => prevList.filter((game) => game.id !== gameId));
  };
  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl font-bold mb-4 text-white capitalize">
        {listName} List
      </h2> */}
      {list.length === 0 ? (
        <p className="text-gray-300">No games in this list.</p>
      ) : (
        <ul className="space-y-2">
          {list.map((game, index) => (
            <li
              key={game.id}
              className="flex items-center text-white space-x-4"
            >
              <img
                src={game.background_image || "/placeholder.png"}
                alt={`${game.name} cover`}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex flex-row">
                <span>
                  {game.name}
                  {listName === "completed" && (
                    <>
                      {" "}
                      – Rating:{" "}
                      {
                        JSON.parse(localStorage.getItem("currentUser"))[
                          "completed"
                        ][index][1]
                      }
                      /10
                    </>
                  )}
                </span>
                <button
                  onClick={() => handleRemove(game.id)}
                  className="text-sm text-red-400 hover:text-red-600 mt-1"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
