"use client";

import { useState } from "react";
import { ArrowLeft, Save, Activity, FileText, Pill, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ConsultationPage({ params }: { params: { patientId: string } }) {
  const [activeTab, setActiveTab] = useState("notes");

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Top Navigation & Patient Header */}
      <div className="flex items-center justify-between">
        <Link href="/doctor" className="flex items-center text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Queue
        </Link>
        <button className="flex items-center px-4 py-2 bg-brand-500 text-white text-sm font-semibold rounded-lg hover:bg-brand-600 transition-colors">
          <Save className="w-4 h-4 mr-2" />
          Save & Complete
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Michael Chen</h1>
          <p className="text-sm text-slate-500">ID: {params.patientId} • Male • 42 yrs • Blood Group: O+</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-red-50 text-red-700 rounded-lg border border-red-100 flex items-center text-sm font-medium">
            <AlertCircle className="w-4 h-4 mr-2" />
            Allergic to Penicillin
          </div>
        </div>
      </div>

      {/* Vitals Summary Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "BP", value: "120/80 mmHg", status: "Normal" },
          { label: "Heart Rate", value: "82 bpm", status: "Normal" },
          { label: "Temp", value: "98.6 °F", status: "Normal" },
          { label: "SpO2", value: "98%", status: "Normal" },
        ].map((vital) => (
          <div key={vital.label} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{vital.label}</p>
            <p className="text-lg font-bold text-slate-900 mt-1">{vital.value}</p>
          </div>
        ))}
      </div>

      {/* Main Clinical Workbench */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* Vertical Tabs */}
        <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
          {[
            { id: "notes", icon: FileText, label: "Clinical Notes (SOAP)" },
            { id: "rx", icon: Pill, label: "Prescription (Rx)" },
            { id: "history", icon: Activity, label: "Past History" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-4 text-sm font-medium border-b border-slate-200 transition-colors ${
                activeTab === tab.id 
                  ? "bg-white text-brand-600 border-l-4 border-l-brand-600" 
                  : "text-slate-600 hover:bg-slate-100 border-l-4 border-l-transparent"
              }`}
            >
              <tab.icon className="w-5 h-5 mr-3" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 p-6 bg-white">
          {activeTab === "notes" && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">Clinical Notes</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Chief Complaint (Subjective)</label>
                  <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Patient reports mild chest pain starting yesterday..." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Observations (Objective)</label>
                  <textarea rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Patient appears stable. Normal heart sounds..." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Diagnosis (Assessment)</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="e.g. Acid Reflux (GERD)" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "rx" && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">E-Prescription</h2>
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Medication</label>
                  <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Search drug database..." />
                </div>
                <div className="w-32">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Dosage</label>
                  <input type="text" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="e.g. 500mg" />
                </div>
                <div className="w-40">
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Frequency</label>
                  <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
                    <option>1-0-1 (BID)</option>
                    <option>1-1-1 (TID)</option>
                    <option>1-0-0 (OD)</option>
                  </select>
                </div>
                <button className="px-4 py-2 bg-brand-50 text-brand-600 font-semibold rounded-lg border border-brand-200 hover:bg-brand-100">
                  + Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}