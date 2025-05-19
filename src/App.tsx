import { useEffect, useState } from "react";
import { fetchLaunches } from "./services/LaunchesServices";
import { fetchRockets } from "./services/RocketsServices";
import { fetchLaunchpads } from "./services/LaunchpadsServices";
import { type filters, type launchesData, type locationData } from "./types";
import Filters from "./components/Modules/Filters";
import Launches from "./components/Modules/Launches";

function App() {
  const [launches, setLaunches] = useState<launchesData[]>([]);
  const [launchpads, setLaunchpads] = useState<Record<string, locationData>>(
    {}
  );
  const [rockets, setRockets] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<filters>({
    rocketId: "",
    result: "",
    year: "",
    mission: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const [launchArr, padsArr, rocketArr] = await Promise.all([
          fetchLaunches(),
          fetchLaunchpads(),
          fetchRockets(),
        ]);

        setLaunches(launchArr);

        const padMap: Record<string, locationData> = {};
        padsArr.forEach((p) => (padMap[p.id] = p));
        setLaunchpads(padMap);

        const rocketMap: Record<string, string> = {};
        rocketArr.forEach((r) => (rocketMap[r.id] = r.name));
        setRockets(rocketMap);
      } catch (e: any) {
        setError(e.message);
      }
    })();
  }, []);

  const filteredLaunches = launches.filter((launch) => {
    const matchRocket =
      filters.rocketId === "" || launch.rocket === filters.rocketId;

    const matchResult =
      filters.result === "" ||
      (filters.result === "success" ? launch.success : !launch.success);

    const matchYear =
      filters.year === "" ||
      new Date(launch.date_local).getFullYear().toString() === filters.year;

    const matchMission =
      filters.mission === "" ||
      launch.name.toLowerCase().includes(filters.mission.toLowerCase());

    return matchRocket && matchResult && matchYear && matchMission;
  });

  return (
    <>
      <h1 className="text-5xl text-cyan-700 mb-4">Lanzamientos SpaceX</h1>
      <div>
        {error && <p className="text-red-600">Error: {error}</p>}
        <Filters
          rockets={rockets}
          launches={launches}
          filters={filters}
          setFilters={setFilters}
        />
        <Launches
          rockets={rockets}
          launches={filteredLaunches}
          launchespads={launchpads}
        />
      </div>
    </>
  );
}

export default App;
