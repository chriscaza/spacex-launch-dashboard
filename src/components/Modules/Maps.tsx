import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

//Datos de cada plataforma de lanzamiento
type LocationData = {
  id: string;
  region: string;
  latitude: number;
  longitude: number;
};

// Props que recibe el compoennte maps
type Props = {
  launchpads: LocationData[];
};

//Estilo del contentedor del mapa
const containerStyle = {
  width: "100%",
  height: "100%",
};

//Coordenadas del centro inicial del mapa
const center = {
  lat: 20.659698,
  lng: -103.349609,
};

function Maps({ launchpads }: Props) {
  return (
    <div className="rounded-xl overflow-hidden h-full">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
          {/* MArcadores para cada plataforma */}
          {launchpads.map(({ id, latitude, longitude }) => (
            <Marker key={id} position={{ lat: latitude, lng: longitude }} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Maps;
