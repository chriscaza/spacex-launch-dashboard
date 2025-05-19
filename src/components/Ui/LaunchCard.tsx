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
    <div className="w-full flex gap-5 bg-white/20 text-white pl-6 py-3 border border-white rounded-lg">

      <div className="flex flex-col justify-between">
        <div>
          {launch.success ? (<MdOutlineCheckCircleOutline className="text-green-500 text-4xl" />) : (<MdOutlineCancel className="text-red-500 text-4xl" />)}
        </div>
        <div>
          <MdFavoriteBorder className="text-white text-4xl" />
        </div>
      </div>

      <div>
        <p className="text-xl font-[var(--font-roboto)] font-bold mb-1">{launch.name}</p>
        <p className="text-xl font-[var(--font-roboto)] font-normal mb-1">{launchSite}</p>
        <p className="text-xl font-[var(--font-roboto)] font-normal mb-1">{rocketName}</p>
        <p className="text-xl font-[var(--font-roboto)] font-normal mb-1">{new Date(launch.date_local).toLocaleDateString()}</p>
      </div>

    </div>
  );
}

export default LaunchCard;
