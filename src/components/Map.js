import React, { useState } from 'react';
import ReactMap, { Marker } from 'react-map-gl';
import marker from '../assets/marker.svg';
import { features as cities } from '../assets/cities.json';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '50vh',
    latitude: 25,
    longitude: 30,
    zoom: 1.5,
  })
  
  return (
    <ReactMap
      {...viewport}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      mapStyle='mapbox://styles/min-huang/ckckc7jxu0ign1jp3x1lgdoh5'
      onViewportChange={viewport => setViewport(viewport)}
      maxZoom={3}
      minZoom={1.5}
    >
      {cities.map(({ geometry: { coordinates }}, index) => (
        <Marker key={index} longitude={coordinates[0]} latitude={coordinates[1]}>
          <img
            width='32'
            src={marker}
            alt='marker'
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </Marker>
      ))}
    </ReactMap>
  )
};

export default Map;