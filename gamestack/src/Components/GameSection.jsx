import GameCard from "./GameCard"
import { Link } from "react-router-dom"
export default function GameSection({games,pageNum,title}){


    return(
        <div className="w-full mr-8 mb-8 ml-8">
            <div className="flex justify-start">
                <h1 className="font-bold text-stone-100 text-6xl pt-7 pb-7">{title}</h1>
            </div>
            <div className="grid grid-cols-4 gap-8 ">
                {games.map((game)=>(
                    <Link to={'/profile'} key={game.id}>
                        <GameCard game={game}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}