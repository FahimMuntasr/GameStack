export default function GameCard({ game }) {
  const { name, released, background_image, metacritic } = game;

  let borderColor = "border-purple-500";
  if (metacritic >= 90) borderColor = "border-purple-500";
  else if (metacritic >= 80) borderColor = "border-green-500";
  else if (metacritic >= 60) borderColor = "border-yellow-500";
  else if (metacritic >= 40) borderColor = "border-orange-500";
  else if (metacritic >= 20) borderColor = "border-red-500";
  else borderColor = "border-red-950";

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl shadow-md overflow-hidden group cursor-pointer transition transform hover:scale-[1.03] duration-200">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background_image})` }}
      ></div>

      {/* Overlay - Always visible on small, hover on md+ */}
      <div
        className={`
          absolute inset-0 bg-gray-900/70
          flex flex-col justify-end p-4 text-white
          opacity-100
          md:opacity-0 md:group-hover:opacity-100
          transition-opacity duration-300
        `}
      >
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <div className="flex justify-between items-center text-sm mt-2">
          <span className="text-gray-300">{released}</span>
          <span
            className={`border-2 px-2 py-0.5 rounded ${borderColor} font-bold`}
          >
            {metacritic ?? "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
