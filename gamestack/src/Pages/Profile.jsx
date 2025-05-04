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
          <div className="text-center w-full max-w-3xl">
            <div className="bg-pink-900 p-4 rounded-md mb-4">
              <div className="flex flex-col items-start mb-2">
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <p className="text-sm text-gray-300">{profile.email}</p>
              </div>
              <div className="flex justify-center space-x-4 text-white">
                <p>Backlog: {profile.backlog.length}</p>
                <p>Playing: {profile.playing.length}</p>
                <p>Completed: {profile.completed.length}</p>
              </div>
            </div>

            {/* Radio buttons */}
            <div className="flex justify-center space-x-4 mb-6">
              {["backlog", "playing", "completed"].map((list) => (
                <label key={list} className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="gameList"
                    value={list}
                    checked={selectedList === list}
                    onChange={() => setSelectedList(list)}
                    className="accent-blue-500"
                  />
                  <span className="capitalize">{list}</span>
                </label>
              ))}
            </div>

            {/* Render selected list */}
            <div className="bg-green-800 rounded-md p-4">
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
