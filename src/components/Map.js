import React, { useState, Fragment } from 'react';
import ReactMap, { Marker, Popup } from 'react-map-gl';
import marker from '../assets/marker.svg';
import { features as cities } from '../assets/cities.json';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '50vh',
    latitude: 28,
    longitude: 20,
    zoom: 1.5,
  });

  return (
    <ReactMap
      {...viewport}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      mapStyle='mapbox://styles/min-huang/ckckc7jxu0ign1jp3x1lgdoh5'
      onViewportChange={viewport => setViewport(viewport)}
      maxZoom={3.5}
      minZoom={1.5}
    >
      {cities.map(
        ({ geometry: { coordinates }, properties: { name } }, index) => (
          <Fragment key={index}>
            <Marker longitude={coordinates[0]} latitude={coordinates[1]}>
              <img width='32' src={marker} alt='marker' className='marker' />
            </Marker>
            {name === 'Delft' && (
              <Popup
                longitude={coordinates[0]}
                latitude={coordinates[1]}
                anchor='top'
                closeButton={false}
              >
                <div className='popup-text'>Current</div>
                <div>
                  {name}
                  <span className='flag' role='img' aria-label='NL'>
                    🇳🇱
                  </span>
                </div>
              </Popup>
            )}
          </Fragment>
        )
      )}
      <div className='section-center legend-container'>
        <img width='24' src={marker} alt='legend indicator' />
        <h4 className='legend-text'>My Footprint</h4>
      </div>
    </ReactMap>
  )
};

export default Map;