"use client";

import { Activity, Search, Filter, Settings } from "lucide-react";

export default function NurseDashboard() {
  const beds = [
    { id: "W1-B01", status: "OCCUPIED", patient: "Emily Rodriguez", info: "ADM: 2 DAYS AGO", color: "text-blue-600", dot: "bg-blue-500" },
    { id: "W1-B02", status: "AVAILABLE", patient: "NO PATIENT", info: "READY FOR CHECK-IN", color: "text-green-500", dot: "bg-green-500" },
    { id: "W1-B03", status: "CLEANING", patient: "—", info: "EST: 15M REMAINING", color: "text-orange-400", dot: "bg-orange-400" },
    { id: "W1-B04", status: "OCCUPIED", patient: "Michael Chen", info: "ADM: TODAY", color: "text-blue-600", dot: "bg-blue-500" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Occupancy Overview</h1>
            <p className="text-xs text-slate-500">Total Capacity: <span className="font-bold text-blue-600">42 Beds</span> | Currently In-use: <span className="font-bold text-orange-500">38</span></p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=1" alt="Nurse" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=2" alt="Nurse" />
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">+4</div>
          </div>
          <button className="px-6 py-2 bg-[#1a365d] text-white font-bold rounded-lg hover:bg-blue-900 text-sm flex items-center transition-colors">
            <Settings className="w-4 h-4 mr-2" /> Floor Config
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-blue-600 border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Occupied</p>
          <p className="text-4xl font-bold text-slate-900">38</p>
          <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-4"></div>
        </div>
        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-green-500 border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Available</p>
          <p className="text-4xl font-bold text-slate-900">03</p>
          <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-4"></div>
        </div>
        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-orange-400 border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Cleaning</p>
          <p className="text-4xl font-bold text-slate-900">01</p>
          <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-4"></div>
        </div>
        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-red-500 border border-slate-200 shadow-sm relative overflow-hidden">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Emergency Requests</p>
          <p className="text-4xl font-bold text-slate-900">0</p>
          <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-4"></div>
        </div>
      </div>

      {/* Floor Plan */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></div>
            <h2 className="text-xl font-bold text-slate-900">General Ward – 1st Floor</h2>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"><Search className="w-4 h-4" /></button>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"><Filter className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beds.map((bed, index) => (
            <div key={index} className="border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-200 transition-colors bg-slate-50/30">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bed.status === 'OCCUPIED' ? 'bg-blue-50 text-blue-600' : bed.status === 'AVAILABLE' ? 'bg-green-50 text-green-500' : 'bg-orange-50 text-orange-400'}`}>
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{bed.id}</h3>
              <div className="flex items-center justify-center space-x-1.5 mb-6">
                <span className={`w-1.5 h-1.5 rounded-full ${bed.dot}`}></span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${bed.color}`}>{bed.status}</span>
              </div>
              
              <div className="w-full border-t border-slate-100 pt-4">
                <p className={`text-sm font-bold ${bed.status === 'AVAILABLE' ? 'text-slate-300' : 'text-slate-900'}`}>{bed.patient}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{bed.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}