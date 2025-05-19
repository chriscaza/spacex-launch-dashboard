import { type launchesData, type locationData } from "../../types";

type Props = {
    rockets: Record<string, string>;
    launches: launchesData[];
    launchespads: Record<string, locationData>;
}

function Launches({ launches }: Props) {
  return (
    <div className="grid gap-4">
      {launches.map((launch) => (
        <div key={launch.id} className="p-4 border rounded shadow">
          <h2 className="text-lg font-semibold">{launch.name}</h2>
          <p>Fecha: {new Date(launch.date_local).toLocaleDateString()}</p>
          <p>Resultado: {launch.success ? "Éxito" : "Fallo"}</p>
        </div>
      ))}
    </div>
  );
}

export default Launches;
