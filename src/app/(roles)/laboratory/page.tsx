"use client";

import { useState } from "react";
import { Search, Activity, TestTube, AlertTriangle, CheckCircle2 } from "lucide-react";
import { LabQueue } from "@/components/features/laboratory/LabQueue";

export default function LaboratoryDashboard() {
  const [activeTab, setActiveTab] = useState<"pending" | "published">("pending");
  
  const [tests, setTests] = useState([
    { id: "REQ-9012", patient: "Michael Chen", doctor: "Dr. Doe", type: "Complete Blood Count (CBC)", category: "Pathology", status: "Sample Required", urgent: false },
    { id: "REQ-9013", patient: "James Wilson", doctor: "Dr. Doe", type: "Lipid Panel", category: "Pathology", status: "Processing", urgent: false },
    { id: "REQ-9014", patient: "Sarah Jenkins", doctor: "Dr. Smith", type: "Chest X-Ray", category: "Radiology", status: "Result Entry", urgent: true },
  ]);

  const [published, setPublished] = useState<any[]>([]);

  // Advance the state machine for test processing
  const handleAction = (id: string, currentStatus: string) => {
    if (currentStatus === "Result Entry") {
      // Move to published tab
      const completedTest = tests.find(t => t.id === id);
      setTests(tests.filter(t => t.id !== id));
      if (completedTest) setPublished([{ ...completedTest, status: "Published" }, ...published]);
    } else {
      // Advance status within pending queue
      setTests(tests.map(test => {
        if (test.id === id) {
          const nextStatus = test.status === "Sample Required" ? "Processing" : "Result Entry";
          return { ...test, status: nextStatus };
        }
        return test;
      }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Diagnostic Laboratory</h1>
        <p className="text-sm text-slate-500">Manage sample collection, test processing, and result publication.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center text-slate-500 mb-2"><TestTube className="w-4 h-4 mr-2" /> <span className="text-xs font-semibold uppercase tracking-wider">Samples Needed</span></div>
          <div className="text-2xl font-bold text-slate-900">18</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center text-blue-600 mb-2"><Activity className="w-4 h-4 mr-2" /> <span className="text-xs font-semibold uppercase tracking-wider">Processing</span></div>
          <div className="text-2xl font-bold text-slate-900">24</div>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-center text-red-600 mb-2"><AlertTriangle className="w-4 h-4 mr-2" /> <span className="text-xs font-semibold uppercase tracking-wider">Urgent Requests</span></div>
          <div className="text-2xl font-bold text-red-700">5</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-center text-green-600 mb-2"><CheckCircle2 className="w-4 h-4 mr-2" /> <span className="text-xs font-semibold uppercase tracking-wider">Completed (Today)</span></div>
          <div className="text-2xl font-bold text-slate-900">86</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {/* Tab Navigation */}
        <div className="border-b border-slate-200 px-4 py-3 flex justify-between items-center bg-slate-50">
          <div className="flex space-x-6">
            <button onClick={() => setActiveTab("pending")} className={`text-sm font-bold pb-3 border-b-2 transition-colors ${activeTab === 'pending' ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-500'}`}>
              Pending & Processing
            </button>
            <button onClick={() => setActiveTab("published")} className={`text-sm font-bold pb-3 border-b-2 transition-colors ${activeTab === 'published' ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-500'}`}>
              Published Results
            </button>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input type="text" placeholder="Search ID, Patient or Test..." className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
        </div>

        {activeTab === "pending" ? (
          <LabQueue tests={tests} onAction={handleAction} />
        ) : (
          <div className="p-8 text-center text-slate-500">
            {published.length === 0 ? "No results published yet in this session." : `Showing ${published.length} published records.`}
          </div>
        )}
      </div>
    </div>
  );
}