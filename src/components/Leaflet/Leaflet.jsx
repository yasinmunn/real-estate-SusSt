import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import './leaflet.css'
const Leaflet = () => {
    return (
        <div>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                            A-1, Envanto HQ, Australia.
                            </Popup>
                        </Marker>
                        {/* Add more markers or layers here if needed */}
                </MapContainer>
        </div>
    );
};

export default Leaflet;