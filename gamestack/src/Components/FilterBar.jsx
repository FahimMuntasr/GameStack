export default function FilterBar({ filters, setFilters }) {
    const genres = [
        {value: "action", label : "Action"},
        {value: "adventure", label : "Adventure"},
        {value: "shooter", label : "Shooter"},
        {value: "sports", label : "Sports"},
        {value: "racing", label : "Racing"},
        {value: "fighting", label : "Fighting"},
        {value: "indie", label : "Indie"},
        {value: "role-playing-games-rpg", label : "RPG"},
        {value: "strategy", label : "Strategy"},
        {value: "casual", label : "Casual"},
        {value: "simulation", label : "Simulation"},
        {value: "platformer", label : "Platformer"},
        {value: "arcade", label : "Arcade"},
        {value: "puzzle", label : "Puzzle"},
        {value: "massively-multiplayer", label : "MMO"},
        {value: "family", label : "Family"},
        {value: "board-games", label : "Board Games"},
        {value: "educational", label : "Educational"},
        {value: "card", label : "Card"},
    ]; // Add or modify genres as needed
    const platforms = [
        {value: 4, label: "PC"},
        {value: 187, label: "PS5"},
        {value: 186, label: "Xbox X/S"},
        {value: 7, label: "Nintendo Switch"},
        {value: 18, label: "PS4"},
        {value: 1, label: "Xbox One"},
        {value: 10, label: "Wii U"},
        {value: 16, label: "PS3"},
        {value: 14, label: "Xbox 360"},
        {value: 19, label: "PS Vita"},
        {value: 17, label: "PSP"},
        {value: 11, label: "Wii"},
        {value: 15, label: "PS2"},
        {value: 24, label: "Game Boy Advance"},
        {value: 27, label: "PS1"},
        {value: 5, label: "MacOS"},
        {value: 6, label: "Linux"},
        {value: 105, label: "GameCube"},
        {value: 43, label: "Game Boy Color"},
        {value: 26, label: "Game Boy"},
        {value: 79, label: "SNES"},
        {value: 49, label: "NES"},
        {value: 8, label: "Nintendo 3DS"},
        {value: 9, label: "Nintendo DS"},
    ]; // Replace with actual platform IDs/names if available
    const stores = [
        {value: 1 , label: "Steam"},
        {value: 2 , label: "Nintendo Store"},
        {value: 3 , label: "PlayStation Store"},
        {value: 4 , label: "Epic Games"},
        {value: 5 , label: "Xbox Store"},
        {value: 6 , label: "GOG"},
    ]; // Replace with actual store IDs/names if available

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value, // Dynamically set the filter based on the input name
        }));
    };

    return (
        <div className="flex flex-row w-full p-4 bg-zinc-900 text-white justify-between items-center ">
            {/* Genre Filter */}
            <div className="flex flex-col mr-4">
                <label htmlFor="genre" className="mb-2 text-2xl font-bold">
                    Genre
                </label>
                <select
                    id="genre"
                    name="genre"
                    value={filters.genre}
                    onChange={handleFilterChange}
                    className={`
                        p-2 
                        text-xl 
                        bg-zinc-900 
                        text-white 
                        transition-colors 
                        duration-200 
                        ease-in 
                        border-t-0 
                        border-l-0 
                        border-r-0 
                        border-b-4 
                        cursor-pointer
                        border-zinc-900 
                        hover:border-rose-500 
                        focus:border-rose-500`}
                >
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option  key={genre.value} value={genre.value}>
                            {genre.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Platform Filter */}
            <div className="flex flex-col mr-4">
                <label htmlFor="platform" className="mb-2 mt-2 text-2xl font-bold">
                    Platform
                </label>
                <select
                    id="platform"
                    name="platform"
                    value={filters.platforms}
                    onChange={handleFilterChange}
                    className={`
                        p-2 
                        text-xl 
                        bg-zinc-900 
                        text-white 
                        transition-colors 
                        duration-200 
                        ease-in 
                        border-t-0 
                        border-l-0 
                        border-r-0 
                        border-b-4 
                        cursor-pointer
                        border-zinc-900 
                        hover:border-rose-500 
                        focus:border-rose-500`}
                >
                    <option value="">All Platforms</option>
                    {platforms.map((platform) => (
                        <option key={platform.value} value={platform.value}>
                            {platform.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Store Filter */}
            <div className="flex flex-col mr-4">
                <label htmlFor="store" className="mb-2 mt-2 text-2xl font-bold">
                    Store
                </label>
                <select
                    id="store"
                    name="store"
                    value={filters.store}
                    onChange={handleFilterChange}
                    className={`
                        p-2 
                        text-xl 
                        bg-zinc-900 
                        text-white 
                        transition-colors 
                        duration-200 
                        ease-in 
                        border-t-0 
                        border-l-0 
                        border-r-0 
                        border-b-4 
                        cursor-pointer
                        border-zinc-900 
                        hover:border-rose-500 
                        focus:border-rose-500`}
                >
                    <option value="">All Stores</option>
                    {stores.map((store) => (
                        <option key={store.value} value={store.value}>
                            {store.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
