import { useEffect,useState } from 'react'

import FootNote from "../Components/FootNote"
import NavBarMain from "../Components/NavBarMain"
import GameSection from "../Components/GameSection";
import FilterBar from "../Components/FilterBar";

export default function Games(){
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ genre: "", platform: "", store: "" });
    const [currentPage, setCurrentPage] = useState(1);

    const buildApiUrl = () => {
       const apiKey = "183b214550c74ba2b84e5a8c05960de2";
       let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${currentPage}`;
       
       if(filters.genre){
            url += `&genres=${filters.genre}`;
       }
       if(filters.platform){
            url += `&platforms=${filters.platform}`;
       }
       if(filters.store){
            url += `&stores=${filters.store}`;
       }
       console.log(url);
       return url;
    }

    useEffect(() => {
        const fetchGames = async () => {
            const url = buildApiUrl();

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setGames(data.results || [])
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, [currentPage, filters]);

    if (loading)
        return (
            <div className="h-full flex justify-center items-center mt-96">
                <p className="text-violet-100 text-8xl">...</p>
            </div>
        );
    if (error) 
        return (
            <div className="h-full flex justify-center items-center mt-96">
                <p className="text-violet-100 text-8xl">Error: {error}</p>;
            </div>
        )
    return(
        <>
            <NavBarMain/>
            <FilterBar filters={filters} setFilters={setFilters}/>
            <div className="flex flex-row">
                <GameSection games={games} title={'All Games'}/>
            </div>
            <FootNote/>
        </>
    )
}
