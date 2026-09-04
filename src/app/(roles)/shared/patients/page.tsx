"use client";

import { useState } from "react";
// Added 'Activity' to the import list below
import { Search, Filter, Edit, FileText, Activity } from "lucide-react";

export default function PatientDirectory() {
  const [search, setSearch] = useState("");

  const allPatients = [
    { id: "UHID-9921", name: "Emily Rodriguez", age: 34, gender: "F", blood: "O+", notes: "Appendectomy Recovery", lastVisit: "2026-09-01" },
    { id: "UHID-8472", name: "Sarah Jenkins", age: 58, gender: "F", blood: "A-", notes: "Hypertension", lastVisit: "2026-09-03" },
    { id: "UHID-1039", name: "Michael Chen", age: 42, gender: "M", blood: "B+", notes: "GERD", lastVisit: "2026-09-03" },
  ];

  // Functional search filter
  const filteredPatients = allPatients.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Patient Directory</h1>
        <p className="text-sm text-slate-500">Centralized database of all registered patients.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {/* Top Controls */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between bg-slate-50">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by UHID or Name..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg text-sm hover:bg-slate-50 transition-colors flex items-center shadow-sm">
            <Filter className="w-4 h-4 mr-2" /> Filters
          </button>
        </div>

        {/* Directory Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="border-b border-slate-200 text-slate-400 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">UHID</th>
                <th className="px-6 py-4">Patient Profile</th>
                <th className="px-6 py-4">Medical Details</th>
                <th className="px-6 py-4">Last Visit</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{patient.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">{patient.name}</div>
                    <div className="text-xs text-slate-500">{patient.age} yrs • {patient.gender}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-red-600">{patient.blood}</div>
                    <div className="text-xs text-slate-500">{patient.notes}</div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">{patient.lastVisit}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded"><Activity className="w-4 h-4" /></button>
                      <button className="p-1.5 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded"><FileText className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredPatients.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">No patients found matching "{search}".</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}