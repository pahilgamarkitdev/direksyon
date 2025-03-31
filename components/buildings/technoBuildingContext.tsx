"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";
import firstFloor from "@/assets/buildings/technoBuilding/1.png";
import secondFloor from "@/assets/buildings/technoBuilding/2.png";

export default function TechnoBuildingsContent() {
  return (
    <div className="flex flex-col w-full h-full">
      <Tabs defaultValue="1" className="w-full h-full">
        <TabsList className="z-30">
          <TabsTrigger value="1" className="z-50">
            1st Floor
          </TabsTrigger>
          <TabsTrigger value="2" className="z-50">
            2nd Floor
          </TabsTrigger>
        </TabsList>

        <TabsContent value="1" className="w-full h-full z-0">
          <Image
            src={firstFloor}
            alt="1st Floor"
            fill
            className="object-contain"
          />
        </TabsContent>
        <TabsContent value="2" className="w-full h-full z-0">
          <Image
            src={secondFloor}
            alt="2nd Floor"
            fill
            className="object-contain"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
