import { useState } from "react";
import { X } from "lucide-react";

interface AddStaffModalProps {
  onClose: () => void;
  onAdd: (staff: { name: string; role: string; dept: string }) => void;
}

export function AddStaffModal({ onClose, onAdd }: AddStaffModalProps) {
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("Doctor");
  const [newDept, setNewDept] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name: newName, role: newRole, dept: newDept });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900">Add New Staff Member</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Full Name</label>
            <input required type="text" value={newName} onChange={e => setNewName(e.target.value)} className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Role</label>
            <select value={newRole} onChange={e => setNewRole(e.target.value)} className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none">
              <option>Doctor</option>
              <option>Nurse</option>
              <option>Laboratory</option>
              <option>Pharmacy</option>
              <option>Reception</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Department</label>
            <input required type="text" value={newDept} onChange={e => setNewDept(e.target.value)} placeholder="e.g. Cardiology" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none" />
          </div>
          <button type="submit" className="w-full py-2 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors mt-2">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}