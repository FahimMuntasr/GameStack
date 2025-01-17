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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <>
            <NavBarMain/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {games.map((game)=>(
                    <GameCard key={game.id}game={game}/>
                  ))}
            </div>
            <FootNote/>
        </>
    )
}
