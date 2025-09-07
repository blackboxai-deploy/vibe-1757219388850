"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock alerts data
  const activeAlerts = [
    {
      id: "ALT-001",
      type: "Disease Outbreak",
      severity: "High",
      title: "Cholera Cases Detected in District 7",
      description: "3 confirmed cases of cholera reported in Riverside area. Immediate investigation and containment measures initiated.",
      location: "District 7 - Riverside Community",
      timestamp: "2024-01-16 14:30",
      status: "Active",
      responseTeam: "Dr. Smith, Nurse Johnson, Health Inspector Wilson",
      affectedPopulation: 2500,
      actions: ["Water source testing", "Contact tracing", "Public advisory issued"]
    },
    {
      id: "ALT-002", 
      type: "Water Quality Alert",
      severity: "Medium",
      title: "Elevated Bacterial Count at Central Well",
      description: "Routine testing revealed elevated bacterial levels at Central Well #1. Source temporarily closed for treatment.",
      location: "Central District - Main Well",
      timestamp: "2024-01-16 09:15",
      status: "Under Investigation",
      responseTeam: "Dr. Williams, Water Engineer Davis",
      affectedPopulation: 2500,
      actions: ["Water treatment initiated", "Alternative supply arranged", "Retesting scheduled"]
    },
    {
      id: "ALT-003",
      type: "System Alert", 
      severity: "Low",
      title: "Monitoring Equipment Maintenance Required",
      description: "Automated monitoring station #23 requires calibration and maintenance. Manual testing resumed.",
      location: "East Village Testing Station",
      timestamp: "2024-01-15 16:45",
      status: "Scheduled",
      responseTeam: "Technical Team Lead Anderson",
      affectedPopulation: 850,
      actions: ["Manual testing protocol", "Maintenance scheduled", "Backup equipment deployed"]
    }
  ];

  const riskAssessment = {
    overall: "Medium",
    factors: [
      { name: "Disease Cases", level: "High", score: 8, trend: "Increasing" },
      { name: "Water Quality", level: "Medium", score: 6, trend: "Stable" },
      { name: "Population Density", level: "Medium", score: 5, trend: "Stable" },
      { name: "Seasonal Risk", level: "Low", score: 3, trend: "Decreasing" },
      { name: "Infrastructure", level: "Medium", score: 6, trend: "Improving" }
    ]
  };

  const alertStats = [
    { title: "Active Alerts", count: 12, change: "+3", trend: "up", color: "text-red-600" },
    { title: "This Week", count: 28, change: "+8", trend: "up", color: "text-orange-600" },
    { title: "Resolved", count: 156, change: "+15", trend: "up", color: "text-green-600" },
    { title: "Response Time", count: "12m", change: "-3m", trend: "down", color: "text-blue-600" }
  ];

  const recentResolutions = [
    {
      id: "ALT-R001",
      type: "Water Quality Alert",
      title: "Mountain Spring Contamination",
      resolvedDate: "2024-01-15",
      duration: "3 days",
      outcome: "Source treated and tested safe. Public advisory lifted."
    },
    {
      id: "ALT-R002", 
      type: "Disease Case",
      title: "Isolated Typhoid Case", 
      resolvedDate: "2024-01-14",
      duration: "5 days",
      outcome: "Patient recovered. No additional cases found through contact tracing."
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-red-100 text-red-800";
      case "under investigation": return "bg-yellow-100 text-yellow-800";
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "resolved": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "high": return "text-red-600";
      case "medium": return "text-yellow-600";
      case "low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Early Warning System</h1>
            <p className="text-gray-600 mt-2">
              Community health alerts, risk assessment, and emergency response coordination
            </p>
          </div>

          {/* Alert Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {alertStats.map((stat, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <div className="flex items-end space-x-2">
                        <p className={`text-3xl font-bold ${stat.color}`}>{stat.count}</p>
                        <span className={`text-sm ${
                          stat.trend === "up" ? "text-red-600" : "text-green-600"
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className="text-2xl">
                      {index === 0 ? "🚨" : index === 1 ? "📊" : index === 2 ? "✅" : "⏱️"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Active Alerts */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span>🚨</span>
                        <span>Active Alerts</span>
                      </CardTitle>
                      <CardDescription>
                        Current health alerts requiring immediate attention
                      </CardDescription>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">
                      + Create Alert
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeAlerts.map((alert) => (
                      <Alert key={alert.id} className={`border-l-4 ${
                        alert.severity === 'High' ? 'border-l-red-500' :
                        alert.severity === 'Medium' ? 'border-l-yellow-500' :
                        'border-l-green-500'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <AlertTitle className="text-base">{alert.title}</AlertTitle>
                              <Badge className={getSeverityColor(alert.severity)}>
                                {alert.severity}
                              </Badge>
                              <Badge className={getStatusColor(alert.status)}>
                                {alert.status}
                              </Badge>
                            </div>
                            <AlertDescription className="text-sm text-gray-600 mb-3">
                              {alert.description}
                            </AlertDescription>
                            
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div className="space-y-1">
                                <div><strong>Location:</strong> {alert.location}</div>
                                <div><strong>Time:</strong> {alert.timestamp}</div>
                                <div><strong>Affected Population:</strong> {alert.affectedPopulation.toLocaleString()}</div>
                              </div>
                              <div className="space-y-1">
                                <div><strong>Response Team:</strong> {alert.responseTeam}</div>
                                <div><strong>Actions Taken:</strong></div>
                                <ul className="list-disc list-inside text-xs text-gray-600 ml-2">
                                  {alert.actions.map((action, index) => (
                                    <li key={index}>{action}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2 ml-4">
                            <Button size="sm" variant="outline">Update</Button>
                            <Button size="sm" variant="outline">Resolve</Button>
                          </div>
                        </div>
                      </Alert>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Risk Assessment */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>📊</span>
                  <span>Risk Assessment</span>
                </CardTitle>
                <CardDescription>
                  Current community health risk factors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className={`text-4xl font-bold ${getRiskLevelColor(riskAssessment.overall)} mb-2`}>
                    {riskAssessment.overall.toUpperCase()}
                  </div>
                  <p className="text-sm text-gray-600">Overall Risk Level</p>
                </div>
                
                <div className="space-y-4">
                  {riskAssessment.factors.map((factor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{factor.name}</div>
                        <div className="text-xs text-gray-500">{factor.trend}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              factor.score >= 7 ? 'bg-red-500' :
                              factor.score >= 5 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: `${factor.score * 10}%` }}
                          ></div>
                        </div>
                        <Badge className={getSeverityColor(factor.level)}>
                          {factor.level}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Resolutions */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>✅</span>
                <span>Recently Resolved</span>
              </CardTitle>
              <CardDescription>
                Successfully resolved health alerts and outcomes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {recentResolutions.map((resolution) => (
                  <div key={resolution.id} className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{resolution.title}</h4>
                      <Badge className="bg-green-100 text-green-800">
                        Resolved
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{resolution.outcome}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>Duration: {resolution.duration}</span>
                      <span>Resolved: {resolution.resolvedDate}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline">
                  View All Resolved Alerts
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </div>
  );
}