import {
  MdOutlineCancel,
  MdOutlineCheckCircleOutline,
} from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

//Props que recibe el componente
type Props = {
  id: string;
  name: string;
  rocketName: string;
  launchSite: string;
  date_local: string;
  success: boolean;
  onRemove: (id: string) => void;
};

function FavoriteCard({
  id,
  name,
  rocketName,
  launchSite,
  date_local,
  success,
  onRemove,
}: Props) {
  return (
    <div className="h-29 flex gap-3 bg-white/20 text-white pl-5 py-2 border border-white rounded-lg">
    {/* Indicador de éxito o fallo */}
      <div className="flex flex-col justify-between">
        <div>
          {success ? (
            <MdOutlineCheckCircleOutline className="text-green-500 text-3xl" />
          ) : (
            <MdOutlineCancel className="text-red-500 text-3xl" />
          )}
        </div>
        {/* Botón para eliminar favorito */}
        <button onClick={() => onRemove(id)} className="cursor-pointer">
          <AiFillDelete className="text-white text-3xl" />
        </button>
      </div>

    {/* Detalles de la misión favorita */}
      <div className="flex flex-col justify-between">
        <p className="text-base font-[var(--font-roboto)] font-bold">
          {name}
        </p>
        <p className="text-base font-[var(--font-roboto)]">
          {launchSite}
        </p>
        <p className="text-base font-[var(--font-roboto)]">
          {rocketName}
        </p>
        <p className="text-base font-[var(--font-roboto)]">
          {new Date(date_local).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default FavoriteCard;
