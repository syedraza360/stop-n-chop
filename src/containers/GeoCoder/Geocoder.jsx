import React, { useState } from "react";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { Marker, useControl } from "react-map-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import profileImage from "../../assets/images/profileImage.jpg";
import Geocode from "react-geocode";
import MarkerIcon from "../../assets/images/marker.png";

const style = {
  backgrondColor: "red",
};

const Geocoder = () => {
  const [viewport, setViewport] = useState({
    lat: "",
    lng: "",
  });

  const mapToken = process.env.REACT_APP_MAPBOX_TOKEN;
  const ctrl = new MapboxGeocoder({
    accessToken: mapToken,
    marker: false,
    collapsed: false,
    render: function (item) {
      // extract the item's maki icon or use a default
      const maki = item.properties.maki || "marker";
      return `<div class='mapboxgl-ctrl-geocoder--input'>
      <img class='geocoder-dropdown-icon' src='https://unpkg.com/@mapbox/maki@6.1.0/icons/${maki}-15.svg'>
      <span class='geocoder-dropdown-text'>
      ${item.text}
      </span>
      </div>`;
    },
  });

  useControl(() => ctrl);
  ctrl.on("result", (e) => {
    const coords = e.result.geometry.coordinates;
    setViewport({ ...viewport, lng: coords[0], lat: coords[1] });
  });

  return (
    <Marker
      latitude={viewport.lat}
      longitude={viewport.lng}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <img
        src={MarkerIcon}
        alt="pin"
        height="50px"
        width="50px"
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <p>location</p>
    </Marker>
  );
};

export default Geocoder;
