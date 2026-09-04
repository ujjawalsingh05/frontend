"use client";

import { useState } from "react";
import { Download, DollarSign, Users, Bed, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AdminDashboard() {
  const [isExporting, setIsExporting] = useState(false);

  const departments = [
    { name: "Cardiology", patients: 145, revenue: "₹4,50,000", trend: "+12%", positive: true },
    { name: "Orthopedics", patients: 98, revenue: "₹3,20,000", trend: "+5%", positive: true },
    { name: "General Medicine", patients: 312, revenue: "₹2,10,000", trend: "-2%", positive: false },
    { name: "Pediatrics", patients: 156, revenue: "₹1,80,000", trend: "+8%", positive: true },
  ];

  const activities = [
    { user: "Dr. Sarah Smith", action: "Completed 5 consultations", time: "10 mins ago" },
    { user: "Nurse Jenkins", action: "Updated vitals for Ward A", time: "25 mins ago" },
    { user: "Reception Desk", action: "Registered 12 new patients", time: "1 hour ago" },
    { user: "Pharmacy Sys", action: "Generated low stock alert", time: "2 hours ago" },
  ];

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      alert("Executive report exported successfully as PDF.");
      setIsExporting(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hospital Administration</h1>
          <p className="text-sm text-slate-500">Facility overview, financial metrics, and system management.</p>
        </div>
        <button 
          onClick={handleExport}
          disabled={isExporting}
          className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg text-sm hover:bg-slate-50 transition-colors shadow-sm flex items-center disabled:opacity-50"
        >
          <Download className="w-4 h-4 mr-2" /> {isExporting ? "Generating..." : "Export Report"}
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="text-green-600 bg-green-50 p-2 rounded-lg"><DollarSign className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-green-600"><ArrowUpRight className="w-3 h-3 mr-0.5" /> 8.4%</span>
          </div>
          <div className="text-sm font-semibold text-slate-500 mt-2">Today's Revenue</div>
          <div className="text-2xl font-bold text-slate-900">₹1,24,500</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="text-blue-600 bg-blue-50 p-2 rounded-lg"><Users className="w-5 h-5" /></div>
            <span className="flex items-center text-xs font-bold text-blue-600"><ArrowUpRight className="w-3 h-3 mr-0.5" /> 12%</span>
          </div>
          <div className="text-sm font-semibold text-slate-500 mt-2">Total OPD Footfall</div>
          <div className="text-2xl font-bold text-slate-900">482</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="text-purple-600 bg-purple-50 p-2 rounded-lg"><Bed className="w-5 h-5" /></div>
            <span className="text-xs font-semibold text-slate-400">Capacity: 200</span>
          </div>
          <div className="text-sm font-semibold text-slate-500 mt-2">Bed Occupancy Rate</div>
          <div className="text-2xl font-bold text-slate-900">78%</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <div className="text-orange-600 bg-orange-50 p-2 rounded-lg"><Activity className="w-5 h-5" /></div>
          </div>
          <div className="text-sm font-semibold text-slate-500 mt-2">Active Staff Online</div>
          <div className="text-2xl font-bold text-slate-900">124</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Performance */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50">
            <h2 className="text-sm font-bold text-slate-800">Department Performance (This Week)</h2>
          </div>
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="border-b border-slate-100 text-slate-400 uppercase text-xs font-semibold">
              <tr>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Patients Seen</th>
                <th className="px-4 py-3">Revenue Gen.</th>
                <th className="px-4 py-3 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {departments.map((dept, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-4 font-semibold text-slate-900">{dept.name}</td>
                  <td className="px-4 py-4">{dept.patients}</td>
                  <td className="px-4 py-4">{dept.revenue}</td>
                  <td className={`px-4 py-4 text-right font-bold ${dept.positive ? 'text-green-600' : 'text-red-500'}`}>
                    {dept.trend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* System Activity Feed */}
        <div className="lg:col-span-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h2 className="text-sm font-bold text-slate-800">System Activity</h2>
            <button className="text-xs font-semibold text-brand-600 hover:text-brand-700">View All</button>
          </div>
          <div className="divide-y divide-slate-100 p-4">
            {activities.map((log, i) => (
              <div key={i} className="py-3 first:pt-0 last:pb-0">
                <div className="text-sm font-bold text-slate-900">{log.user}</div>
                <div className="text-xs text-slate-600 mt-0.5">{log.action}</div>
                <div className="text-[10px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">{log.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}