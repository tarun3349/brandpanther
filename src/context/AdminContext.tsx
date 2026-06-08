import React, { createContext, useContext, useEffect, useState } from "react";

export interface AdminSettings {
  logoMarkUrl: string;
  logoWordmarkUrl: string;
  logoSize: number;
  logoSizeMobile: number;
  logoWordmarkSize: number;
  logoWordmarkSizeMobile: number;
  logoGap: number;
  companyName: string;
  heroHeadline: string;
  heroSubheading: string;
  ctaButtonText: string;
  aboutHeadline: string;
  aboutDescription: string;
}

interface AdminContextType {
  settings: AdminSettings;
  updateSettings: (newSettings: Partial<AdminSettings>) => void;
  resetSettings: () => void;
}

const DEFAULT_SETTINGS: AdminSettings = {
  logoMarkUrl: "/logo-mark.png",
  logoWordmarkUrl: "/logo-wordmark.png",
  logoSize: 100,
  logoSizeMobile: 100,
  logoWordmarkSize: 100,
  logoWordmarkSizeMobile: 100,
  logoGap: 48,
  companyName: "Brand Panther",
  heroHeadline: "Digital\nMarketing\nAgency.",
  heroSubheading: "From first click to final sale — we craft brands that hunt growth.",
  ctaButtonText: "Let's Grow Together",
  aboutHeadline: "From conceptualization to implementation, Brand Panther partners with ambitious businesses",
  aboutDescription: "We're not just another marketing agency. We're your growth partner, combining strategy, creativity, and technology to deliver results that matter.",
};

export const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AdminSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("brandPantherAdminSettings");
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error("Failed to parse admin settings:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save settings to localStorage whenever they change
  const updateSettings = (newSettings: Partial<AdminSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem("brandPantherAdminSettings", JSON.stringify(updatedSettings));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    localStorage.removeItem("brandPantherAdminSettings");
  };

  return (
    <AdminContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminSettings = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminSettings must be used within AdminProvider");
  }
  return context;
};
