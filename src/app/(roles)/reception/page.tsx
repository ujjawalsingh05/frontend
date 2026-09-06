"use client";

import { useState } from "react";
import { Search, Settings, Users, History, UserPlus, HelpCircle } from "lucide-react";

export default function ReceptionDashboard() {
  const [formData, setFormData] = useState({ name: "", age: "", gender: "Male", phone: "" });

  const recentRegistrations = [
    { initials: "JD", name: "Jane Doe", id: "OPD-998", time: "2 mins ago", color: "bg-blue-100 text-blue-700" },
    { initials: "RK", name: "Robert King", id: "OPD-997", time: "15 mins ago", color: "bg-yellow-100 text-yellow-700" },
    { initials: "AM", name: "Alice Miller", id: "OPD-996", time: "1 hour ago", color: "bg-slate-100 text-slate-700" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Top Header Bar */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Front Desk Portal</h1>
            <p className="text-xs text-slate-500">Walk-ins today: <span className="font-bold text-blue-600">14</span> | Emergency Admissions: <span className="font-bold text-red-500">02</span></p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input type="text" placeholder="Search Patient ID..." className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-64" />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"><Settings className="w-5 h-5" /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Registration Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 border border-blue-100">
              <UserPlus className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Register New Patient (OPD)</h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Mandatory Information Required</p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" value="John Doe" readOnly className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Age</label>
                <input type="text" value="32" readOnly className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Gender</label>
                <select className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                  <option>Male</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Phone Number</label>
              <input type="text" value="+91 98765 43210" readOnly className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <button type="button" className="flex-1 bg-[#1a365d] text-white py-3.5 rounded-xl font-bold flex justify-center items-center hover:bg-blue-900 transition-colors">
                <UserPlus className="w-4 h-4 mr-2" /> Complete Registration
              </button>
              <button type="button" className="px-8 py-3.5 border border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Sidebar Panels */}
        <div className="space-y-6">
          {/* Recent Registrations */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Recent Registrations</h3>
              <History className="w-4 h-4 text-blue-500" />
            </div>
            <div className="space-y-4">
              {recentRegistrations.map((reg, i) => (
                <div key={i} className="flex items-center space-x-4 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-slate-50/50">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${reg.color}`}>
                    {reg.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{reg.name}</div>
                    <div className="text-xs text-slate-500">{reg.id} • {reg.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Ticket Block */}
          <div className="bg-[#1a365d] rounded-2xl shadow-sm p-6 text-white relative overflow-hidden">
            <HelpCircle className="absolute -bottom-4 -right-4 w-32 h-32 text-blue-800 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Need Help?</h3>
              <p className="text-sm text-blue-200 mb-6 leading-relaxed">Contact IT support for troubleshooting bio-metric integration or printer issues.</p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-bold transition-colors">
                OPEN SUPPORT TICKET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}