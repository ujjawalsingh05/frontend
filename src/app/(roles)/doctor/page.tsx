"use client";

import { useState } from "react";
import { PatientQueue } from "@/components/features/doctor/PatientQueue";
import { ConsultationPad } from "@/components/features/doctor/ConsultationPad";

export default function DoctorDashboard() {
  const [activePatient, setActivePatient] = useState<{ id: string; name: string } | null>({
    id: "AP-001",
    name: "Emily Rodriguez",
  });

  const [queue] = useState([
    { id: "AP-002", name: "Michael Chen", time: "09:30 AM", type: "New Patient" },
    { id: "AP-003", name: "Sarah Jenkins", time: "10:15 AM", type: "Consultation" },
  ]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Doctor Dashboard</h1>
        <p className="text-sm text-slate-500">Manage your consultations and patient records.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {activePatient ? (
            <ConsultationPad 
              patientName={activePatient.name} 
              patientId={activePatient.id} 
              onFinish={() => setActivePatient(null)} 
            />
          ) : (
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 text-center text-slate-500 flex flex-col items-center justify-center h-96">
              Select a patient from the queue to open their EMR and start the consultation.
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <PatientQueue 
            queue={queue} 
            onSelect={(id) => {
              const pt = queue.find(p => p.id === id);
              if (pt) setActivePatient(pt);
            }} 
          />
        </div>
      </div>
    </div>
  );
}