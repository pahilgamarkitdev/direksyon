"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { Poi } from "./mapComponent";
import { Card } from "@/components/ui/card";
import BuildingsContent from "@/components/buildings/mainBuildingContent";
import MainBuildingsContent from "@/components/buildings/mainBuildingContent";
import { Main } from "next/document";
import MarineBuildingsContent from "@/components/buildings/marineBuildingContent";
import TechnoBuildingsContent from "@/components/buildings/technoBuildingContext";
import CompEBuildingsContent from "@/components/buildings/compEBuildingContent";
import CeBuildingsContent from "@/components/buildings/ceBuildingContent";
import AtheleBuildingsContent from "@/components/buildings/atheleteBuilding";

export default function BuildingModal({
  children,
  building,
}: {
  children: React.ReactNode;
  building: Poi;
}) {
  const buildingNotYetImplemented = [
    "Small Grand Stand",
    "Gymnasium",
    "Tennis Court",
    "Canteen",
    "RTS Entrance",
  ];

  // if building key is not yet implemented dont open modal
  const handleOpen = () => {
    if (buildingNotYetImplemented.includes(building.key)) {
      return false;
    }
  };

  return (
    <>
      <Dialog open={handleOpen()}>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent
          className="max-w-[90vw] max-h-[90vh] min-h-[90vh] min-w-[90vw] overflow-auto flex flex-col"
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {building.key}
            </DialogTitle>
          </DialogHeader>

          <div>
            {building.key === "Main Building" && <MainBuildingsContent />}
            {building.key === "Marine Building" && <MarineBuildingsContent />}
            {building.key === "Techno Building" && <TechnoBuildingsContent />}
            {building.key === "CompE/IT Building" && <CompEBuildingsContent />}
            {building.key === "Civil Engr. Building" && <CeBuildingsContent />}
            {building.key === "Athlete Building" && <AtheleBuildingsContent />}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
