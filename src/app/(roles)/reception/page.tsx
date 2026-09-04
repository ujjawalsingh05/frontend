"use client";

import { PatientRegistrationForm } from "@/components/features/reception/PatientRegistrationForm";

export default function ReceptionDashboard() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Front Desk / Reception</h1>
        <p className="text-sm text-slate-500">Register new walk-in patients and manage outpatient queues.</p>
      </div>

      <PatientRegistrationForm />
    </div>
  );
}