import { type launchesData, type locationData } from "../../types";
import { useState, useEffect, useRef } from "react";
import LaunchCard from "../Ui/LaunchCard";

//Props que recibe el componente
type Props = {
  rockets: Record<string, string>;
  launches: launchesData[];
  launchpads: Record<string, locationData>;
};

function Launches({ launches, rockets, launchpads }: Props) {
  // Estado para controlar cuántos lanzamientos se muestran (lazy loading)
  const [visibleCount, setVisibleCount] = useState(5);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reinicia la cantidad visible cuando cambian los lanzamientos
  useEffect(() => {
    setVisibleCount(5);
  }, [launches]);

  // Detecta cuando el usuario hace scroll para cargar más elemento
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setVisibleCount((prev) => Math.min(prev + 5, launches.length));
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [launches.length]);

  return (
    <div
      ref={containerRef}
      className="lg:w-1/2 h-36 md:h-1/2 lg:h-auto overflow-y-auto scrollbar-hide grid gap-4"
    >
      {launches.slice(0, visibleCount).map((launch) => {
        const rocketName = rockets[launch.rocket] || "Desconocido";
        const launchpad = launchpads[launch.launchpad];
        const launchSite = launchpad?.region || "Ubicación desconocida";

        return (
          <LaunchCard
            key={launch.id}
            launch={launch}
            rocketName={rocketName}
            launchSite={launchSite}
          />
        );
      })}
    </div>
  );
}

export default Launches;
