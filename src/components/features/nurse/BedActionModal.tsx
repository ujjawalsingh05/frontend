"use client";

import { useState } from "react";
import { Activity, X, Save, UserPlus, Sparkles, AlertTriangle } from "lucide-react";
import { BedData } from "./BedGrid";

interface BedActionModalProps {
  bed: BedData;
  onClose: () => void;
}

export function BedActionModal({ bed, onClose }: BedActionModalProps) {
  // State for Occupied Form
  const [bp, setBp] = useState("120/80");
  const [temp, setTemp] = useState("98.6");
  const [hr, setHr] = useState("72");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Action completed for bed ${bed.id}`);
    onClose();
  };

  const isEmergency = bed.status === "EMERGENCY";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1A67]/60 backdrop-blur-sm">
      <div className={`w-full max-w-[440px] bg-[#FFFFFF] rounded-xl shadow-2xl border overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${isEmergency ? 'border-[#C61A4C]' : 'border-[#EAEAEA]'}`}>
        
        {/* ================= DYNAMIC HEADER ================= */}
        <div className={`px-6 py-5 border-b flex justify-between items-start ${isEmergency ? 'bg-[#C61A4C] border-[#C61A4C]' : 'bg-[#FFFFFF] border-[#EAEAEA]'}`}>
          <div className="flex gap-4 items-center">
            <div className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 border ${isEmergency ? 'bg-white/20 border-white/20' : 'bg-[#F4F0F8] border-[#EAEAEA]'}`}>
              {bed.status === "OCCUPIED" && <Activity className="w-5 h-5 text-[#1F1A67]" />}
              {bed.status === "AVAILABLE" && <UserPlus className="w-5 h-5 text-[#16A34A]" />}
              {bed.status === "CLEANING" && <Sparkles className="w-5 h-5 text-[#F59E0B]" />}
              {bed.status === "EMERGENCY" && <AlertTriangle className="w-5 h-5 text-white" />}
            </div>
            <div>
              <h2 className={`text-[18px] font-bold tracking-tight ${isEmergency ? 'text-white' : 'text-[#1F1A67]'}`}>
                {bed.status === "OCCUPIED" && "Record Vitals"}
                {bed.status === "AVAILABLE" && "Admit Patient"}
                {bed.status === "CLEANING" && "Cleaning Status"}
                {bed.status === "EMERGENCY" && "Emergency Protocol"}
              </h2>
              <p className={`text-[13px] font-semibold mt-0.5 ${isEmergency ? 'text-white/80' : 'text-[#6F6B7D]'}`}>
                Bed: <span className="uppercase tracking-wider">{bed.id}</span>
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className={`p-1.5 rounded-md transition-colors focus:outline-none ${isEmergency ? 'text-white hover:bg-white/20' : 'text-[#6F6B7D] hover:bg-[#F7F8FC] hover:text-[#C61A4C]'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ================= DYNAMIC BODY ================= */}
        <form onSubmit={handleSubmit} className="p-6">
          
          {/* VIEW: OCCUPIED (Vitals Form) */}
          {bed.status === "OCCUPIED" && (
            <div className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold text-[#6F6B7D] uppercase tracking-wider mb-1.5">Blood Pressure (mmHg)</label>
                <input type="text" required value={bp} onChange={(e) => setBp(e.target.value)} className="w-full px-4 py-2.5 bg-[#F7F8FC] border border-[#EAEAEA] rounded-md text-[14px] focus:border-[#1F1A67] focus:ring-1 focus:ring-[#1F1A67]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#6F6B7D] uppercase tracking-wider mb-1.5">Temperature (°F)</label>
                <input type="text" required value={temp} onChange={(e) => setTemp(e.target.value)} className="w-full px-4 py-2.5 bg-[#F7F8FC] border border-[#EAEAEA] rounded-md text-[14px] focus:border-[#1F1A67] focus:ring-1 focus:ring-[#1F1A67]" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#6F6B7D] uppercase tracking-wider mb-1.5">Heart Rate (BPM)</label>
                <input type="text" required value={hr} onChange={(e) => setHr(e.target.value)} className="w-full px-4 py-2.5 bg-[#F7F8FC] border border-[#EAEAEA] rounded-md text-[14px] focus:border-[#1F1A67] focus:ring-1 focus:ring-[#1F1A67]" />
              </div>
            </div>
          )}

          {/* VIEW: AVAILABLE (Admit Form) */}
          {bed.status === "AVAILABLE" && (
            <div className="space-y-5">
              <p className="text-sm text-[#2B2B2B]">This bed is sanitized and ready for a new admission.</p>
              <div>
                <label className="block text-[11px] font-bold text-[#6F6B7D] uppercase tracking-wider mb-1.5">Search Patient ID / Name</label>
                <input type="text" placeholder="e.g. AP-005 or John Doe" className="w-full px-4 py-2.5 bg-[#F7F8FC] border border-[#EAEAEA] rounded-md text-[14px] focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A]" />
              </div>
            </div>
          )}

          {/* VIEW: CLEANING (Status View) */}
          {bed.status === "CLEANING" && (
            <div className="py-4 text-center space-y-3">
              <div className="w-16 h-16 bg-[#FFFBEB] border border-[#F59E0B]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <h3 className="text-[#1F1A67] font-bold text-lg">Sanitation in Progress</h3>
              <p className="text-sm text-[#6F6B7D]">Housekeeping is currently servicing this bed. Estimated completion in 15 minutes.</p>
            </div>
          )}

          {/* VIEW: EMERGENCY (Action View) */}
          {bed.status === "EMERGENCY" && (
            <div className="py-2 text-center space-y-4">
              <div className="bg-[#FDF0F4] border border-[#C61A4C]/20 rounded-lg p-4 mb-2">
                <h3 className="text-[#C61A4C] font-bold text-lg mb-1">Code Blue Protocol</h3>
                <p className="text-sm text-[#2B2B2B] font-medium">Patient {bed.patient} requires immediate medical intervention.</p>
              </div>
            </div>
          )}

          {/* ================= DYNAMIC FOOTER ================= */}
          <div className="mt-8 flex items-center justify-end gap-3 pt-5 border-t border-[#EAEAEA]">
            <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-[#6F6B7D] bg-[#FFFFFF] border border-[#EAEAEA] rounded-md hover:bg-[#F7F8FC] hover:text-[#1F1A67] transition-colors focus:outline-none">
              {isEmergency ? 'Dismiss' : 'Cancel'}
            </button>
            
            {bed.status === "OCCUPIED" && (
              <button type="submit" className="px-5 py-2.5 text-sm font-medium text-[#FFFFFF] bg-[#1F1A67] hover:bg-[#3B3486] rounded-md flex items-center transition-colors">
                <Save className="w-4 h-4 mr-2" /> Save Vitals Log
              </button>
            )}
            {bed.status === "AVAILABLE" && (
              <button type="submit" className="px-5 py-2.5 text-sm font-medium text-[#FFFFFF] bg-[#16A34A] hover:bg-[#15803d] rounded-md transition-colors">
                Assign Patient
              </button>
            )}
            {bed.status === "CLEANING" && (
              <button type="submit" className="px-5 py-2.5 text-sm font-medium text-[#FFFFFF] bg-[#F59E0B] hover:bg-[#d97706] rounded-md transition-colors">
                Mark as Available
              </button>
            )}
            {bed.status === "EMERGENCY" && (
              <button type="submit" className="px-5 py-2.5 text-sm font-medium text-[#FFFFFF] bg-[#C61A4C] hover:bg-[#9f1239] rounded-md flex items-center transition-colors shadow-[0_4px_12px_rgba(198,26,76,0.3)]">
                <Activity className="w-4 h-4 mr-2" /> Log Intervention
              </button>
            )}
          </div>
        </form>

      </div>
    </div>
  );
}