import { useEffect, useState } from "react";
import { fetchLaunches } from "../services/LaunchesServices";
import { fetchRockets } from "../services/RocketsServices";
import { fetchLaunchpads } from "../services/LaunchpadsServices";
import { type filters, type launchesData, type locationData } from "../types";
import Filters from "../components/Modules/Filters";
import Launches from "../components/Modules/Launches";
import Maps from "../components/Modules/Maps";

function Dashboard() {
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
    <div className="flex flex-col md:flex-row gap-5 md:gap-11 lg:gap-7 px-11 py-5 md:py-7 lg:p-9 flex-grow h-60">
      <div className="flex flex-col lg:flex-row md:w-2/5 lg:w-2/4 md:pr-11 lg:pr-7 gap-5 border-b border-white md:border-b-0 pb-4 md:pb-0 lg:gap-7 md:border-r md:border-white">
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
          launchpads={launchpads}
        />
      </div>

      <div className="md:w-3/5 lg:w-2/4 h-full">
        <Maps launchpads={Object.values(launchpads)} />
      </div>
    </div>
  );
}

export default Dashboard;
