"use client";

import { TestTube, Search, Filter } from "lucide-react";

export default function LaboratoryDashboard() {
  const tests = [
    { id: "REQ-9012", patient: "Michael Chen", doctor: "REQ: DR. DOE", details: "Complete Blood Count (CBC)", category: "Pathology", status: "SAMPLE REQUIRED", btnLabel: "COLLECT SAMPLE", btnClass: "bg-[#1a365d] text-white hover:bg-blue-900", urgent: false },
    { id: "REQ-9013", patient: "James Wilson", doctor: "REQ: DR. DOE", details: "Lipid Panel", category: "Pathology", status: "PROCESSING", btnLabel: "MARK READY", btnClass: "bg-[#1a365d] text-white hover:bg-blue-900", urgent: false },
    { id: "REQ-9014", patient: "Sarah Jenkins", doctor: "REQ: DR. SMITH", details: "Chest X-Ray", category: "Radiology", status: "RESULT ENTRY", btnLabel: "ENTER DATA", btnClass: "bg-[#1a365d] text-white hover:bg-blue-900", urgent: true },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <TestTube className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Diagnostic Laboratory</h1>
            <p className="text-xs text-slate-500">Manage sample collection, test processing, and result publication.</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input type="text" placeholder="Search ID, Patient or Test..." className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-64" />
          </div>
          <button className="px-6 py-2 bg-[#1a365d] text-white font-bold rounded-lg hover:bg-blue-900 text-sm flex items-center">
             + New Sample Collection
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Samples Needed</p>
          <p className="text-4xl font-bold text-slate-900">18</p>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4"></div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Processing</p>
          <p className="text-4xl font-bold text-slate-900">24</p>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4"></div>
        </div>
        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-red-500 border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Urgent Requests</p>
          <p className="text-4xl font-bold text-slate-900">05</p>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4"></div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Completed (Today)</p>
          <p className="text-4xl font-bold text-slate-900">86</p>
          <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4"></div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <div className="flex space-x-8">
            <button className="pb-4 border-b-2 border-blue-600 text-blue-600 text-sm font-bold -mb-6">Pending & Processing</button>
            <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-slate-600 text-sm font-bold -mb-6">Published Results</button>
          </div>
          <div className="flex space-x-2">
            <button className="p-1.5 border border-slate-200 rounded text-slate-400 hover:bg-slate-50"><Filter className="w-4 h-4" /></button>
            <button className="p-1.5 border border-slate-200 rounded text-slate-400 hover:bg-slate-50"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg></button>
          </div>
        </div>

        <table className="w-full text-left">
          <thead className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">REQ ID</th>
              <th className="px-6 py-4">PATIENT / DOCTOR</th>
              <th className="px-6 py-4">TEST DETAILS</th>
              <th className="px-6 py-4">STATUS</th>
              <th className="px-6 py-4 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tests.map((test, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-5">
                  <div className="font-bold text-slate-900 text-sm">{test.id}</div>
                  {test.urgent && <div className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded inline-block mt-1 uppercase tracking-wider">Urgent</div>}
                </td>
                <td className="px-6 py-5">
                  <div className="font-bold text-slate-900 text-sm">{test.patient}</div>
                  <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">{test.doctor}</div>
                </td>
                <td className="px-6 py-5">
                  <div className="font-bold text-slate-900 text-sm">{test.details}</div>
                  <div className="text-xs text-slate-400 mt-1">{test.category}</div>
                </td>
                <td className="px-6 py-5">
                  <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${test.status === 'SAMPLE REQUIRED' ? 'bg-orange-50 text-orange-600' : test.status === 'PROCESSING' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                    {test.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className={`px-6 py-2 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors ${test.btnClass}`}>
                    {test.btnLabel}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}