"use client";

import { useState } from "react";
import { User, Lock, Bell, Palette, Mail, Phone } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "security", label: "Security", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Palette },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your profile, security, and application preferences.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col md:flex-row overflow-hidden min-h-[500px]">
        
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-100 p-6 space-y-2 bg-slate-50/50">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive 
                    ? "bg-blue-50 text-blue-600" 
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                }`}
              >
                <tab.icon className={`w-4 h-4 mr-3 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 md:p-12">
          {activeTab === "personal" && (
            <div className="max-w-lg">
              <h2 className="text-xl font-bold text-slate-900 mb-8">Personal Information</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2"/>
                    <input 
                      type="text" 
                      value="Current User"
                      readOnly
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-500 outline-none cursor-not-allowed" 
                    />
                  </div>
                  <p className="text-[10px] font-medium text-slate-400 italic mt-2">
                    Name changes must be requested through HR.
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2"/>
                    <input 
                      type="email" 
                      defaultValue="user@mediflow.local"
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                    Contact Phone
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2"/>
                    <input 
                      type="tel" 
                      defaultValue="+91 00000 00000"
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="button"
                    className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Security Settings</h2>
              <p className="text-sm text-slate-500">Update your password and 2FA preferences here.</p>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Notification Preferences</h2>
              <p className="text-sm text-slate-500">Manage email and push alerts for system events.</p>
            </div>
          )}

          {activeTab === "appearance" && (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Appearance</h2>
              <p className="text-sm text-slate-500">Toggle between light and dark themes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}