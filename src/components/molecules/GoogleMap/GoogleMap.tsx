import GoogleMapReact from 'google-map-react';
import { nanoid } from 'nanoid';
import { ReactElement } from 'react';

import Marker from '@components/molecules/GoogleMap/Marker';

import MapStyles from './theme.json';

export type MapCoordinates = {
    lat: number;
    lng: number;
};

interface GoogleMapProps {
    mapCenter: MapCoordinates;
    zoom: number;
    markers: MapCoordinates[];
}

const GoogleMap = ({ mapCenter, zoom, markers }: GoogleMapProps): ReactElement | null => {
    if (typeof window === 'undefined') return null;

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <GoogleMapReact
            options={{
                styles: MapStyles,
            }}
            defaultCenter={mapCenter}
            zoom={zoom}
            bootstrapURLKeys={{ key: 'AIzaSyAD2W21_Yp74w3nr0oELbxn_kVipY5H300' }}
        >
            {markers.map((marker) => (
                <Marker key={nanoid()} {...marker} />
            ))}
        </GoogleMapReact>
    );
};

export default GoogleMap;
