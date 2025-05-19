import { type launchesData } from "../../types";
import {
  MdFavoriteBorder,
  MdOutlineCancel,
  MdOutlineCheckCircleOutline,
} from "react-icons/md";

type Props = {
  launch: launchesData;
  rocketName: string;
  launchSite: string;
};

function LaunchCard({ launch, rocketName, launchSite }: Props) {
  return (
    <div className="w-full flex gap-3 bg-white/20 text-white pl-5 py-2 border border-white rounded-lg">

      <div className="flex flex-col justify-between">
        <div>
          {launch.success ? (<MdOutlineCheckCircleOutline className="text-green-500 text-3xl" />) : (<MdOutlineCancel className="text-red-500 text-3xl" />)}
        </div>
        <div>
          <MdFavoriteBorder className="text-white text-3xl" />
        </div>
      </div>

      <div>
        <p className="text-base font-[var(--font-roboto)] font-bold mb-1 w-35 truncate">{launch.name}</p>
        <p className="text-base font-[var(--font-roboto)] mb-1 w-35 truncate">{launchSite}</p>
        <p className="text-base font-[var(--font-roboto)] mb-1">{rocketName}</p>
        <p className="text-base font-[var(--font-roboto)] mb-1">{new Date(launch.date_local).toLocaleDateString()}</p>
      </div>

    </div>
  );
}

export default LaunchCard;
