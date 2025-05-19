import { type launchesData, type locationData } from "../../types";

type Props = {
    rockets: Record<string, string>;
    launches: launchesData[];
    launchpads: Record<string, locationData>;
}

function Launches({ launches, rockets, launchpads }: Props) {
  return (
    <div className="grid gap-4">
      {launches.map((launch) => {
        const rocketName = rockets[launch.rocket] || "Desconocido";
        const launchpad = launchpads[launch.launchpad];
        const launchSite = launchpad?.region || "Ubicación desconocida";

        return (
          <div key={launch.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{launch.name}</h2>
            <p>Fecha: {new Date(launch.date_local).toLocaleDateString()}</p>
            <p>Resultado: {launch.success ? "Éxito" : "Fallo"}</p>
            <p>{rocketName}</p>
            <p>{launchSite}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Launches;
