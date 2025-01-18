import { Link } from "react-router-dom";
import FootNote from "../Components/FootNote"
import GameCard from "../Components/GameCard"
import NavBarMain from "../Components/NavBarMain"
import { useEffect,useState } from 'react'

export default function Games(){
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
        const url = `https://api.rawg.io/api/games?key=183b214550c74ba2b84e5a8c05960de2`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setGames(data.results); // RAWG typically returns data in a `results` array
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        };

        fetchGames();
    }, []);

    if (loading) return (
        <div className="h-full flex justify-center items-center mt-96">
            <p className=" text-violet-100 text-8xl">Loading...</p>
        </div>
    );
    if (error) return <p>Error: {error}</p>;

    return(
        <>
            <NavBarMain/>
            <div className="flex flex-row">
                <div className="flex flex-col bg-zinc-950 w-1/6">
                    <div className="flex flex-col justify-center items-start p-5">
                        <h1 className="font-bold text-stone-100 text-4xl pb-8">Browse</h1>
                        <Link to={'/games'}className="text-stone-100 text-2xl">All Games</Link>
                        <div>
                            <span className="text-stone-100 text-2xl">Stores</span>
                            <ul className="text-stone-100">
                                <li>Steam</li>
                                <li>PlayStation Store</li>
                                <li>Xbox Store</li>
                                <li>Nintendo Store</li>
                                <li>GOG</li>
                                <li>IOS App Store</li>
                                <li>Google Play Store</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-stone-100 text-2xl">Platforms</span>
                            <ul className="text-stone-100">
                                <li>PC</li>
                                <li>PS5</li>
                                <li>PS4</li>
                                <li>Xbox X/S</li>
                                <li>Xbox One</li>
                                <li>Nintendo Switch</li>
                                <li>IOS</li>
                                <li>Android</li>
                                <li>MacOS</li>
                                <li>Linux</li>
                                <li>Xbox 360</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-stone-100 text-2xl">Genres</span>
                            <ul className="text-stone-100">
                                <li>Action</li>
                                <li>Indie</li>
                                <li>Adventure</li>
                                <li>RPG</li>
                                <li>Racing</li>
                                <li>Sports</li>
                                <li>Strategy</li>
                                <li>Shooter</li>
                                <li>Simulation</li>
                                <li>Puzzle</li>
                                <li>Arcade</li>
                                <li>Platformer</li>
                                <li>MMO</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" w-5/6 mr-8 mb-8 ml-8">
                    <div className="flex justify-center">
                        <h1 className="font-bold text-stone-100 text-6xl pt-7 pb-7">All Games</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-8 ">
                        {games.map((game)=>(
                            <Link to={'/profile'} key={game.id}>
                                <GameCard game={game}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <FootNote/>
        </>
    )
}
