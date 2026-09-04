"use client";

import { useState } from "react";
import { Activity, X } from "lucide-react";

interface VitalsModalProps {
  bedId: string;
  onClose: () => void;
}

export function VitalsModal({ bedId, onClose }: VitalsModalProps) {
  const [bp, setBp] = useState("120/80");
  const [temp, setTemp] = useState("98.6");
  const [hr, setHr] = useState("72");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Vitals updated successfully for bed ${bedId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-brand-600" /> Record Vitals ({bedId})
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Blood Pressure (mmHg)</label>
            <input type="text" value={bp} onChange={e => setBp(e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Temperature (°F)</label>
            <input type="text" value={temp} onChange={e => setTemp(e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Heart Rate (BPM)</label>
            <input type="text" value={hr} onChange={e => setHr(e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <button type="submit" className="w-full py-2.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors mt-2">
            Save Vitals Log
          </button>
        </form>
      </div>
    </div>
  );
}