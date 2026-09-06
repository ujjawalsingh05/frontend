"use client";

import { Search, Edit, Trash2 } from "lucide-react";

interface StaffTableProps {
  staffList: any[];
  onDelete: (id: string) => void;
}

export function StaffTable({ staffList, onDelete }: StaffTableProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
      <div className="mb-6">
        <div className="relative w-full max-w-xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search staff by ID or Name..." 
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      <table className="w-full text-left">
        <thead className="text-[10px] font-bold text-blue-600 uppercase tracking-wider border-b border-slate-100">
          <tr>
            <th className="px-2 py-4">STAFF ID</th>
            <th className="px-2 py-4">EMPLOYEE DETAILS</th>
            <th className="px-2 py-4">ACCESS ROLE</th>
            <th className="px-2 py-4">STATUS</th>
            <th className="px-2 py-4 text-right">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {staffList.map((staff, index) => (
            <tr key={staff.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-2 py-5 font-bold text-slate-900 text-sm">{staff.id}</td>
              <td className="px-2 py-5">
                <div className="flex items-center space-x-3">
                  {/* Dynamic placeholder avatar generation based on index to ensure they look distinct */}
                  <img 
                    src={`https://i.pravatar.cc/150?u=${staff.id}`} 
                    alt={staff.name} 
                    className="w-10 h-10 rounded-full border border-slate-200 bg-slate-100" 
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{staff.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{staff.dept}</div>
                  </div>
                </div>
              </td>
              <td className="px-2 py-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-slate-600">
                  <span className="mr-1.5 opacity-50">📎</span> {staff.role}
                </span>
              </td>
              <td className="px-2 py-5">
                <span className={`inline-flex items-center font-bold text-xs ${staff.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-2 ${staff.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  {staff.status}
                </span>
              </td>
              <td className="px-2 py-5 text-right">
                <div className="flex items-center justify-end space-x-3">
                  <button className="text-slate-400 hover:text-blue-600 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onDelete(staff.id)}
                    className="text-slate-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-between items-center text-xs text-slate-400">
        <span>Total {staffList.length} members found</span>
        <div className="flex space-x-1">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-50 text-slate-400">&lt;</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white font-bold shadow-sm">1</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-50 text-slate-400">&gt;</button>
        </div>
      </div>
    </div>
  );
}