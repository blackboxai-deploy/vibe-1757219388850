"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data for dashboard
  const healthMetrics = [
    {
      title: "Active Disease Cases",
      value: "24",
      change: "-12%",
      trend: "down",
      icon: "🦠",
      description: "Total confirmed cases this month",
      color: "text-red-600"
    },
    {
      title: "Water Sources Monitored",
      value: "156",
      change: "+3",
      trend: "up", 
      icon: "💧",
      description: "Sources under surveillance",
      color: "text-blue-600"
    },
    {
      title: "Community Alert Level",
      value: "LOW",
      change: "Stable",
      trend: "stable",
      icon: "🚨",
      description: "Current risk assessment",
      color: "text-green-600"
    },
    {
      title: "Population Coverage",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: "👥",
      description: "Communities under monitoring",
      color: "text-purple-600"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "Water Quality Alert",
      severity: "Medium",
      location: "District 7 - Main Well",
      time: "2 hours ago",
      status: "Active",
      description: "Elevated bacterial count detected"
    },
    {
      id: 2,
      type: "Disease Outbreak",
      severity: "High", 
      location: "Riverside Community",
      time: "5 hours ago",
      status: "Investigating",
      description: "3 confirmed cholera cases"
    },
    {
      id: 3,
      type: "System Alert",
      severity: "Low",
      location: "Testing Station #23",
      time: "1 day ago", 
      status: "Resolved",
      description: "Equipment maintenance completed"
    }
  ];

  const waterQualityData = [
    { source: "Central Well #1", status: "Safe", ph: 7.2, bacteria: "Low", lastTested: "Today" },
    { source: "River Source A", status: "Caution", ph: 6.8, bacteria: "Medium", lastTested: "Yesterday" },
    { source: "Community Pump #3", status: "Safe", ph: 7.4, bacteria: "Low", lastTested: "Today" },
    { source: "Mountain Spring", status: "Unsafe", ph: 5.9, bacteria: "High", lastTested: "2 days ago" }
  ];

  const diseaseStats = [
    { disease: "Cholera", cases: 12, trend: -8, severity: "High" },
    { disease: "Typhoid", cases: 8, trend: +2, severity: "Medium" },
    { disease: "Hepatitis A", cases: 4, trend: -1, severity: "Low" },
    { disease: "Dysentery", cases: 0, trend: 0, severity: "None" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "safe": return "bg-green-100 text-green-800";
      case "caution": return "bg-yellow-100 text-yellow-800";
      case "unsafe": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Health Monitoring Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Real-time community health surveillance and early warning system
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                System Online
              </Badge>
              <span className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleTimeString()}
              </span>
            </div>
          </div>

          {/* Health Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {healthMetrics.map((metric, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl">{metric.icon}</div>
                    <Badge 
                      variant="outline" 
                      className={
                        metric.trend === "up" ? "bg-green-50 text-green-700" :
                        metric.trend === "down" ? "bg-red-50 text-red-700" :
                        "bg-gray-50 text-gray-700"
                      }
                    >
                      {metric.change}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold mb-1 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <CardTitle className="text-sm font-medium text-gray-900 mb-1">
                    {metric.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {metric.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Alerts */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🚨</span>
                  <span>Recent Alerts</span>
                </CardTitle>
                <CardDescription>
                  Latest health warnings and system notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">{alert.type}</h4>
                          <Badge className={getSeverityColor(alert.severity)}>
                            {alert.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{alert.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>📍 {alert.location}</span>
                          <span>🕐 {alert.time}</span>
                          <span className={`px-2 py-1 rounded ${
                            alert.status === 'Active' ? 'bg-red-100 text-red-700' :
                            alert.status === 'Investigating' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {alert.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Water Quality Status */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>💧</span>
                  <span>Water Quality Overview</span>
                </CardTitle>
                <CardDescription>
                  Current status of monitored water sources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {waterQualityData.map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{source.source}</h4>
                        <div className="flex items-center space-x-4 text-xs text-gray-600">
                          <span>pH: {source.ph}</span>
                          <span>Bacteria: {source.bacteria}</span>
                          <span>Tested: {source.lastTested}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(source.status)}>
                        {source.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Disease Statistics */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>📊</span>
                <span>Disease Surveillance</span>
              </CardTitle>
              <CardDescription>
                Current disease case tracking and trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {diseaseStats.map((disease, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">{disease.disease}</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{disease.cases}</div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                      <span className={
                        disease.trend > 0 ? "text-red-600" :
                        disease.trend < 0 ? "text-green-600" :
                        "text-gray-600"
                      }>
                        {disease.trend > 0 ? "↑" : disease.trend < 0 ? "↓" : "→"} 
                        {Math.abs(disease.trend)}
                      </span>
                      <Badge className={getSeverityColor(disease.severity)}>
                        {disease.severity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </div>
  );
}