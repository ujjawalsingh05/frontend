"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";
import { StaffTable } from "@/components/features/admin/StaffTable";
import { AddStaffModal } from "@/components/features/admin/AddStaffModal";

export default function StaffManagement() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [staffList, setStaffList] = useState([
    { id: "DOC-10492", name: "Dr. John Doe", role: "Doctor", dept: "Cardiology", status: "Active" },
    { id: "NUR-40211", name: "Sarah Jenkins", role: "Nurse", dept: "Ward A", status: "Active" },
    { id: "PHM-9034", name: "Robert Fox", role: "Pharmacy", dept: "Inventory", status: "Inactive" },
  ]);

  const handleAddStaff = (newStaff: { name: string; role: string; dept: string }) => {
    const formattedStaff = {
      id: `${newStaff.role.substring(0,3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
      ...newStaff,
      status: "Active"
    };
    
    setStaffList([formattedStaff, ...staffList]);
    setShowAddModal(false);
  };

  const handleDeleteStaff = (id: string) => {
    setStaffList(staffList.filter(staff => staff.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
          <p className="text-sm text-slate-500">Manage employee credentials, roles, and system access.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center px-4 py-2 bg-brand-500 text-white rounded-lg text-sm font-semibold hover:bg-brand-600 transition-colors shadow-sm"
        >
          <UserPlus className="w-4 h-4 mr-2" /> Add New Staff
        </button>
      </div>

      {/* Feature Components */}
      <StaffTable staffList={staffList} onDelete={handleDeleteStaff} />
      
      {showAddModal && (
        <AddStaffModal 
          onClose={() => setShowAddModal(false)} 
          onAdd={handleAddStaff} 
        />
      )}
    </div>
  );
}