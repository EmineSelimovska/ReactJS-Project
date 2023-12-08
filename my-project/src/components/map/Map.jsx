import React, { useState, useEffect } from 'react';
import classes from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
} from 'react-leaflet';
import { toast } from 'react-toastify';
import * as L from 'leaflet';


export default function Map({ readonly, location, onChange }) {
    return (
             <div className={classes.container}>
      <MapContainer
        className={classes.map}
        center={[ 42.136097, 24.742168]}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        zoom={13}
        dragging={!readonly}
        touchZoom={!readonly}
        doubleClickZoom={!readonly}
        scrollWheelZoom={false}
        boxZoom={!readonly}
        keyboard={!readonly}
        attributionControl={false}
      >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[ 42.12768, 24.77133]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
            </MapContainer>
        </div>
    );

}


function FindButtonAndMarker({ readonly, location, onChange }) {
    const [position, setPosition] = useState(location);
  
    useEffect(() => {
      if (readonly) {
        map.setView(position, 13);
        return;
      }
      if (position) onChange(position);
    }, [position]);
  
    const map = useMapEvents({
      click(e) {
        !readonly && setPosition(e.latlng);
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 13);
      },
      locationerror(e) {
        toast.error(e.message);
      },
    });
  
    const markerIcon = new L.Icon({
      iconUrl: 'https://img.freepik.com/free-vector/location_53876-25530.jpg?q=10&h=200',
      iconSize: [25, 41],
      iconAnchor: [12.5, 41],
      popupAnchor: [0, -41],
    });
  
    return (
      <>
        {!readonly && (
          <button
            type="button"
            className={classes.find_location}
            onClick={() => map.locate()}
          >
            Find My Location
          </button>
        )}
  
        {position && (
          <Marker
            eventHandlers={{
              dragend: e => {
                setPosition(e.target.getLatLng());
              },
            }}
            position={position}
            draggable={!readonly}
            icon={markerIcon}
          >
            <Popup>Shipping Location</Popup>
          </Marker>
        )}
      </>
    );
  }


