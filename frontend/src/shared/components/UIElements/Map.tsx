import {useEffect, useRef, useState} from "react";
import "./Map.css";
import {Status, Wrapper} from "@googlemaps/react-wrapper";

const render = (status: Status) => {
    return <h1>{status}</h1>;
};

const Map = (props: any) => {

    const mapRef = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    const {center, zoom} = props;

    useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {
                center: center,
                zoom: zoom
            }));
            new window.google.maps.Marker({
                position: center,
                map: map
            });
        }
    }, [mapRef, map, center, zoom]);

    return (
        <div ref={mapRef} id="map" className={`map ${props.className}`} style={props.style}>{props.children}</div>
    )
}

const MapWrapper = (props: any) => {
    return (
        <Wrapper apiKey={"AIzaSyC4JMLgMI1uuMikFWFPkiw1MXWtMgkpOFI"} render={render}>
            <Map {...props}/>
        </Wrapper>
    )
}

export default MapWrapper;
