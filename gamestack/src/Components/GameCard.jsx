export default function GameCard({game}){
    const { name, released, background_image, rating, platforms } = game
    return(
        <div className="relative w-full max-w-[350px] h-[200px] rounded-lg shadow-lg bg-gray-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 rounded-lg bg-cover bg-center"
                style={{
                backgroundImage: `url(${background_image})`,
                }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 rounded-lg bg-black/40"></div>
            {/* Content */}
            <div className="absolute bottom-0 w-full p-4 bg-gray-900/90 rounded-b-lg text-white">
                {/* Platform Icons */}
                <div className="flex items-center gap-2 text-sm mb-2">
                    {platforms.map((platform)=>(
                        <span className="inline-block px-2 py-1 bg-gray-800 rounded text-xs uppercase" key={platform.platform.id}>
                            {platform.platform.name}
                        </span>

                    ))}
                </div>
                {/* Game Name */}
                <h3 className="text-lg font-bold truncate">{name}</h3>
                {/* Reviews and Rating */}
                <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-400">{released}</span>
                    <span className="text-sm border-2 border-green-500 px-2 py-1 rounded font-bold">{rating}</span>
                </div>
            </div>
        </div>
    )
}