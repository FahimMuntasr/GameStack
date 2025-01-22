import {useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import NavBarMain from "../Components/NavBarMain";
import FootNote from "../Components/FootNote";
export default function GameDetails(){
    const location = useLocation();
    const id = location.state?.game.id;

    const [gameDetails, setGameDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = "183b214550c74ba2b84e5a8c05960de2";
    let url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
    
    useEffect(() => {
        const fetchGameDetails = async ()=>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`Error : ${response.statusText}`);
                }
                const data = await response.json();
                setGameDetails(data);
            } catch (err){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };
        if(id){
            fetchGameDetails();
        }
    },[id, url]);
    if (loading){
        return (
            <div className="h-full flex justify-center items-center mt-96">
                <p className="text-violet-100 text-8xl">...</p>
            </div>
        );
    }

    if (error){
        return (
            <div className="h-full flex justify-center items-center mt-96">
                <p className="text-violet-100 text-8xl">Error: {error}</p>
            </div>
        );
    }
    if(!gameDetails){
        return(
            <div className="h-full flex justify-center items-center">
                <p>No game details available.</p>
            </div>
        )
    }
    return (
        <>
            <NavBarMain/>
            <div className="text-white p-8 h-full">
                <h1 className="text-3xl w-full flex justify-center font-bold mb-4 text-white">{gameDetails.name}</h1>
                <img
                    src={gameDetails.background_image}
                    alt={gameDetails.name}
                    className="w-auto max-h-96 object-cover rounded-lg mb-4"
                />
                <p>
                    {gameDetails.description_raw
                        ? gameDetails.description_raw.split("\n\n")[0].trim()
                        : "No description available."
                    }
                </p>
                <ul className="mt-4">
                    <li>Released: {gameDetails.released}</li>
                    <li><a>Rating: {gameDetails.metacritic}</a></li>
                    <li>PlayTime: {gameDetails.playtime}</li>
                    <li>Platforms: {gameDetails.platforms.map(p => p.platform.name).join(", ")}</li>
                    <li>Requirements: {gameDetails.platforms.map(p =>p.platform.requirements)}</li>
                    <li>Stores: {gameDetails.stores.map(s => s.store.name).join(",")}</li>
                    <li>Developers: {gameDetails.developers.map(d => d.name).join(",")}</li>
                    <li>Genres: {gameDetails.genres.map(g => g.name).join(",")}</li>
                    <li>tags: {gameDetails.tags.map(t => t.name).join(",")}</li>
                </ul>
            </div>
            <div>
                <button>Backlog</button>
                <button>Playing</button>
                <button>Completed</button>
            </div>
            <FootNote />
        </>
    );
}