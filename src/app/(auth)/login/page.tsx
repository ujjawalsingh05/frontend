"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("doctor");
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save a mock session token so AuthContext picks it up
    localStorage.setItem("hms_auth_token", "mock_jwt_token_123");
    localStorage.setItem("hms_user", JSON.stringify({ id: staffId || "DOC-001", name: "Staff Member", role }));

    setTimeout(() => {
      setLoading(false);
      // Directly push to the chosen role route
      router.push(`/${role}`);
    }, 400);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-3 border border-blue-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">MediFlow Portal</h1>
          <p className="text-sm text-slate-500 mt-1">Hospital Information & Staff Management System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
              Staff Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="doctor">Doctor / Clinician</option>
              <option value="nurse">Nurse / Ward Staff</option>
              <option value="reception">Reception / Front Desk</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="laboratory">Diagnostic Lab</option>
              <option value="admin">System Administrator</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
              Staff ID / Email
            </label>
            <input
              type="text"
              required
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
              placeholder="e.g. DOC-10492"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm transition-colors outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 shadow-sm cursor-pointer"
          >
            {loading ? "Authenticating..." : "Sign In to Portal"}
          </button>
        </form>
      </div>
    </div>
  );
}