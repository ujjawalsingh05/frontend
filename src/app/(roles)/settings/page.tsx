"use client";

import { useState } from "react";
import { User, Lock, Bell, Palette, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "Current User",
    email: "user@mediflow.local",
    phone: "+91 00000 00000",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3s
    }, 800);
  };

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "security", label: "Security", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
        <p className="text-sm text-slate-500">Manage your profile, security, and application preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 bg-white border border-slate-200 rounded-xl shadow-sm p-2">
        
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 flex flex-col space-y-1 p-4 border-b md:border-b-0 md:border-r border-slate-100">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-slate-100 text-slate-900" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <tab.icon className={`w-4 h-4 mr-3 ${isActive ? "text-brand-600" : "text-slate-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 p-4 md:p-8">
          {activeTab === "personal" && (
            <div className="max-w-md">
              <h2 className="text-lg font-bold text-slate-800 mb-6">Personal Information</h2>
              
              <form onSubmit={handleSave} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    disabled // Simulated lock based on screenshot "Name changes must be requested..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-500 outline-none cursor-not-allowed" 
                  />
                  <p className="text-[10px] text-slate-400 mt-1.5">Name changes must be requested through HR.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-colors" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                    Contact Phone
                  </label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-colors" 
                  />
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button 
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-2.5 bg-brand-600 text-white font-semibold rounded-lg text-sm hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-50"
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </button>
                  
                  {showSuccess && (
                    <span className="flex items-center text-sm font-medium text-green-600 animate-in fade-in duration-300">
                      <CheckCircle2 className="w-4 h-4 mr-1.5" /> Profile updated
                    </span>
                  )}
                </div>
              </form>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Security Settings</h2>
              <p className="text-sm text-slate-500">Update your password and 2FA preferences here.</p>
              {/* Additional security forms would go here */}
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Notification Preferences</h2>
              <p className="text-sm text-slate-500">Manage email and push alerts for system events.</p>
            </div>
          )}

          {activeTab === "appearance" && (
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-4">Appearance</h2>
              <p className="text-sm text-slate-500">Toggle between light and dark themes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}