"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Stethoscope, 
  Users, 
  Activity, 
  Pill, 
  Microscope, 
  Settings, 
  LogOut, 
  Bell,
  Search
} from "lucide-react";

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Reception", href: "/reception", icon: Users },
    { name: "Doctor EMR", href: "/doctor", icon: Stethoscope },
    { name: "Nurse Station", href: "/nurse", icon: Activity },
    { name: "Pharmacy", href: "/pharmacy", icon: Pill },
    { name: "Laboratory", href: "/laboratory", icon: Microscope },
    { name: "Admin Setup", href: "/admin", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-surface">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-brand-900 text-white flex flex-col shadow-xl z-20">
        <div className="h-16 flex items-center px-6 border-b border-brand-800 bg-brand-950">
          <Activity className="w-6 h-6 text-brand-300 mr-3" />
          <span className="text-lg font-bold tracking-wide">MediFlow</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold text-brand-400 uppercase tracking-wider">
            Departments
          </div>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-3 py-2.5 rounded-lg transition-colors group ${
                  isActive
                    ? "bg-brand-600 text-white font-medium"
                    : "text-brand-100 hover:bg-brand-800 hover:text-white"
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 ${isActive ? "text-white" : "text-brand-300 group-hover:text-white"}`} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-brand-800">
          <Link
            href="/login"
            className="flex items-center px-3 py-2 rounded-lg text-brand-200 hover:bg-brand-800 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 shadow-sm">
          <div className="flex items-center flex-1">
            <div className="relative w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search patient by UHID or Name..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-slate-400 hover:text-brand-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-px h-6 bg-slate-200 mx-2"></div>
            <div className="flex items-center cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-sm border border-brand-200">
                JD
              </div>
              <div className="ml-3 text-sm">
                <p className="font-medium text-slate-700">Dr. John Doe</p>
                <p className="text-xs text-slate-500">Cardiology</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Rendered Here */}
        <main className="flex-1 overflow-y-auto bg-surface p-6">
          {children}
        </main>
      </div>
    </div>
  );
}