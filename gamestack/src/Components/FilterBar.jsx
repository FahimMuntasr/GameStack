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
        {value: "pc", label: "PC"},
        {value: "playstation5", label: "PS5"},
        {value: "xbox-series-x", label: "Xbox X/S"},
        {value: "nintendo-switch", label: "Nintendo Switch"},
        {value: "playstation4", label: "PS4"},
        {value: "xbox-one", label: "Xbox One"},
        {value: "wii-u", label: "Wii U"},
        {value: "playstation3", label: "PS3"},
        {value: "xbox360", label: "Xbox 360"},
        {value: "ps-vita", label: "PS Vita"},
        {value: "psp", label: "PSP"},
        {value: "nintendo-64", label: "Nintendo 64"},
        {value: "wii", label: "Wii"},
        {value: "playstation2", label: "PS2"},
        {value: "game-boy-advance", label: "Game Boy Advance"},
        {value: "playstation1", label: "PS1"},
        {value: "ios", label: "IOS"},
        {value: "android", label: "Android"},
        {value: "macos", label: "MacOS"},
        {value: "linux", label: "Linux"},
        {value: "gamecube", label: "GameCube"},
        {value: "game-boy-color", label: "Game Boy Color"},
        {value: "game-boy", label: "Game Boy"},
        {value: "snes", label: "SNES"},
        {value: "nes", label: "NES"},
        {value: "xbox-old", label: "Xbox"},
        {value: "nintendo-3ds", label: "Nintendo 3DS"},
        {value: "nintendo-ds", label: "Nintendo DS"},
    ]; // Replace with actual platform IDs/names if available
    const stores = ["Steam", "Epic Games", "PlayStation Store", "Xbox Store"]; // Replace with actual store IDs/names if available

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value, // Dynamically set the filter based on the input name
        }));
    };

    return (
        <div className="p-4 bg-gray-800 text-white rounded-lg flex flex-wrap justify-between items-center">
            {/* Genre Filter */}
            <div className="flex flex-col mr-4">
                <label htmlFor="genre" className="mb-2 text-sm font-medium">
                    Filter by Genre:
                </label>
                <select
                    id="genre"
                    name="genre"
                    value={filters.genre}
                    onChange={handleFilterChange}
                    className="p-2 rounded bg-gray-700 text-white"
                >
                    <option value="">All Genres</option>
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>
                            {genre.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Platform Filter */}
            <div className="flex flex-col mr-4">
                <label htmlFor="platform" className="mb-2 text-sm font-medium">
                    Filter by Platform:
                </label>
                <select
                    id="platform"
                    name="platform"
                    value={filters.platforms}
                    onChange={handleFilterChange}
                    className="p-2 rounded bg-gray-700 text-white"
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
                <label htmlFor="store" className="mb-2 text-sm font-medium">
                    Filter by Store:
                </label>
                <select
                    id="store"
                    name="store"
                    value={filters.store}
                    onChange={handleFilterChange}
                    className="p-2 rounded bg-gray-700 text-white"
                >
                    <option value="">All Stores</option>
                    {stores.map((store) => (
                        <option key={store} value={store}>
                            {store}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
