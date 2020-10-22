import React, { useState, Fragment } from 'react';
import ReactMap, { Marker, Popup } from 'react-map-gl';
import { features as cities } from '../assets/cities.json';
import '../css/mapbox.css';

const PopupCurrent = ({ coordinate, city }) => (
  <Popup
    longitude={coordinate[0]}
    latitude={coordinate[1]}
    closeButton={false}
    anchor='bottom-right'
  >
    <div className='popup-text'>Current</div>
    <div>
      {city}
      <span className='flag' role='img' aria-label='NL'>
        🇳🇱
      </span>
    </div>
  </Popup>
);

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '60vh',
    latitude: 32,
    longitude: 20,
    zoom: 1.6,
  });

  const CURRENT = 'Delft';

  return (
    <ReactMap
      {...viewport}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      mapStyle='mapbox://styles/min-huang/ckckc7jxu0ign1jp3x1lgdoh5'
      onViewportChange={viewport => setViewport(viewport)}
      maxZoom={3.5}
      minZoom={1.6}
    >
      {cities.map(
        ({ geometry: { coordinates }, properties: { name } }, index) => (
          <Fragment key={index}>
            <Marker longitude={coordinates[0]} latitude={coordinates[1]}>
              <div className={name === CURRENT ? 'marker-current' : 'marker' } />
            </Marker>

            {name === CURRENT && (
              <PopupCurrent coordinate={coordinates} city={CURRENT} />
            )}
          </Fragment>
        )
      )}
      <div className='section-center legend-container'>
        <div className='marker' />
        <h4 className='legend-text'>My Footprint</h4>
      </div>
    </ReactMap>
  )
};

export default Map;