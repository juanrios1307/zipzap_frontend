import React,{useState,useEffect} from 'react'
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    InfoWindow
} from '@react-google-maps/api';




function AppGoogleMapsLugar(props) {


    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerMap, setMarkerMap] = useState({});
    const [zoom, setZoom] = useState(13);
    const [clickedLatLng, setClickedLatLng] = useState(null);
    const [myPlace, setMyPlace] = useState(null);

    const [infoOpen, setInfoOpen] = useState(false);


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD0PdWCCBRGk1Ogv9iLZL_mEl1IGEHzRsU"
    })

    const {lugar} =props

    useEffect(()=>{

        setClickedLatLng(lugar)

        const place = {
            id:'Mi establecimiento',
            pos: {lat: lugar.lat, lng: lugar.lng}
        }

        setMyPlace(place)

        console.log(lugar)

    },[])

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


    return isLoaded ? (

            <GoogleMap
                onLoad={onLoad}

                // Save the user's map click position
                //onClick={e => getClick(e.latLng.toJSON())}
                center={lugar}
                zoom={zoom}
                mapContainerStyle={{
                    height: "100%",
                    width: "100%"
                }}

                onUnmount={onUnmount}
            >

                {lugar && myPlace && (
                    <Marker
                        key={"Establecimiento"}
                        position={lugar}
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

export default React.memo(AppGoogleMapsLugar)