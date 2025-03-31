import React, { memo } from "react";
import { Poi } from "./mapComponent";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

export default function MapSearch({
  buildings,
  setCenter,
}: {
  buildings: Poi[];
  setCenter: React.Dispatch<React.SetStateAction<google.maps.LatLngLiteral>>;
}) {
  const [filteredBuildings, setFilteredBuildings] = React.useState<Poi[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="absolute top-24 left-4 z-10 flex flex-col gap-2 w-full">
      <div className="relative w-full">
        <SearchIcon className="absolute top-2 left-2 text-gray-500" />
        <Input
          type="text"
          placeholder="Search for a building..."
          className=" p-2 border rounded-md bg-white shadow-md w-1/3 pl-10"
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const query = e.target.value.toLowerCase();
            const filtered = buildings.filter((building) =>
              building.key.toLowerCase().includes(query)
            );

            if (query === "") {
              setFilteredBuildings([]);
              return;
            }

            setFilteredBuildings(filtered);
            setSearchQuery(query);
          }}
        />
      </div>

      <div className="relative w-full h-full flex flex-col flex-wrap gap-2">
        {filteredBuildings.map((building) => (
          <Button
            variant={"outline"}
            key={building.key}
            className="p-2 border rounded-md shadow-md w-fit"
            onClick={() => {
              setCenter(building.location);
              setFilteredBuildings([]);
              setSearchQuery("");
            }}
          >
            {building.key}
          </Button>
        ))}
      </div>
    </div>
  );
}

memo(MapSearch);
