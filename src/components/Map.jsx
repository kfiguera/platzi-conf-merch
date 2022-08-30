import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: data.lat ?? 10.4683918,
    lng: data.lng ?? -66.8903658,
  };
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGlE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={5} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
