"use client";

import React, { memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";
import MapSearch from "./mapSearch";
import BuildingModal from "./buildingModal";

export type Poi = { key: string; location: google.maps.LatLngLiteral };

export default function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY || "",
  });

  const [center, setCenter] = React.useState({
    lat: 10.711086830282541,
    lng: 122.5661467511236,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  /* 
Marine Bldg - 10.708482592030737, 122.56411761580033
Canteen - 10.708261210022854, 122.5637863629822
Techno 1st - 10.708280243896665, 122.56337002795654
Civil Engr - 10.708302282920338, 122.56283036361148
CompE/IT bldg - 10.708179732114804, 122.56290680657006
Gymsassium - 10.709667090297387, 122.56334124960425
Small Grand Stand - 10.70923618757394, 122.56333990849973
Tennis Court - 10.70999389073096, 122.56375028648807
rts entrance - 10.707988122095264, 122.56412606712468
main bldg - 10.711086830282541, 122.5661467511236
  */

  const buildings: Poi[] = [
    {
      key: "Main Building",
      location: { lat: 10.711086830282541, lng: 122.5661467511236 },
    },
    {
      key: "Marine Building",
      location: {
        lat: 10.708482592030737,
        lng: 122.56411761580033,
      },
    },
    {
      key: "Canteen",
      location: {
        lat: 10.708261210022854,
        lng: 122.5637863629822,
      },
    },
    {
      key: "Techno 1st",
      location: {
        lat: 10.708280243896665,
        lng: 122.56337002795654,
      },
    },
    {
      key: "Civil Engr",
      location: {
        lat: 10.708302282920338,
        lng: 122.56283036361148,
      },
    },
    {
      key: "CompE/IT Bldg",
      location: {
        lat: 10.708179732114804,
        lng: 122.56290680657006,
      },
    },
    {
      key: "Gymnasium",
      location: {
        lat: 10.709667090297387,
        lng: 122.56334124960425,
      },
    },
    {
      key: "Small Grand Stand",
      location: {
        lat: 10.70923618757394,
        lng: 122.56333990849973,
      },
    },
    {
      key: "Tennis Court",
      location: {
        lat: 10.70999389073096,
        lng: 122.56375028648807,
      },
    },
    {
      key: "Arts Entrance",
      location: {
        lat: 10.707988122095264,
        lng: 122.56412606712468,
      },
    },
  ];

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "84.5vw",
        height: "100vh",
      }}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        styles: [
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          /*     {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          }, */
          /*     {
            featureType: "administrative.land_parcel",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          }, */
          /*          {
            featureType: "landscape.man_made",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          }, */
        ],
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        <MapSearch buildings={buildings} setCenter={setCenter} />

        {buildings.map((building) => (
          <BuildingModal key={building.key} building={building}>
            <Marker
              position={building.location}
              clickable={true}
              onClick={() => {
                if (map) {
                  map.panTo(building.location);
                }
                setCenter(building.location);
              }}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                scaledSize: new window.google.maps.Size(30, 30),
                anchor: new window.google.maps.Point(15, 30),
                labelOrigin: new window.google.maps.Point(15, -10),
              }}
              label={{
                text: building.key,
                color: "black",
                fontWeight: "bold",
              }}
            />
          </BuildingModal>
        ))}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export const MemoizedMapComponent = memo(MapComponent);
