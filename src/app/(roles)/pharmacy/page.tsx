"use client";

import { Package, Download, Search, Clock } from "lucide-react";

export default function PharmacyDashboard() {
  const queue = [
    { id: "RX-1042", time: "10:15 AM", patient: "Michael Chen", items: "3 Items • Priority: Normal", doctor: "Dr. John Doe", status: "PENDING", buttonClass: "bg-[#1a365d] text-white hover:bg-blue-900" },
    { id: "RX-1043", time: "10:30 AM", patient: "Sarah Jenkins", items: "1 Item • Priority: Urgent", doctor: "Dr. Sarah Smith", status: "PENDING", buttonClass: "bg-[#1a365d] text-white hover:bg-blue-900" },
    { id: "RX-1039", time: "09:45 AM", patient: "James Wilson", items: "4 Items • Priority: Normal", doctor: "Dr. John Doe", status: "READY FOR PICKUP", buttonClass: "bg-[#1a365d] text-white hover:bg-blue-900" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">Pharmacy & Inventory</h1>
            <p className="text-xs text-slate-500">Managing prescription dispensing and drug stock levels.</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-slate-200 text-slate-600 font-bold rounded-lg text-sm hover:bg-slate-50 flex items-center">
            <Download className="w-4 h-4 mr-2" /> Export Logs
          </button>
          <button className="px-6 py-2 bg-[#1a365d] text-white font-bold rounded-lg hover:bg-blue-900 text-sm flex items-center">
             + New Supplier Order
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><Package className="w-6 h-6" /></div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Pending Prescriptions</p>
            <p className="text-3xl font-bold text-slate-900">12</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-orange-500 border border-slate-200 shadow-sm flex items-center space-x-4 relative overflow-hidden">
          <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center"><div className="font-bold text-xl">!</div></div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Low Stock Alerts</p>
            <p className="text-3xl font-bold text-slate-900">08</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-50 text-green-500 rounded-xl flex items-center justify-center"><div className="font-bold text-xl">✓</div></div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Dispensed Today</p>
            <p className="text-3xl font-bold text-slate-900">145</p>
          </div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center">
          <div className="flex space-x-8">
            <button className="pb-4 border-b-2 border-blue-600 text-blue-600 text-sm font-bold -mb-6">Dispensing Queue</button>
            <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-slate-600 text-sm font-bold -mb-6">Inventory Management</button>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input type="text" placeholder="Search Rx or Patient..." className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-64" />
          </div>
        </div>

        <table className="w-full text-left">
          <thead className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">RX ID / TIME</th>
              <th className="px-6 py-4">PATIENT INFO</th>
              <th className="px-6 py-4">PRESCRIBED BY</th>
              <th className="px-6 py-4">STATUS</th>
              <th className="px-6 py-4 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {queue.map((rx, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-5">
                  <div className="font-bold text-slate-900 text-sm">{rx.id}</div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center"><Clock className="w-3 h-3 mr-1" />{rx.time}</div>
                </td>
                <td className="px-6 py-5">
                  <div className="font-bold text-slate-900 text-sm">{rx.patient}</div>
                  <div className="text-[10px] font-bold text-slate-500 mt-1">{rx.items}</div>
                </td>
                <td className="px-6 py-5 font-bold text-slate-600 text-sm">{rx.doctor}</td>
                <td className="px-6 py-5">
                  <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${rx.status === 'READY FOR PICKUP' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                    {rx.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className={`px-6 py-2 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors ${rx.buttonClass}`}>
                    Process Rx
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