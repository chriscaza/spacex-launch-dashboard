import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 20.659698,
  lng: -103.349609
};

function Maps() {
  return (
    <div className="rounded-xl overflow-hidden h-full">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center}/>
            </GoogleMap>
        </LoadScript>
    </div>
  );
};

export default Maps;
