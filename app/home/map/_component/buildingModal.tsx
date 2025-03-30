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

export default function BuildingModal({
  children,
  building,
}: {
  children: React.ReactNode;
  building: Poi;
}) {
  return (
    <>
      <Dialog>
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

          {building.key === "Main Building" && <MainBuildingsContent />}
        </DialogContent>
      </Dialog>
    </>
  );
}
