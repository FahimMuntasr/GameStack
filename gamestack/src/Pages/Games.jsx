import { useEffect, useState } from 'react';

import FootNote from "../Components/FootNote";
import NavBarMain from "../Components/NavBarMain";
import GameSection from "../Components/GameSection";
import FilterBar from "../Components/FilterBar";

export default function Games() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ genre: "", platform: "", store: "" });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const buildApiUrl = () => {
        const apiKey = "183b214550c74ba2b84e5a8c05960de2";
        let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${currentPage}`;

        if (filters.genre) {
            url += `&genres=${filters.genre}`;
        }
        if (filters.platform) {
            url += `&platforms=${filters.platform}`;
        }
        if (filters.store) {
            url += `&stores=${filters.store}`;
        }
        console.log(url);
        return url;
    };

    useEffect(() => {
        const fetchGames = async () => {
            const url = buildApiUrl();

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setGames(data.results || []);
                setTotalPages(data.count ? Math.ceil(data.count / 20) : 1); // Assuming 20 results per page
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, [currentPage, filters]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            setLoading(true); // Show loading while fetching new data
        }
    };

    if (loading)
        return (
            <div className="h-full flex justify-center items-center mt-96">
                <p className="text-violet-100 text-8xl">...</p>
            </div>
        );

    if (error)
        return (
            <div className="h-full flex justify-center items-center mt-96">
                <p className="text-violet-100 text-8xl">Error: {error}</p>
            </div>
        );

    return (
        <>
            <NavBarMain />
            <div className="flex flex-col justify-center items-center">
                <FilterBar filters={filters} setFilters={setFilters} />
                <div className="w-11/12 flex flex-row">
                    <GameSection games={games} />
                </div>
                {/* Pagination Controls */}
                <div className="flex flex-col justify-center items-center mt-4">
                    <div>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="
                                bg-zinc-900 
                                text-white 
                                px-4 
                                py-2
                                mx-2 
                                rounded 
                                disabled:opacity-50
                                hover:bg-zinc-950
                                transition-colors
                                duration-200
                                ease-in"
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="
                                bg-zinc-900 
                                text-white 
                                px-4 
                                py-2
                                mx-2 
                                rounded 
                                disabled:opacity-50
                                hover:bg-zinc-950
                                transition-colors
                                duration-200
                                ease-in"
                        >
                            Next
                        </button>
                    </div>
                        <span className="text-white font-medium ">
                            Page {currentPage}/{totalPages}
                        </span>
                </div>
            </div>
            <FootNote />
        </>
    );
}
