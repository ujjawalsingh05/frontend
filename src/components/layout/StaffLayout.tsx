"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    <div className="flex h-screen bg-[#F7F8FC] font-sans text-[#2B2B2B] overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[260px] bg-[#1F1A67] text-white flex flex-col shrink-0 z-20 shadow-[4px_0_24px_rgba(31,26,103,0.05)]">
        
        {/* Hospital Branding */}
        <div className="h-[72px] flex items-center px-6 shrink-0 border-b border-white/10 bg-[#1F1A67]">
          <Image 
            src="/logo.png" 
            alt="Sahyadri Hospital Logo" 
            width={32} 
            height={32} 
            className="object-contain mr-3 shrink-0" 
          />
          <div className="flex flex-col justify-center">
            <span className="text-white font-bold tracking-tight text-[15px] leading-tight">SAHYADRI</span>
            <span className="text-[#00A3E0] text-[10px] font-bold tracking-widest uppercase leading-tight">Hospital</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 space-y-1">
          <div className="px-6 mb-3 text-[10px] font-bold text-[#F4F0F8]/50 uppercase tracking-widest">
            Hospital Operations
          </div>
          
          <div className="flex flex-col space-y-0.5">
            {navLinks.map((link) => {
              // Active state logic handles nested routes (e.g., /admin and /admin/staff both highlight "Admin Setup")
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              const Icon = link.icon;
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center px-6 py-3 transition-colors ${
                    isActive
                      ? "bg-[#3B3486] text-white border-l-[3px] border-[#00A3E0]"
                      : "text-[#F4F0F8]/70 hover:bg-white/5 hover:text-white border-l-[3px] border-transparent"
                  }`}
                >
                  <Icon className={`w-[18px] h-[18px] mr-3 shrink-0 transition-colors ${isActive ? "text-[#00A3E0]" : "text-[#F4F0F8]/50"}`} />
                  <span className="font-medium text-[14px]">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom User Profile & Logout */}
        <div className="p-4 border-t border-white/10 shrink-0 bg-black/10">
          <div className="flex items-center gap-3 px-2 mb-4">
            <div className="w-9 h-9 rounded-full bg-[#3B3486] flex items-center justify-center shrink-0 border border-white/10">
              <span className="text-white text-xs font-bold tracking-wider">AU</span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-white font-medium text-sm truncate">Admin User</span>
              <span className="text-[#00A3E0] text-[10px] font-bold tracking-wider uppercase truncate">Super Administrator</span>
            </div>
          </div>
          <Link
            href="/login"
            className="flex items-center justify-center w-full py-2.5 rounded text-[#F4F0F8]/70 hover:bg-white/10 hover:text-white transition-colors text-sm font-medium"
          >
            <LogOut className="w-4 h-4 mr-2" /> 
            Sign Out
          </Link>
        </div>
      </aside>

      {/* ================= MAIN LAYOUT AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="h-[72px] bg-white border-b border-[#EAEAEA] flex items-center justify-between px-8 shrink-0 z-10">
          
          {/* Search */}
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#6F6B7D] absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search patient, staff, or department..." 
                className="w-full pl-10 pr-4 py-2 bg-[#F7F8FC] border border-[#EAEAEA] rounded text-sm text-[#2B2B2B] focus:outline-none focus:border-[#1F1A67] focus:ring-1 focus:ring-[#1F1A67] transition-all placeholder:text-[#6F6B7D]/70"
              />
            </div>
          </div>

          {/* Right Actions & Header Profile */}
          <div className="flex items-center space-x-6">
            <button className="relative text-[#6F6B7D] hover:text-[#1F1A67] transition-colors focus:outline-none">
              <Bell className="w-5 h-5" />
              {/* Subtle Magenta notification dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#C61A4C] rounded-full ring-2 ring-white"></span>
            </button>
            
            <div className="w-px h-5 bg-[#EAEAEA]"></div>
            
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="hidden md:flex flex-col text-right">
                <span className="text-[13px] font-semibold text-[#1F1A67] leading-tight">Admin User</span>
                <span className="text-[10px] text-[#6F6B7D] font-bold uppercase tracking-wider">Super Admin</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#F4F0F8] flex items-center justify-center text-[#1F1A67] border border-[#EAEAEA] group-hover:border-[#3B3486] transition-colors shrink-0">
                <span className="text-xs font-bold">AU</span>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto w-full relative">
          {children}
        </main>

      </div>
    </div>
  );
}