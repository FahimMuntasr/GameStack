import { useState, useEffect } from "react";
import FootNote from "../Components/FootNote";
import NavBarMain from "../Components/NavBarMain";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  //load current user and their data
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    console.log(allUsers);
    const userData = allUsers.find((user) => user.email === currentUser.email);
    console.log(userData);
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
    console.log(profile);
  }, [navigate]);

  return (
    <>
      <NavBarMain />

      <div className="min-h-screen flex flex-col items-center justify-center text-white py-8">
        {profile ? (
          <div className="text-center">
            <div className="bg-pink-900">
              <div className="flex flex-col item-start">
                <h1>{profile.name}</h1>
                <p>{profile.email}</p>
              </div>
              <div className="flex flex-row justify-center">
                <p className="mr-2">Backlog {profile.backlog.length} </p>
                <p className="mr-2">Playing {profile.playing.length} </p>
                <p className="mr-2">Completed {profile.completed.length} </p>
              </div>
            </div>
            <div className="flex flex-col bg-green-800">
              <div className="flex flex-row">
                <p>Backlog</p>
                <p>Playing</p>
                <p>Completed</p>
              </div>
              <div className="flex flex-col"></div>
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
