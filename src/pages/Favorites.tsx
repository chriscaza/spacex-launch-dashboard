import { useEffect, useState } from "react";
import { type FavoriteData } from "../types";
import FavoriteCard from "../components/Ui/FavoriteCard";

function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteData[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="font-[var(--font-roboto)] text-2xl font-normal mb-4">Mis Lanzamientos Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes lanzamientos guardados.</p>
      ) : (
        <div className="flex flex-col gap-4 h-96 lg:h-90 overflow-y-auto">
          {favorites.map((fav) => (
            <FavoriteCard key={fav.id} {...fav} onRemove={removeFavorite} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

