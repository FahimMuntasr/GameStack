import GameCard from "./GameCard"
import { Link } from "react-router-dom"
export default function GameSection({games,pageNum,title}){


    return(
        <div className="w-full mr-8 mb-8 ml-8">
            <div className="grid grid-cols-4 gap-8 mt-16">
                {games.map((game)=>(
                    <Link to={'/game'} key={game.id} state={{game}}>
                        <GameCard game={game}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}