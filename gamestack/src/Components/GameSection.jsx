import GameCard from "./GameCard";
import { Link } from "react-router-dom";
export default function GameSection({ games, pageNum, title }) {
  return (
    <div className="w-full px-4 mb-8">
      <div
        className="grid gap-6 mt-16
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5"
      >
        {games.map((game) => (
          <Link to={"/game"} key={game.id} state={{ game }}>
            <GameCard game={game} />
          </Link>
        ))}
      </div>
    </div>
  );
}
