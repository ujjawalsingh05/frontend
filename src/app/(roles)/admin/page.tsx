"use client";

import { Building2, Download, UserPlus, DollarSign, Users, Bed, Settings, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AdminDashboard() {
  const departments = [
    { name: "Cardiology", patients: 145, revenue: "₹4,50,000", trend: "+12%", positive: true },
    { name: "Orthopedics", patients: 98, revenue: "₹3,20,000", trend: "+5%", positive: true },
    { name: "General Medicine", patients: 312, revenue: "₹2,10,000", trend: "-2%", positive: false },
    { name: "Pediatrics", patients: 156, revenue: "₹1,80,000", trend: "+8%", positive: true },
  ];

  const activities = [
    { user: "Dr. Sarah Smith", action: "Completed 5 consultations", time: "10 mins ago", color: "bg-blue-500" },
    { user: "Nurse Jenkins", action: "Updated vitals for Ward A", time: "25 mins ago", color: "bg-green-500" },
    { user: "Reception Desk", action: "Registered 12 new patients", time: "1 hour ago", color: "bg-orange-400" },
    { user: "Pharmacy Sys", action: "Generated low stock alert", time: "2 hours ago", color: "bg-red-500" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Building2 className="w-5 h-5"/>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Hospital Administration</h1>
            <p className="text-xs text-slate-500">Facility overview, financial metrics, and system management.</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-slate-200 text-slate-600 font-bold rounded-lg text-sm hover:bg-slate-50 flex items-center">
            <Download className="w-4 h-4 mr-2"/> Export Report
          </button>
          <button className="px-6 py-2 bg-[#1a365d] text-white font-bold rounded-lg hover:bg-blue-900 text-sm flex items-center">
             <UserPlus className="w-4 h-4 mr-2"/> Add Staff
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <div className="w-8 h-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center"><DollarSign className="w-4 h-4"/></div>
            <span className="flex items-center text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase"><ArrowUpRight className="w-3 h-3 mr-0.5"/> 8.4%</span>
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-4">Today's Revenue</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">₹1,24,500</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><Users className="w-4 h-4"/></div>
            <span className="flex items-center text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase"><ArrowUpRight className="w-3 h-3 mr-0.5"/> 12%</span>
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-4">Total OPD Footfall</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">482</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center"><Bed className="w-4 h-4"/></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Capacity: 200</span>
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-4">Bed Occupancy Rate</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">78%</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center"><Settings className="w-4 h-4"/></div>
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-4">Active Staff Online</p>
          <p className="text-3xl font-bold text-slate-900 mt-1">124</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Performance */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <div className="flex items-center mb-6">
            <div className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></div>
            <h2 className="text-lg font-bold text-slate-900">Department Performance (This Week)</h2>
          </div>
          
          <table className="w-full text-left">
            <thead className="text-[10px] font-bold text-blue-600 uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-2 py-4">DEPARTMENT</th>
                <th className="px-2 py-4">PATIENTS SEEN</th>
                <th className="px-2 py-4">REVENUE GEN.</th>
                <th className="px-2 py-4 text-right">TREND</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {departments.map((dept, i) => (
                <tr key={i}>
                  <td className="px-2 py-5 font-bold text-slate-900 text-sm">{dept.name}</td>
                  <td className="px-2 py-5 text-sm text-slate-600">{dept.patients}</td>
                  <td className="px-2 py-5 font-bold text-slate-900 text-sm">{dept.revenue}</td>
                  <td className={`px-2 py-5 text-right font-bold text-sm ${dept.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {dept.trend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* System Activity Feed */}
        <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">System Activity</h2>
            <button className="text-[10px] font-bold text-blue-600 uppercase hover:text-blue-700">View All</button>
          </div>
          
          <div className="relative pl-3 space-y-6">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-100"></div>
            {activities.map((log, i) => (
              <div key={i} className="relative flex items-start space-x-4">
                <div className={`w-2.5 h-2.5 rounded-full ${log.color} mt-1.5 ring-4 ring-white z-10`}></div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{log.user}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{log.action}</div>
                  <div className="text-[10px] font-bold text-slate-400 mt-1">{log.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}