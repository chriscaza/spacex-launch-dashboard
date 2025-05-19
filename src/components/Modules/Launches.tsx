import { type launchesData, type locationData } from "../../types";
import LaunchCard from "../Ui/LaunchCard";

type Props = {
    rockets: Record<string, string>;
    launches: launchesData[];
    launchpads: Record<string, locationData>;
}

function Launches({ launches, rockets, launchpads }: Props) {
  return (
    <div className="w-1/2 overflow-y-auto scrollbar-hide grid gap-4">
      {launches.map((launch) => {
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
