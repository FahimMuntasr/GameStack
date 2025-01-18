export default function GameCard({game}){
    const { name, released, background_image, metacritic, platforms, id } = game
    let borderColor = 'border-purple-500'
    if(metacritic>=90){
        borderColor = 'border-purple-500'
    }else if(metacritic>=80){
        borderColor = 'border-green-500'
    }else if(metacritic>=60){
        borderColor = 'border-yellow-500'
    }else if(metacritic>=40){
        borderColor = 'border-orange-500'
    }else if(metacritic>=20){
        borderColor = 'border-red-500'
    }else{
        borderColor = 'border-red-950'
    }
    return(
        <div className="relative w-full max-w-[350px] h-[200px] rounded-lg shadow-lg bg-gray-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 rounded-lg bg-cover bg-center group "
                style={{
                backgroundImage: `url(${background_image})`,
                }}>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in">
                    {/* Content */}
                    <div className="flex flex-col justify-center items-center absolute bottom-0  h-full w-full p-4 bg-gray-900/70 rounded-b-lg text-white ">
                        
                        {/* Game Name */}
                        <div className="h-1/2 p-4 flex justify-center items-center">
                            <h3 className="text-lg font-bold truncate ">{name}</h3>
                        </div>
                        {/* Reviews and Rating */}
                        <div className="flex flex-row items-center justify-between w-full mt-2">
                            <span className="text-sm text-gray-400">{released}</span>
                            <span className={`text-sm border-2 px-2 py-1 rounded font-bold ${borderColor}`}>{metacritic}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}