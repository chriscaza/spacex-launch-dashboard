import { useEffect, useState } from "react"
import { fetchLaunches } from "./services/LaunchesServices";
import { fetchRockets } from "./services/RocketsServices";
import { fetchLaunchpads } from "./services/LaunchpadsServices";
import { type launchesData, type locationData } from "./types";

function App() {

  const[launches, setLaunches] = useState<launchesData[]>([]);
  const[launchpads, setLaunchpads] = useState<Record<string, locationData>>({});
  const[rockets, setRockets] = useState<Record<string, string>>({});
  const[error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {

        const [lArr, padsArr, rArr] = await Promise.all([
          fetchLaunches(),
          fetchLaunchpads(),
          fetchRockets(),
        ]);

        setLaunches(lArr);

        const padMap: Record<string, locationData> = {};
        padsArr.forEach(p => (padMap[p.id] = p));
        setLaunchpads(padMap);

        const rocketMap: Record<string, string> = {};
        rArr.forEach(r => (rocketMap[r.id] = r.name));
        setRockets(rocketMap);

      } catch (e: any) {
        setError(e.message);
      }
    })();
  },[])
  
  if(error) { return <h1>Error al cargar datos: {error}</h1>}

  return (
    <>
    <h1 className='text-5xl text-cyan-700 mb-4'>Lanzamientos SpaceX</h1>
      <div>
        {launches.map((launch) => {
          const pad = launchpads[launch.launchpad];
          const rocketName = rockets[launch.rocket];

          return (
            <div key={launch.id}>
              <p className="text-xl font-bold">{launch.name}</p>
              <p>Fecha: {new Date(launch.date_local).toLocaleString()}</p>
              <p>¿Éxito?: {launch.success ? "Sí" : "No"}</p>
              <p>Cohete: {rocketName ?? "Cargando nombre del cohete..."}</p>
              {pad ? (
                <>
                  <p>Región: {pad.region}</p>
                  <p>Latitud: {pad.latitude}</p>
                  <p>Longitud: {pad.longitude}</p>
                </>
              ) : (
                <p className="text-gray-500">Cargando info del launchpad...</p>
              )}
              
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
