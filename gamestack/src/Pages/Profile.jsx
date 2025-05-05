import { useState, useEffect } from "react";
import FootNote from "../Components/FootNote";
import NavBarMain from "../Components/NavBarMain";
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
      <NavBarMain />

      <div className="min-h-screen flex flex-col items-center justify-center text-white py-8">
        {profile ? (
          <div className="text-center w-full max-w-3xl bg-zinc-900">
            <div className="p-4 rounded-md mb-4">
              <div className="flex flex-col items-start mb-2 border-b border-zinc-600 pb-2">
                <h1 className="text-2xl font-extrabold">{profile.name}</h1>
                <p className="text-sm text-red-500 font-bold">
                  {profile.email}
                </p>
              </div>
              <div className="flex justify-start space-x-4 text-zinc-500 text-white">
                <p>
                  Backlog
                  <span className="text-yellow-300 font-bold">
                    {" "}
                    {profile.backlog.length}
                  </span>
                </p>
                <p>
                  Playing
                  <span className="text-sky-400 font-bold">
                    {" "}
                    {profile.playing.length}
                  </span>
                </p>
                <p>
                  Completed
                  <span className="text-green-500 font-bold">
                    {" "}
                    {profile.completed.length}
                  </span>
                </p>
              </div>
            </div>

            {/* Radio buttons */}
            <div className="grid grid-cols-3 gap-2 mb-6 text-center border-b border-zinc-700">
              {["backlog", "playing", "completed"].map((list) => (
                <button
                  key={list}
                  onClick={() => setSelectedList(list)}
                  className={`py-2 capitalize font-semibold transition-colors
                    ${
                      selectedList === list
                        ? "border-b-4 border-red-500 text-zinc-100"
                        : "border-b-4 border-transparent text-zinc-400 hover:text-white"
                    }`}
                >
                  {list}
                </button>
              ))}
            </div>
            {/* Render selected list */}
            <div className="rounded-md p-4">
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
