import { useState, useEffect } from "react";
import FootNote from "../Components/FootNote";
import NavBarWoSearch from "../Components/NavBarWoSearch";
import { useNavigate } from "react-router-dom";
import GameList from "../Components/GameList";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [selectedList, setSelectedList] = useState("completed");
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userData = allUsers.find((user) => user.email === currentUser?.email);

    if (!userData) {
      navigate("/login");
    } else {
      setProfile({
        name: userData.username || "anonymous",
        email: userData.email || "anonymous@mail.com",
        backlog: userData.backlog || [],
        playing: userData.playing || [],
        completed: userData.completed || [],
      });
    }
  }, [navigate]);

  return (
    <>
      <NavBarWoSearch />

      <div className="min-h-screen flex flex-col items-center justify-center text-white py-8 px-4 sm:px-6 lg:px-8">
        {profile ? (
          <div className="w-full max-w-5xl bg-zinc-900 rounded-lg shadow-lg">
            {/* Profile Header */}
            <div className="p-4 sm:p-6 md:p-8 border-b border-zinc-700">
              <div className="mb-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold">
                  {profile.name}
                </h1>
                <p className="text-sm text-red-500 font-bold break-words">
                  {profile.email}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-white text-sm">
                <p>
                  Backlog:
                  <span className="text-yellow-300 font-bold">
                    {" "}
                    {profile.backlog.length}
                  </span>
                </p>
                <p>
                  Playing:
                  <span className="text-sky-400 font-bold">
                    {" "}
                    {profile.playing.length}
                  </span>
                </p>
                <p>
                  Completed:
                  <span className="text-green-500 font-bold">
                    {" "}
                    {profile.completed.length}
                  </span>
                </p>
              </div>
            </div>

            {/* Toggle List Buttons */}
            <div className="grid grid-cols-3 sm:flex sm:justify-around text-center border-b border-zinc-700">
              {["backlog", "playing", "completed"].map((list) => (
                <button
                  key={list}
                  onClick={() => setSelectedList(list)}
                  className={`py-3 sm:py-4 capitalize font-semibold transition-colors
                    ${
                      selectedList === list
                        ? "border-b-4 border-red-500 text-white"
                        : "border-b-4 border-transparent text-zinc-400 hover:text-white"
                    }`}
                >
                  {list}
                </button>
              ))}
            </div>

            {/* Game List */}
            <div className="p-4 sm:p-6">
              <GameList listName={selectedList} />
            </div>
          </div>
        ) : (
          <p className="text-zinc-400">Loading profile...</p>
        )}
      </div>

      <FootNote />
    </>
  );
}
