import classes from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from 'react-leaflet';

export default function Map({ readonly}) {
    return (
        <div className={classes.container}>
            <MapContainer
                className={classes.map}
                center={[42.12768, 24.77133]}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                zoom={15}
                dragging={!readonly}
                touchZoom={!readonly}
                doubleClickZoom={!readonly}
                scrollWheelZoom={false}
                boxZoom={!readonly}
                keyboard={!readonly}
                attributionControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[42.12768, 24.77133]}>
                    <Popup>
                    4000 Plovdiv <br /> 159 Osvobozhdenie Blvd
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );

}





