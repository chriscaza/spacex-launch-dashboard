import { useEffect, useState } from "react";
import { type launchesData } from "../../types";
import {
  MdFavoriteBorder,
  MdOutlineCancel,
  MdOutlineCheckCircleOutline,
} from "react-icons/md";

// Props que recibe el componente LaunchCard
type Props = {
  launch: launchesData;
  rocketName: string;
  launchSite: string;
};

function LaunchCard({ launch, rocketName, launchSite }: Props) {
  // Estado para controlar si el lanzamiento está en favoritos
  const [isFavorite, setIsFavorite] = useState(false);

  // Al montar o cambiar el id, verifica en localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    // Comprueba si el lanzamiento actual ya está marcado como favorito
    const found = storedFavorites.some((fav: any) => fav.id === launch.id);
    setIsFavorite(found);
  }, [launch.id]);

  // Maneja añadir o quitar el lanzamiento de favoritos
  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (isFavorite) {
      // Si ya es favorito, lo elimina
      const updatedFavorites = storedFavorites.filter(
        (fav: any) => fav.id !== launch.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Si no es favorito, lo añade
      const newFavorite = {
        id: launch.id,
        name: launch.name,
        rocketName,
        launchSite,
        date_local: launch.date_local,
        success: launch.success,
      };
      localStorage.setItem(
        "favorites",
        JSON.stringify([...storedFavorites, newFavorite])
      );
      setIsFavorite(true);
    }
  };

  return (
    <div className="h-18 md:h-29 flex gap-3 bg-white/20 text-white pl-5 py-2 border border-white rounded-lg">
      {/* Columna izquierda: ícono de estado y botón de favorito */}
      <div className="flex flex-col justify-between">
        <div>
          {launch.success ? (
            <MdOutlineCheckCircleOutline className="text-green-500 text-3xl" />
          ) : (
            <MdOutlineCancel className="text-red-500 text-3xl" />
          )}
        </div>
        {/* Botón para agregar/quitar de favoritos */}
        <button onClick={toggleFavorite} className="cursor-pointer">
          {isFavorite ? (
            <MdFavoriteBorder className="text-red-500 text-3xl" />
          ) : (
            <MdFavoriteBorder className="text-white text-3xl opacity-50" />
          )}
        </button>
      </div>
      
      {/* Columna derecha: detalles del lanzamiento */}
      <div className="flex flex-col justify-between">
        <p className="text-base font-[var(--font-roboto)] font-bold w-25 truncate">
          {launch.name}
        </p>
        <p className="hidden md:block text-base font-[var(--font-roboto)] w-25 truncate">
          {launchSite}
        </p>
        <p className="hidden md:block text-base font-[var(--font-roboto)]">
          {rocketName}
        </p>
        <p className="text-base font-[var(--font-roboto)]">
          {new Date(launch.date_local).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default LaunchCard;
