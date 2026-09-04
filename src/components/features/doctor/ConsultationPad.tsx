"use client";

import { useState } from "react";
import { Stethoscope, CheckCircle } from "lucide-react";

interface ConsultationPadProps {
  patientName: string;
  patientId: string;
  onFinish: () => void;
}

export function ConsultationPad({ patientName, patientId, onFinish }: ConsultationPadProps) {
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Consultation saved for ${patientName}`);
    onFinish();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center">
            <Stethoscope className="w-5 h-5 mr-2 text-brand-600" /> Electronic Medical Record (EMR)
          </h2>
          <p className="text-xs text-slate-500">Patient: <span className="font-semibold text-slate-700">{patientName}</span> ({patientId})</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Clinical Diagnosis & Notes</label>
          <textarea 
            rows={3}
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            placeholder="Enter symptoms, observations, and diagnosis..."
            className="w-full p-3 bg-white border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Prescription & Medications</label>
          <textarea 
            rows={3}
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
            placeholder="e.g. Paracetamol 650mg - 1 tab twice a day for 5 days"
            className="w-full p-3 bg-white border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <button type="submit" className="w-full py-2.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm flex items-center justify-center">
          <CheckCircle className="w-4 h-4 mr-2" /> Complete Consultation & Discharge
        </button>
      </form>
    </div>
  );
}