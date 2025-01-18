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
                        <Link to={'/games'}className="text-stone-100 text-2xl">
                            <span className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">All Games</span>
                        </Link>
                        <div className="pt-8">
                            <span className="text-stone-100 text-2xl">Stores</span>
                            <ul className="text-stone-100 pt-2 pl-4">
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Steam</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">PlayStation Store</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Xbox Store</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Nintendo Store</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">GOG</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">IOS App Store</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Google Play Store</li>
                            </ul>
                        </div>
                        <div className="pt-8">
                            <span className="text-stone-100 text-2xl">Platforms</span>
                            <ul className="text-stone-100 pt-2 pl-4">
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">PC</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">PS5</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">PS4</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Xbox X/S</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Xbox One</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Nintendo Switch</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">IOS</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Android</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">MacOS</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Linux</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Xbox 360</li>
                            </ul>
                        </div>
                        <div className="pt-8">
                            <span className="text-stone-100 text-2xl">Genres</span>
                            <ul className="text-stone-100 pt-2 pl-4">
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Action</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Indie</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Adventure</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">RPG</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Racing</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Sports</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Strategy</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Shooter</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Simulation</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Puzzle</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Arcade</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">Platformer</li>
                                <li className="text-cyan-500 hover:text-rose-500 transition-colors duration-100 ease-in">MMO</li>
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
