"use client";

import { useState } from "react";
import { BedGrid } from "@/components/features/nurse/BedGrid";
import { VitalsModal } from "@/components/features/nurse/VitalsModal";

export default function NurseDashboard() {
  const [selectedBed, setSelectedBed] = useState<string | null>(null);
  const [beds] = useState([
    { id: "W1-B01", status: "Occupied", patient: "Emily Rodriguez" },
    { id: "W1-B02", status: "Available", patient: null },
    { id: "W1-B03", status: "Cleaning", patient: null },
    { id: "W1-B04", status: "Occupied", patient: "Michael Chen" },
  ]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Ward Management</h1>
        <p className="text-sm text-slate-500">Monitor bed occupancy and record patient vitals.</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">General Ward - 1st Floor</h2>
        <BedGrid beds={beds} onSelectBed={(id) => setSelectedBed(id)} />
      </div>

      {selectedBed && <VitalsModal bedId={selectedBed} onClose={() => setSelectedBed(null)} />}
    </div>
  );
}