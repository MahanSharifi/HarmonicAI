'use client'


import React from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { env } from '~/env';

const containerStyle = {
    width: '800px',
    height: '800px'
};

const center = {
    lat: 43.4718664459, 
    lng: -80.5230112413
  };


function GoogleMapsComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const lat = -3.745
    const lng = -38.523
    const title = ' test laurier'
    const options =  {
        backgroundColor:'red',
        styles : [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }] 
            }
        ]
    } 

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={20}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={options}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <Marker
                position={center}
                title={title}>

                     <InfoWindow>
                        <h1 className="text-black">Eden Chan</h1>
                     </InfoWindow>
                </Marker>

            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMapsComponent)