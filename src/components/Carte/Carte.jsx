import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './Carte.scss'

function MyMap() {
  return (
    <div className="map">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -1.804300514694114,
          latitude:  48.103001973670374,
          zoom: 11.5,
        }}
        mapStyle="mapbox://styles/nburd01/cl9mj3zhl00dy14mq5lbzivih"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>
  );
}
export default MyMap;