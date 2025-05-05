import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn.jsx";
import CreateAcc from "./Pages/CreateAcc.jsx";
import Games from "./Pages/Games.jsx";
import Profile from "./Pages/Profile.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import NoPage from "./Pages/NoPage.jsx";
import GameDetails from "./Pages/GameDetails.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/GameStack" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<CreateAcc />} />
          <Route path="/gamedetails" element={<GameDetails />} />
          <Route path="/game" element={<GameDetails />} />
          <Route path="/games" element={<Games pageNum={1} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
