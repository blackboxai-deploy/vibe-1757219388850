"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock system data
  const systemStats = [
    {
      title: "System Uptime",
      value: "99.97%",
      description: "Last 30 days",
      color: "text-green-600",
      icon: "⚡"
    },
    {
      title: "Active Users",
      value: "247",
      description: "Currently logged in",
      color: "text-blue-600", 
      icon: "👥"
    },
    {
      title: "Data Points",
      value: "1.2M",
      description: "Processed this month",
      color: "text-purple-600",
      icon: "📊"
    },
    {
      title: "Alert Response",
      value: "8.5m",
      description: "Average response time",
      color: "text-orange-600",
      icon: "⏱️"
    }
  ];

  const userData = [
    {
      id: "USR-001",
      name: "Dr. Sarah Johnson",
      role: "Health Officer",
      department: "Community Health",
      lastActive: "2024-01-16 14:30",
      status: "Active",
      permissions: ["View All", "Create Alerts", "Manage Cases"]
    },
    {
      id: "USR-002",
      name: "Dr. Michael Smith",
      role: "Lead Physician",
      department: "Disease Control",
      lastActive: "2024-01-16 13:15",
      status: "Active", 
      permissions: ["View All", "Create Alerts", "Manage Cases", "Admin"]
    },
    {
      id: "USR-003",
      name: "Nurse Jennifer Wilson",
      role: "Field Nurse", 
      department: "Community Outreach",
      lastActive: "2024-01-15 16:45",
      status: "Offline",
      permissions: ["View Limited", "Report Cases"]
    },
    {
      id: "USR-004",
      name: "John Davis",
      role: "Water Inspector",
      department: "Water Quality",
      lastActive: "2024-01-16 12:20",
      status: "Active",
      permissions: ["View Water", "Test Results", "Quality Reports"]
    }
  ];

  const systemLogs = [
    {
      timestamp: "2024-01-16 14:35:12",
      level: "INFO",
      user: "Dr. Smith",
      action: "Created new disease case CASE-005",
      module: "Disease Tracking"
    },
    {
      timestamp: "2024-01-16 14:30:45",
      level: "WARN",
      user: "System",
      action: "High bacterial count detected at source WS-004",
      module: "Water Quality"
    },
    {
      timestamp: "2024-01-16 14:15:33",
      level: "INFO", 
      user: "Dr. Johnson",
      action: "Updated alert status ALT-001 to Active",
      module: "Alert System"
    },
    {
      timestamp: "2024-01-16 13:45:22",
      level: "ERROR",
      user: "System",
      action: "Failed to connect to monitoring station #23",
      module: "Data Collection"
    }
  ];

  const reportTemplates = [
    {
      name: "Weekly Health Summary",
      description: "Comprehensive weekly report of health indicators",
      lastGenerated: "2024-01-15",
      frequency: "Weekly",
      recipients: 12
    },
    {
      name: "Disease Outbreak Report", 
      description: "Detailed analysis of disease cases and trends",
      lastGenerated: "2024-01-16",
      frequency: "On-demand",
      recipients: 8
    },
    {
      name: "Water Quality Assessment",
      description: "Monthly water source quality evaluation",
      lastGenerated: "2024-01-01", 
      frequency: "Monthly",
      recipients: 15
    },
    {
      name: "Community Health Metrics",
      description: "Key performance indicators for community health",
      lastGenerated: "2024-01-14",
      frequency: "Bi-weekly",
      recipients: 20
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800";
      case "offline": return "bg-gray-100 text-gray-800"; 
      case "suspended": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getLogLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "info": return "bg-blue-100 text-blue-800";
      case "warn": return "bg-yellow-100 text-yellow-800";
      case "error": return "bg-red-100 text-red-800";
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
            <h1 className="text-3xl font-bold text-gray-900">System Administration</h1>
            <p className="text-gray-600 mt-2">
              Manage users, system settings, and generate reports
            </p>
          </div>

          {/* System Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {systemStats.map((stat, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.description}</p>
                    </div>
                    <div className="text-3xl">{stat.icon}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Admin Tabs */}
          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="users">User Management</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="settings">System Settings</TabsTrigger>
              <TabsTrigger value="logs">System Logs</TabsTrigger>
            </TabsList>

            {/* User Management Tab */}
            <TabsContent value="users">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span>👥</span>
                        <span>User Management</span>
                      </CardTitle>
                      <CardDescription>
                        Manage user accounts, roles, and permissions
                      </CardDescription>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      + Add User
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead>User</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Active</TableHead>
                          <TableHead>Permissions</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {userData.map((user) => (
                          <TableRow key={user.id} className="hover:bg-gray-50">
                            <TableCell>
                              <div>
                                <div className="font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.id}</div>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">{user.role}</TableCell>
                            <TableCell>{user.department}</TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(user.status)}>
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-sm">{user.lastActive}</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {user.permissions.slice(0, 2).map((permission, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {permission}
                                  </Badge>
                                ))}
                                {user.permissions.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{user.permissions.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline">Edit</Button>
                                <Button size="sm" variant="outline">Suspend</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>📊</span>
                    <span>Report Generation</span>
                  </CardTitle>
                  <CardDescription>
                    Generate and manage automated health reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {reportTemplates.map((template, index) => (
                      <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {template.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-600 mb-4">
                          <div className="flex justify-between">
                            <span>Frequency:</span>
                            <span className="font-medium">{template.frequency}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Recipients:</span>
                            <span className="font-medium">{template.recipients} users</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Last Generated:</span>
                            <span className="font-medium">{template.lastGenerated}</span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">Generate Now</Button>
                          <Button size="sm" variant="outline">Configure</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">
                      📋 Custom Report Generator
                    </h3>
                    <p className="text-sm text-blue-800 mb-4">
                      Create custom reports with specific date ranges, parameters, and export formats.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Create Custom Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Settings Tab */}
            <TabsContent value="settings">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>⚙️</span>
                    <span>System Configuration</span>
                  </CardTitle>
                  <CardDescription>
                    Configure system settings and alert thresholds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Alert Configuration */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Thresholds</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Disease Case Threshold (High Alert)
                            </label>
                            <input 
                              type="number" 
                              defaultValue="5"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                            <p className="text-xs text-gray-500 mt-1">Cases per week to trigger high alert</p>
                          </div>
                          
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Water Quality pH Range
                            </label>
                            <div className="flex space-x-2">
                              <input 
                                type="number" 
                                defaultValue="6.5"
                                step="0.1"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                                placeholder="Min"
                              />
                              <input 
                                type="number" 
                                defaultValue="8.5"
                                step="0.1"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                                placeholder="Max"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Bacterial Count Threshold (ppm)
                            </label>
                            <input 
                              type="number" 
                              defaultValue="100"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                          </div>
                          
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Alert Response Time Target (minutes)
                            </label>
                            <input 
                              type="number" 
                              defaultValue="15"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Notification Settings */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">Email Alerts</h4>
                            <p className="text-sm text-gray-600">Send email notifications for new alerts</p>
                          </div>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                            <p className="text-sm text-gray-600">Send SMS for high priority alerts</p>
                          </div>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-900">System Backup</h4>
                            <p className="text-sm text-gray-600">Daily automated system backup</p>
                          </div>
                          <input type="checkbox" defaultChecked className="rounded" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button className="bg-green-600 hover:bg-green-700">
                        Save Configuration
                      </Button>
                      <Button variant="outline">
                        Reset to Defaults
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* System Logs Tab */}
            <TabsContent value="logs">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>📋</span>
                    <span>System Activity Logs</span>
                  </CardTitle>
                  <CardDescription>
                    Monitor system activity, user actions, and error logs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead>Timestamp</TableHead>
                          <TableHead>Level</TableHead>
                          <TableHead>User</TableHead>
                          <TableHead>Action</TableHead>
                          <TableHead>Module</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {systemLogs.map((log, index) => (
                          <TableRow key={index} className="hover:bg-gray-50">
                            <TableCell className="font-mono text-sm">
                              {log.timestamp}
                            </TableCell>
                            <TableCell>
                              <Badge className={getLogLevelColor(log.level)}>
                                {log.level}
                              </Badge>
                            </TableCell>
                            <TableCell>{log.user}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {log.action}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{log.module}</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Showing latest 50 entries
                    </span>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Export Logs</Button>
                      <Button variant="outline" size="sm">Refresh</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>

        <Footer />
      </div>
    </div>
  );
}