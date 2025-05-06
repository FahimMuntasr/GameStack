import { useEffect, useState } from "react";

import FootNote from "../Components/FootNote";
import NavBarMain from "../Components/NavBarMain";
import GameSection from "../Components/GameSection";
import FilterBar from "../Components/FilterBar";

export default function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    genre: "",
    platform: "",
    store: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // debounced

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const buildApiUrl = () => {
    const apiKey = "183b214550c74ba2b84e5a8c05960de2";
    let url = `https://api.rawg.io/api/games?key=${apiKey}&page=${currentPage}`;

    if (filters.genre) url += `&genres=${filters.genre}`;
    if (filters.platform) url += `&platforms=${filters.platform}`;
    if (filters.store) url += `&stores=${filters.store}`;
    if (searchQuery) url += `&search=${encodeURIComponent(searchQuery)}`; // 🔍 search support

    return url;
  };

  useEffect(() => {
    const fetchGames = async () => {
      const url = buildApiUrl();
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        setGames(data.results || []);
        setTotalPages(data.count ? Math.ceil(data.count / 20) : 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [currentPage, filters, debouncedSearchQuery]); // 👈 react to searchQuery

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setLoading(true);
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
    <div className="flex flex-col justify-between">
      <NavBarMain searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-col justify-center items-center">
        <FilterBar filters={filters} setFilters={setFilters} />
        <div className="w-full flex flex-col items-center px-2 sm:px-4">
          <GameSection games={games} />
        </div>
        <div className="w-full mt-auto px-4 py-6 flex flex-col items-center justify-center bg-zinc-900">
          <div className="flex gap-4 mb-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`
        px-4 py-2 
        rounded-lg 
        text-white 
        bg-rose-600 
        hover:bg-rose-700 
        transition-colors 
        duration-200 
        ease-in-out 
        disabled:bg-zinc-700 
        disabled:cursor-not-allowed
      `}
            >
              Prev
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`
        px-4 py-2 
        rounded-lg 
        text-white 
        bg-rose-600 
        hover:bg-rose-700 
        transition-colors 
        duration-200 
        ease-in-out 
        disabled:bg-zinc-700 
        disabled:cursor-not-allowed
      `}
            >
              Next
            </button>
          </div>
          <span className="text-white font-semibold text-lg">
            Page {currentPage} of {totalPages}
          </span>
        </div>
      </div>
      <FootNote />
    </div>
  );
}
