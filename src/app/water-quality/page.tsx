"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function WaterQualityPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock water source data
  const waterSources = [
    {
      id: "WS-001",
      name: "Central Well #1",
      type: "Deep Well",
      location: "Central District",
      coordinates: "12.345, 98.765",
      status: "Safe",
      lastTested: "2024-01-16",
      ph: 7.2,
      bacteria: "Low",
      chemicals: "Normal",
      turbidity: 2.1,
      population: 2500,
      riskLevel: "Low"
    },
    {
      id: "WS-002", 
      name: "River Source A",
      type: "Surface Water",
      location: "Riverside District",
      coordinates: "12.567, 98.432",
      status: "Caution",
      lastTested: "2024-01-15", 
      ph: 6.8,
      bacteria: "Medium",
      chemicals: "Elevated",
      turbidity: 8.5,
      population: 1200,
      riskLevel: "Medium"
    },
    {
      id: "WS-003",
      name: "Community Pump #3",
      type: "Hand Pump",
      location: "Village Center",
      coordinates: "12.789, 98.123",
      status: "Safe",
      lastTested: "2024-01-16",
      ph: 7.4,
      bacteria: "Low", 
      chemicals: "Normal",
      turbidity: 1.8,
      population: 850,
      riskLevel: "Low"
    },
    {
      id: "WS-004",
      name: "Mountain Spring",
      type: "Natural Spring",
      location: "Mountain View",
      coordinates: "12.456, 98.789",
      status: "Unsafe",
      lastTested: "2024-01-14",
      ph: 5.9,
      bacteria: "High",
      chemicals: "Critical",
      turbidity: 15.2,
      population: 500,
      riskLevel: "High"
    },
    {
      id: "WS-005",
      name: "East Village Well",
      type: "Shallow Well", 
      location: "East Village",
      coordinates: "12.678, 98.234",
      status: "Caution",
      lastTested: "2024-01-15",
      ph: 6.5,
      bacteria: "Medium",
      chemicals: "Normal",
      turbidity: 5.3,
      population: 1800,
      riskLevel: "Medium"
    }
  ];

  const qualityStats = [
    {
      title: "Safe Water Sources",
      value: "124",
      total: "156",
      percentage: 79,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      title: "Sources Needing Attention",
      value: "23", 
      total: "156",
      percentage: 15,
      color: "text-yellow-600",
      bg: "bg-yellow-100"
    },
    {
      title: "Critical Sources", 
      value: "9",
      total: "156",
      percentage: 6,
      color: "text-red-600",
      bg: "bg-red-100"
    },
    {
      title: "Population Coverage",
      value: "94.2%",
      total: "100%",
      percentage: 94,
      color: "text-blue-600",
      bg: "bg-blue-100"
    }
  ];

  const recentTests = [
    {
      id: "TEST-001",
      source: "Central Well #1",
      date: "2024-01-16",
      inspector: "Dr. Smith",
      parameters: ["pH", "Bacteria", "Chemicals", "Turbidity"],
      result: "Pass",
      notes: "All parameters within safe limits"
    },
    {
      id: "TEST-002",
      source: "Mountain Spring", 
      date: "2024-01-14",
      inspector: "Dr. Johnson",
      parameters: ["pH", "Bacteria", "Chemicals"],
      result: "Fail",
      notes: "High bacterial contamination detected"
    },
    {
      id: "TEST-003",
      source: "River Source A",
      date: "2024-01-15",
      inspector: "Dr. Williams",
      parameters: ["pH", "Chemicals", "Turbidity"],
      result: "Caution",
      notes: "Elevated chemical levels, monitor closely"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "safe": return "bg-green-100 text-green-800";
      case "caution": return "bg-yellow-100 text-yellow-800";  
      case "unsafe": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low": return "text-green-600";
      case "medium": return "text-yellow-600";
      case "high": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getTestResultColor = (result: string) => {
    switch (result.toLowerCase()) {
      case "pass": return "bg-green-100 text-green-800";
      case "caution": return "bg-yellow-100 text-yellow-800";
      case "fail": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
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
            <h1 className="text-3xl font-bold text-gray-900">Water Quality Monitoring</h1>
            <p className="text-gray-600 mt-2">
              Monitor and manage water source quality across the community
            </p>
          </div>

          {/* Quality Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {qualityStats.map((stat, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-end space-x-2">
                      <span className={`text-3xl font-bold ${stat.color}`}>
                        {stat.value}
                      </span>
                      <span className="text-sm text-gray-500 mb-1">
                        / {stat.total}
                      </span>
                    </div>
                    <Progress value={stat.percentage} className="h-2" />
                    <div className="text-right">
                      <span className="text-sm text-gray-600">
                        {stat.percentage}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Water Sources Overview */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <span>💧</span>
                      <span>Water Sources</span>
                    </CardTitle>
                    <CardDescription>
                      Current status of monitored water sources
                    </CardDescription>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Add Source
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {waterSources.map((source) => (
                    <div key={source.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{source.name}</h4>
                          <p className="text-sm text-gray-600">{source.type} - {source.location}</p>
                        </div>
                        <Badge className={getStatusColor(source.status)}>
                          {source.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-3 text-xs">
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-500">pH Level:</span>
                            <span className="font-medium">{source.ph}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Bacteria:</span>
                            <span className="font-medium">{source.bacteria}</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Population:</span>
                            <span className="font-medium">{source.population.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Risk Level:</span>
                            <span className={`font-medium ${getRiskColor(source.riskLevel)}`}>
                              {source.riskLevel}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-200">
                        <span className="text-xs text-gray-500">
                          Last tested: {source.lastTested}
                        </span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                            View Details
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                            Test Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Testing Activity */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🔬</span>
                  <span>Recent Testing Activity</span>
                </CardTitle>
                <CardDescription>
                  Latest water quality test results and inspections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTests.map((test) => (
                    <div key={test.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{test.source}</h4>
                          <p className="text-sm text-gray-600">
                            Tested by {test.inspector} on {test.date}
                          </p>
                        </div>
                        <Badge className={getTestResultColor(test.result)}>
                          {test.result}
                        </Badge>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1">
                          {test.parameters.map((param, index) => (
                            <span
                              key={index}
                              className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            >
                              {param}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{test.notes}</p>
                      
                      <div className="flex justify-end space-x-2">
                        <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                          View Report
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs px-2 py-1">
                          Take Action
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    View All Test Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map Placeholder */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🗺️</span>
                <span>Water Source Map</span>
              </CardTitle>
              <CardDescription>
                Interactive map showing locations and status of all water sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <img 
                  src="https://placehold.co/1200x400?text=Interactive+Water+Source+Quality+Map+with+Real-Time+Status+Indicators+and+Geographic+Distribution+of+Water+Testing+Stations"
                  alt="Interactive water source quality map with real-time status indicators and geographic distribution"
                  className="w-full h-96 object-cover rounded-lg bg-gray-100"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                    <p className="text-gray-600">Water source locations and quality status</p>
                  </div>
                </div>
                
                {/* Map Controls Overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Safe (124)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Caution (23)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Unsafe (9)</span>
                  </div>
                </div>
                
                {/* Map Actions */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="sm" variant="outline" className="bg-white">
                    Filter
                  </Button>
                  <Button size="sm" variant="outline" className="bg-white">
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </div>
  );
}