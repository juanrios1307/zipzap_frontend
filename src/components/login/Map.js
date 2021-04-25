import React,{useState} from 'react'
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    InfoWindow
} from '@react-google-maps/api';

const containerStyle = {
    width: '300px',
    height: '150px'
};

const center ={
    lat: 6.227,
    lng: -75.58
}

function AppGoogleMaps() {


    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    //const [center, setCenter] = useState({ lat: 6.227, lng: -75.58 });
    const [zoom, setZoom] = useState(5);
    const [clickedLatLng, setClickedLatLng] = useState(null);
    const [myPlace, setMyPlace] = useState(null);

    const [infoOpen, setInfoOpen] = useState(false);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD0PdWCCBRGk1Ogv9iLZL_mEl1IGEHzRsU"
    })

    const [map, setMap] = React.useState(null)



    // We have to create a mapping of our places to actual Marker objects
    const markerLoadHandler = (marker, place) => {
        return setMarkerMap(prevState => {
            return { ...prevState, [place.id]: marker };
        });
    };

    const markerClickHandler = (event, place) => {
        // Remember which place was clicked
        setSelectedPlace(place);

        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
            setInfoOpen(false);
        }

        setInfoOpen(true);

        // If you want to zoom in a little on marker click
        if (zoom < 13) {
            setZoom(13);
        }

        // if you want to center the selected Marker
        //setCenter(place.pos)
    };

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();

        map.fitBounds(bounds);

    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const getClick=(longlat)=>{
        console.log(longlat)
        setClickedLatLng(longlat)

        const place = {
            id:'Mi establecimiento',
            pos: {lat: longlat.lat, lng: longlat.lng}
        }

        setMyPlace(place)

        var long=longlat.lng
        var lat = longlat.lat

        localStorage.setItem('long',long)
        localStorage.setItem('lat',lat)

    }

    return isLoaded ? (

            <GoogleMap
                mapContainerStyle={containerStyle}
                onLoad={onLoad}

                // Save the user's map click position
                onClick={e => getClick(e.latLng.toJSON())}
                center={center}
                zoom={zoom}
                mapContainerStyle={{
                    height: "70vh",
                    width: "100%"
                }}

                onUnmount={onUnmount}
            >

                {clickedLatLng && myPlace && (
                    <Marker
                        key={"Establecimiento"}
                        position={clickedLatLng}
                        onLoad={marker => markerLoadHandler(marker, myPlace)}
                        onClick={event => markerClickHandler(event, myPlace)}
                        // Not required, but if you want a custom icon:
                        icon={{
                            path:
                                "M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z",
                            fillColor: "#FF0000",
                            fillOpacity: 1.0,
                            strokeWeight: 0,
                            scale: 1.25
                        }}
                    />
                )}

                {infoOpen && selectedPlace && (
                    <InfoWindow
                        anchor={markerMap[selectedPlace.id]}
                        onCloseClick={() => setInfoOpen(false)}
                    >
                        <div>
                            <h3>{selectedPlace.id}</h3>
                            <div>This is your info window content</div>
                        </div>
                    </InfoWindow>
                )}

            </GoogleMap>

    ) : <></>
}

export default React.memo(AppGoogleMaps)