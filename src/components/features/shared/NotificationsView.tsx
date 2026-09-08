"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AlertCircle, CheckCircle2, Info, Clock, CheckCheck } from "lucide-react";

// Mock Database of Notifications
const allNotifications = [
  // DOCTOR NOTIFICATIONS
  { id: 1, role: "doctor", type: "critical", title: "Critical Lab Result", message: "Blood report for Robert Miller (RM-99) requires immediate review.", time: "10 mins ago", read: false },
  { id: 2, role: "doctor", type: "info", title: "Patient Queue Updated", message: "Sarah Jenkins (AP-003) follow-up added to 10:15 AM slot.", time: "1 hour ago", read: false },
  
  // NURSE NOTIFICATIONS
  { id: 3, role: "nurse", type: "critical", title: "Patient Alert", message: "Bed 4 (ICU) requires immediate assistance. Vitals dropping.", time: "2 mins ago", read: false },
  { id: 4, role: "nurse", type: "info", title: "Medication Schedule", message: "Time to administer antibiotics for Ward B patients.", time: "15 mins ago", read: true },

  // PHARMACY NOTIFICATIONS
  { id: 5, role: "pharmacy", type: "alert", title: "Low Inventory Warning", message: "Amoxicillin 500mg stock is below 20 units.", time: "30 mins ago", read: false },
  
  // LABORATORY NOTIFICATIONS
  { id: 6, role: "laboratory", type: "info", title: "New Samples Arrived", message: "Batch #442 from Ward C requires processing.", time: "5 mins ago", read: false },

  // ADMIN NOTIFICATIONS
  { id: 7, role: "admin", type: "success", title: "System Sync Complete", message: "HMS database successfully backed up to cloud.", time: "1 day ago", read: true },
  
  // RECEPTION NOTIFICATIONS
  { id: 8, role: "reception", type: "alert", title: "High Wait Times", message: "OPD wait time exceeding 45 minutes. Please manage queue.", time: "12 mins ago", read: false },
  
  // GLOBAL (ALL ROLES)
  { id: 9, role: "all", type: "info", title: "System Maintenance", message: "Scheduled downtime at 2:00 AM on Sunday for V2.5 Update.", time: "2 days ago", read: true },
];

export default function NotificationsView() {
  const pathname = usePathname();
  // Extract role from URL (e.g., from "/doctor/notifications" extracts "doctor")
  const currentRole = pathname.split("/")[1] || "admin"; 

  // Filter notifications based on role
  const [notifications, setNotifications] = useState(
    allNotifications.filter(n => n.role === currentRole || n.role === "all")
  );

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case "critical": return <AlertCircle className="w-5 h-5 text-[#C61A4C]" />;
      case "alert": return <Clock className="w-5 h-5 text-orange-500" />;
      case "success": return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      default: return <Info className="w-5 h-5 text-[#00A3E0]" />;
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1F1A67]">Notifications</h1>
          <p className="text-sm text-[#6F6B7D] mt-1 capitalize">{currentRole} Department Alerts</p>
        </div>
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="flex items-center text-sm font-medium text-[#1F1A67] hover:text-[#3B3486] transition-colors bg-white px-4 py-2 border border-[#EAEAEA] rounded-md shadow-sm"
          >
            <CheckCheck className="w-4 h-4 mr-2" />
            Mark all as read
          </button>
        )}
      </div>

      <div className="bg-white border border-[#EAEAEA] rounded-xl shadow-sm overflow-hidden">
        {notifications.length === 0 ? (
          <div className="p-12 text-center text-[#6F6B7D]">
            No notifications found.
          </div>
        ) : (
          <div className="divide-y divide-[#EAEAEA]">
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`p-5 flex gap-4 transition-colors hover:bg-[#F7F8FC] ${!notif.read ? 'bg-indigo-50/30' : 'bg-white'}`}
              >
                <div className="mt-0.5 shrink-0">
                  {getIcon(notif.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-sm font-semibold ${!notif.read ? 'text-[#1F1A67]' : 'text-[#2B2B2B]'}`}>
                      {notif.title}
                    </h3>
                    <span className="text-xs text-[#6F6B7D] font-medium">{notif.time}</span>
                  </div>
                  <p className="text-sm text-[#6F6B7D] mt-1">{notif.message}</p>
                </div>
                {!notif.read && (
                  <div className="shrink-0 flex items-center justify-center w-8">
                    <span className="w-2 h-2 bg-[#00A3E0] rounded-full"></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}