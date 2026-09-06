"use client";

import { usePathname, useRouter } from "next/navigation";
import { 
  Users, Calendar, CreditCard, Activity, Stethoscope, 
  FileText, Pill, Package, LayoutDashboard, Settings, 
  LogOut, ClipboardList, ShieldAlert, TestTube, Search 
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function RoleLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  // Define sidebar configurations for each role exactly as shown in screenshots
  const sidebarConfigs: Record<string, any> = {
    reception: {
      title: "RECEPTION DESK",
      user: { name: "Alice Thompson", role: "RECEPTION LEAD", img: "https://i.pravatar.cc/150?u=alice" },
      links: [
        { name: "Patient Registration", path: "/reception", icon: Users },
        { name: "Patient Directory", path: "/shared/patients", icon: FileText },
        { name: "Slot Booking", path: "/reception/booking", icon: Calendar },
        { name: "Payments", path: "/reception/billing", icon: CreditCard },
      ]
    },
    nurse: {
      title: "WARD & NURSING",
      user: { name: "Sarah Palmer", role: "HEAD NURSE • 1ST FLOOR", img: "https://i.pravatar.cc/150?u=sarah" },
      links: [
        { name: "Ward Status", path: "/nurse", icon: Activity },
        { name: "Nursing Notes", path: "/nurse/notes", icon: ClipboardList },
        { name: "Medication Tracking", path: "/nurse/meds", icon: Pill },
        { name: "Shift Handover", path: "/nurse/shift", icon: FileText },
      ]
    },
    doctor: {
      title: "MEDICAL SERVICES",
      user: { name: "Dr. James Wilson", role: "SENIOR CARDIOLOGIST", img: "https://i.pravatar.cc/150?u=james" },
      links: [
        { name: "EMR & Consult", path: "/doctor", icon: Stethoscope },
        { name: "Appointments", path: "/doctor/appointments", icon: Calendar },
        { name: "Lab Reports", path: "/doctor/reports", icon: FileText },
        { name: "Billing History", path: "/doctor/billing", icon: CreditCard },
      ]
    },
    pharmacy: {
      title: "PHARMACY OPS",
      user: { name: "Robert Miller", role: "HEAD PHARMACIST", img: "https://i.pravatar.cc/150?u=robert" },
      links: [
        { name: "Dispensing Queue", path: "/pharmacy", icon: Pill },
        { name: "Stock Management", path: "/pharmacy/stock", icon: Package },
        { name: "Supplier Orders", path: "/pharmacy/orders", icon: FileText },
        { name: "Prescription Logs", path: "/pharmacy/logs", icon: ClipboardList },
      ]
    },
    admin: {
      title: "ADMIN CONTROL",
      user: { name: "Admin User", role: "SUPER ADMINISTRATOR", img: "https://i.pravatar.cc/150?u=admin" },
      links: [
        { name: "Facility Overview", path: "/admin", icon: LayoutDashboard },
        { name: "Staff Management", path: "/admin/staff", icon: Users },
        { name: "Financial Metrics", path: "/admin/finance", icon: CreditCard },
        { name: "System Settings", path: "/settings", icon: Settings },
      ]
    },
    laboratory: {
      title: "LAB DIAGNOSTICS",
      user: { name: "Alice Thompson", role: "CHIEF PATHOLOGIST", img: "https://i.pravatar.cc/150?u=alice_lab" },
      links: [
        { name: "Sample Collection", path: "/laboratory", icon: TestTube },
        { name: "Test Processing", path: "/laboratory/processing", icon: Activity },
        { name: "Result Publication", path: "/laboratory/results", icon: FileText },
        { name: "Reagent Inventory", path: "/laboratory/inventory", icon: Package },
      ]
    },
  };

  // Determine active config based on URL path
  const currentRole = pathname.split('/')[1];
  // Default to admin/main menu if role not specifically mapped
  const config = sidebarConfigs[currentRole] || sidebarConfigs.admin; 

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans overflow-hidden">
      
      {/* Dynamic Sidebar */}
      <aside className="w-[260px] bg-[#1a365d] text-white flex flex-col flex-shrink-0 shadow-xl z-20">
        <div className="p-6 flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">MediFlow</span>
        </div>

        <div className="px-6 py-2">
          <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">{config.title}</p>
        </div>

        <nav className="flex-1 mt-4 space-y-1 px-3 overflow-y-auto">
          {config.links.map((link: any) => {
            const isActive = pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => router.push(link.path)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-blue-600 text-white shadow-md" 
                    : "text-blue-100 hover:bg-[#2a4365] hover:text-white"
                }`}
              >
                <link.icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-300"}`} />
                <span>{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-[#2a4365]">
          <div className="flex items-center space-x-3 mb-4 px-2">
            <img src={config.user.img} alt="User" className="w-10 h-10 rounded-full border border-[#2a4365]" />
            <div>
              <p className="text-sm font-bold text-white">{config.user.name}</p>
              <p className="text-[9px] font-bold text-blue-300 uppercase tracking-wider">{config.user.role}</p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg bg-[#2a4365] hover:bg-red-500/20 hover:text-red-400 text-blue-200 transition-colors text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </div>
        
        {/* Global Footer Status Bar */}
        <div className="absolute bottom-4 left-8 right-8 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-transparent">
          <span>© 2026 MEDIFLOW ENTERPRISE • {config.title} NODE</span>
          <div className="flex space-x-6">
            <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span> SYSTEM SYNC: OK</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span> V2.4.1 STABLE</span>
          </div>
        </div>
      </main>
    </div>
  );
}