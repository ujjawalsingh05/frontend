"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";

export function PatientRegistrationForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Successfully registered patient: ${name}`);
    setName("");
    setAge("");
    setPhone("");
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4 flex items-center">
        <UserPlus className="w-5 h-5 mr-2 text-brand-600" /> Register New Patient (OPD)
      </h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Full Name</label>
          <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Age</label>
            <input type="number" required value={age} onChange={e => setAge(e.target.value)} placeholder="32" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Gender</label>
            <select value={gender} onChange={e => setGender(e.target.value)} className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Phone Number</label>
          <input type="tel" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 98765 43210" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500" />
        </div>
        <button type="submit" className="w-full py-2.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm">
          Register & Generate UHID
        </button>
      </form>
    </div>
  );
}