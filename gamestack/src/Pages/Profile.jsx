import { useState, useEffect } from "react";
import FootNote from "../Components/FootNote";
import NavBarMain from "../Components/NavBarMain";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  //load current user and their data
  useEffect(() => {
    const currentUserEmail = localStorage.getItem("currentUser");
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userData = allUsers.find((user) => user.email === currentUserEmail);

    if (!userData) {
      //navigate("/login");
    } else {
      setProfile({
        name: userData.name || "anonymous",
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
          <div className="text-center">
            <h1>Welcome,{profile.name}</h1>
          </div>
        ) : (
          <p className="text-zinc-400">Loading profile...</p>
        )}
      </div>

      <FootNote />
    </>
  );
}
