"use client";

import { useState } from "react";
// Added FileText and CheckCircle to the import list below
import { Search, Filter, Box, FileText, CheckCircle } from "lucide-react"; 
import { InventoryTable } from "../../../components/features/pharmacy/InventoryTable";
import { DispensingQueue } from "../../../components/features/pharmacy/DispensingQueue";

export default function PharmacyDashboard() {
  const [activeTab, setActiveTab] = useState<"queue" | "inventory">("queue");
  
  const [queue, setQueue] = useState([
    { id: "RX-1042", time: "10:15 AM", patient: "Michael Chen", items: 3, doctor: "Dr. John Doe", status: "Pending" },
    { id: "RX-1043", time: "10:30 AM", patient: "Sarah Jenkins", items: 1, doctor: "Dr. Sarah Smith", status: "Pending" },
    { id: "RX-1039", time: "09:45 AM", patient: "James Wilson", items: 4, doctor: "Dr. John Doe", status: "Ready for Pickup" },
  ]);

  const [inventory] = useState([
    { id: "MED-01", name: "Amoxicillin 500mg", category: "Antibiotic", stock: 450 },
    { id: "MED-02", name: "Paracetamol 650mg", category: "Analgesic", stock: 1200 },
    { id: "MED-03", name: "Azithromycin 250mg", category: "Antibiotic", stock: 8 },
  ]);

  // Action to change Rx status
  const handleProcessRx = (id: string) => {
    setQueue(queue.map(rx => rx.id === id ? { ...rx, status: "Ready for Pickup" } : rx));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pharmacy & Inventory</h1>
          <p className="text-sm text-slate-500">Manage prescription dispensing and drug stock levels.</p>
        </div>
        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg text-sm hover:bg-slate-50 transition-colors shadow-sm flex items-center">
          <Box className="w-4 h-4 mr-2" /> Supplier Orders
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-center space-x-4">
          <div className="text-blue-600 bg-blue-50 p-3 rounded-lg"><FileText className="w-6 h-6" /></div>
          <div><p className="text-sm font-semibold text-slate-500">Pending Prescriptions</p><p className="text-2xl font-bold text-slate-900">12</p></div>
        </div>
        <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm flex items-center space-x-4">
          <div className="text-red-600 bg-red-50 p-3 rounded-lg"><Box className="w-6 h-6" /></div>
          <div><p className="text-sm font-semibold text-red-600">Low Stock Alerts</p><p className="text-2xl font-bold text-slate-900">8</p></div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex items-center space-x-4">
          <div className="text-green-600 bg-green-50 p-3 rounded-lg"><CheckCircle className="w-6 h-6" /></div>
          <div><p className="text-sm font-semibold text-slate-500">Dispensed Today</p><p className="text-2xl font-bold text-slate-900">145</p></div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {/* Tab Navigation & Search */}
        <div className="border-b border-slate-200 px-4 py-3 flex justify-between items-center bg-slate-50">
          <div className="flex space-x-6">
            <button 
              onClick={() => setActiveTab("queue")}
              className={`text-sm font-bold pb-3 border-b-2 transition-colors ${activeTab === 'queue' ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            >
              Dispensing Queue
            </button>
            <button 
              onClick={() => setActiveTab("inventory")}
              className={`text-sm font-bold pb-3 border-b-2 transition-colors ${activeTab === 'inventory' ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            >
              Inventory Management
            </button>
          </div>
          <div className="flex space-x-2 pb-1">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input type="text" placeholder="Search Rx or Patient..." className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <button className="p-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50"><Filter className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Dynamic Rendering based on active tab */}
        {activeTab === "queue" ? (
          <DispensingQueue queue={queue} onProcess={handleProcessRx} />
        ) : (
          <InventoryTable inventory={inventory} />
        )}
      </div>
    </div>
  );
}