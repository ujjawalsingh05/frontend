"use client";

import { Clock, Edit, ArrowUpRight, Users } from "lucide-react";

export default function DoctorDashboard() {
  const queue = [
    { id: "AP-002", name: "Michael Chen", type: "NEW PATIENT", time: "09:30 AM", img: "https://i.pravatar.cc/150?u=michael" },
    { id: "AP-003", name: "Sarah Jenkins", type: "FOLLOW-UP", time: "10:15 AM", img: "https://i.pravatar.cc/150?u=sarahj" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      
      {/* Top Session Bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Edit className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Current Session</h1>
            <p className="text-xs text-slate-500">Patient: <span className="font-bold text-blue-600">Emily Rodriguez (AP-001)</span></p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-slate-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-bold">04:40 AM</span>
          </div>
          <button className="px-6 py-2 bg-[#1a365d] text-white font-bold rounded-lg hover:bg-blue-900 text-sm transition-colors">
            Finish Session
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: EMR Area */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 w-16 h-full bg-blue-50 transform skew-x-12 translate-x-4"></div>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1 relative z-10">Total Consults</p>
              <p className="text-3xl font-bold text-slate-900 relative z-10">24</p>
              <p className="text-xs font-bold text-green-500 mt-1 flex items-center relative z-10"><ArrowUpRight className="w-3 h-3 mr-0.5" /> 12% today</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 w-16 h-full bg-slate-50 transform skew-x-12 translate-x-4"></div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 relative z-10">Avg. Wait Time</p>
              <p className="text-3xl font-bold text-slate-900 relative z-10">14 min</p>
              <p className="text-xs text-slate-400 mt-1 relative z-10">Hospital avg: 18m</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 w-16 h-full bg-blue-50 transform skew-x-12 translate-x-4"></div>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1 relative z-10">Pending Sync</p>
              <p className="text-3xl font-bold text-slate-900 relative z-10">3</p>
              <p className="text-xs text-blue-400 mt-1 relative z-10">Auto-sync active</p>
            </div>
          </div>

          {/* Clinical Pad */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                  <Edit className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Examination & Notes</h2>
              </div>
              <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider rounded-full border border-green-200">
                Autosaved 2m ago
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Clinical Diagnosis & Observations</label>
                <textarea 
                  rows={4} 
                  placeholder="Start typing symptoms and diagnostic findings..."
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Prescription & Dosage Details</label>
                <textarea 
                  rows={3} 
                  placeholder="e.g. Amoxicillin 500mg - 1 capsule every 8 hours for 7 days"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>
              <div className="w-full border-2 border-dashed border-slate-200 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-50 transition-colors">
                <p className="text-xs font-medium text-slate-400 flex items-center justify-center">
                  <span className="w-4 h-4 mr-2 border border-slate-300 rounded flex items-center justify-center text-[10px]">📎</span>
                  Drop medical reports or images here (optional)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Queues & Alerts */}
        <div className="space-y-6">
          
          {/* Today's Queue */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center">
                <Users className="w-4 h-4 text-blue-500 mr-2" /> Today's Queue
              </h3>
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              {queue.map((patient, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
                  <div className="flex items-center space-x-3 mb-3">
                    <img src={patient.img} alt={patient.name} className="w-10 h-10 rounded-full border border-slate-200" />
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{patient.name}</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{patient.type} • {patient.id}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-white border border-blue-100 text-blue-600 rounded-lg text-xs font-bold">
                      {patient.time}
                    </span>
                    <button className="px-4 py-1.5 bg-[#1a365d] text-white rounded-lg text-xs font-bold flex items-center">
                      <Edit className="w-3 h-3 mr-1.5" /> Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 py-3 bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-colors">
              View Complete Schedule
            </button>
          </div>

          {/* Laboratory Alerts */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Laboratory Alerts</h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5"></div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Critical: Blood Report</div>
                  <div className="text-xs text-slate-500 mt-0.5">Patient: Robert Miller (RM-99)</div>
                </div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Normal: Chest X-Ray</div>
                  <div className="text-xs text-slate-500 mt-0.5">Patient: Sarah Jenkins (AP-003)</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}