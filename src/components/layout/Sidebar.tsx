"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      href: "/dashboard",
      icon: "📊",
      description: "Overview & Analytics"
    },
    {
      id: "diseases",
      label: "Disease Tracking",
      href: "/diseases",
      icon: "🦠",
      description: "Case Management"
    },
    {
      id: "water-quality", 
      label: "Water Quality",
      href: "/water-quality",
      icon: "💧",
      description: "Source Monitoring"
    },
    {
      id: "alerts",
      label: "Early Warnings",
      href: "/alerts", 
      icon: "🚨",
      description: "Alert System"
    },
    {
      id: "community",
      label: "Community Portal",
      href: "/community",
      icon: "👥",
      description: "Public Health"
    },
    {
      id: "reports",
      label: "Reports",
      href: "/reports",
      icon: "📈",
      description: "Data Analysis"
    },
    {
      id: "admin",
      label: "Administration",
      href: "/admin",
      icon: "⚙️",
      description: "System Settings"
    }
  ];

  const quickStats = [
    { label: "Active Cases", value: "24", trend: "down", color: "text-green-600" },
    { label: "Water Sources", value: "156", trend: "stable", color: "text-blue-600" },
    { label: "Alert Level", value: "Low", trend: "stable", color: "text-yellow-600" }
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-30 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">HealthGuard</h2>
                <p className="text-xs text-gray-500">Community Monitor</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors group",
                  activeItem === item.id
                    ? "bg-blue-50 text-blue-700 border border-blue-200"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                )}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
                {activeItem === item.id && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Quick Stats */}
          <div className="p-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Stats</h3>
            <div className="space-y-3">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{stat.label}</span>
                  <span className={cn("text-sm font-medium", stat.color)}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">DR</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Dr. Sarah Johnson</p>
                <p className="text-xs text-gray-500">Health Officer</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}