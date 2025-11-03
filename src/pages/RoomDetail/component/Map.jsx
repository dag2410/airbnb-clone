// component/Map.jsx

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useMemo } from "react";

const Map = ({ lat, lng, location }) => {
  const center = useMemo(() => ({ lat, lng }), [lat, lng]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    language: "vi",
    region: "VN",
    preventGoogleFontsLoading: true,
    version: "weekly",
  });

  if (!isLoaded) return <div>Đang tải bản đồ...</div>;

  return (
    <div>
      <div className="flex flex-col gap-3"></div>
      <div className="mx-auto h-96 w-full mt-5 rounded-2xl overflow-hidden">
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName="w-full h-full"
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;
