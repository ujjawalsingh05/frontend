"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  id: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // On app load, check if a session exists
    const token = localStorage.getItem("hms_auth_token");
    const storedUser = localStorage.getItem("hms_user");
    
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else if (!pathname.includes("/login")) {
      // Protect routes: If no token and not on login page, kick to login
      router.push("/login");
    }
  }, [pathname, router]);

  const login = (token: string, userData: User) => {
    localStorage.setItem("hms_auth_token", token);
    localStorage.setItem("hms_user", JSON.stringify(userData));
    setUser(userData);
    router.push(`/${userData.role}`);
  };

  const logout = () => {
    localStorage.removeItem("hms_auth_token");
    localStorage.removeItem("hms_user");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};