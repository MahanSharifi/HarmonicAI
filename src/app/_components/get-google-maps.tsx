'use client'


import React from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { env } from '~/env';
import { Button } from '~/components/ui/button';
import { listenNowAlbums } from '../music/data/albums';
const containerStyle = {
    width: '100%',
    height: '100%'
};


 
const center = {
    lat: -80.5230112413,
    lng: 43.4718664459,
};

function SpotifyMaps() {
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

    const options = {
        backgroundColor: 'red',
        styles: [
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
            // zoom={1}
            // panTo={position}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={options}
        >
            {listenNowAlbums.map((item, index) => (
                <Marker
                    key={index}
                    position={item.position}
                    title={item.name}
                >
                    <InfoWindow>
                        <>
                        <h1 className="text-black">{item.locationName}</h1>
                        <iframe  src={`https://open.spotify.com/embed/playlist/${item.playlistID}?utm_source=generator`} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </>
                    </InfoWindow>
                </Marker>
            ))}

            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(SpotifyMaps)