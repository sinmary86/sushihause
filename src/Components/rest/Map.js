import React from "react";
import "../../styles/Map.css";

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Map of Germany"
        src="https://www.google.com/maps?q=Germany&output=embed"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
