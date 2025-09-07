"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DiseasesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // Mock disease case data
  const diseaseCases = [
    {
      id: "CASE-001",
      patientId: "PT-2024-001",
      disease: "Cholera",
      severity: "High",
      status: "Active",
      location: "District 7 - Riverside",
      reportedDate: "2024-01-15",
      symptoms: ["Severe diarrhea", "Vomiting", "Dehydration"],
      age: 34,
      gender: "Female",
      reportedBy: "Dr. Smith"
    },
    {
      id: "CASE-002", 
      patientId: "PT-2024-002",
      disease: "Typhoid",
      severity: "Medium",
      status: "Under Treatment",
      location: "Central District",
      reportedDate: "2024-01-14",
      symptoms: ["Fever", "Headache", "Abdominal pain"],
      age: 28,
      gender: "Male",
      reportedBy: "Dr. Johnson"
    },
    {
      id: "CASE-003",
      patientId: "PT-2024-003", 
      disease: "Hepatitis A",
      severity: "Low",
      status: "Recovering",
      location: "Mountain View",
      reportedDate: "2024-01-12",
      symptoms: ["Jaundice", "Fatigue", "Loss of appetite"],
      age: 45,
      gender: "Male",
      reportedBy: "Dr. Williams"
    },
    {
      id: "CASE-004",
      patientId: "PT-2024-004",
      disease: "Cholera", 
      severity: "High",
      status: "Critical",
      location: "District 7 - Riverside",
      reportedDate: "2024-01-16",
      symptoms: ["Severe dehydration", "Shock", "Vomiting"],
      age: 67,
      gender: "Male",
      reportedBy: "Dr. Smith"
    },
    {
      id: "CASE-005",
      patientId: "PT-2024-005",
      disease: "Dysentery",
      severity: "Medium", 
      status: "Active",
      location: "East Village",
      reportedDate: "2024-01-13",
      symptoms: ["Bloody diarrhea", "Fever", "Cramping"],
      age: 22,
      gender: "Female",
      reportedBy: "Dr. Brown"
    }
  ];

  const diseaseStats = [
    { name: "Cholera", total: 12, active: 8, critical: 2, trend: -5 },
    { name: "Typhoid", total: 8, active: 5, critical: 1, trend: +2 },
    { name: "Hepatitis A", total: 4, active: 2, critical: 0, trend: -1 },
    { name: "Dysentery", total: 3, active: 1, critical: 0, trend: +1 }
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
      case "critical": return "bg-red-100 text-red-800";
      case "active": return "bg-orange-100 text-orange-800";
      case "under treatment": return "bg-blue-100 text-blue-800";
      case "recovering": return "bg-green-100 text-green-800";
      case "resolved": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredCases = diseaseCases.filter(case_ => {
    const diseaseMatch = selectedDisease === "all" || case_.disease.toLowerCase() === selectedDisease;
    const statusMatch = selectedStatus === "all" || case_.status.toLowerCase().replace(" ", "-") === selectedStatus;
    return diseaseMatch && statusMatch;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Disease Tracking & Management</h1>
            <p className="text-gray-600 mt-2">
              Monitor and manage water-borne disease cases in the community
            </p>
          </div>

          {/* Disease Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {diseaseStats.map((disease, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{disease.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Cases</span>
                      <span className="font-bold text-lg">{disease.total}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Active</span>
                      <span className="font-medium text-orange-600">{disease.active}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Critical</span>
                      <span className="font-medium text-red-600">{disease.critical}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-sm text-gray-600">Trend</span>
                      <span className={`font-medium ${
                        disease.trend > 0 ? "text-red-600" :
                        disease.trend < 0 ? "text-green-600" :
                        "text-gray-600"
                      }`}>
                        {disease.trend > 0 ? "+" : ""}{disease.trend}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Management */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <span>🦠</span>
                    <span>Disease Cases</span>
                  </CardTitle>
                  <CardDescription>
                    Current disease cases requiring attention and monitoring
                  </CardDescription>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    + Report New Case
                  </Button>
                  <Button variant="outline">
                    Export Data
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
                <div className="flex-1">
                  <Input placeholder="Search by patient ID or location..." className="w-full" />
                </div>
                <Select value={selectedDisease} onValueChange={setSelectedDisease}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Disease Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Diseases</SelectItem>
                    <SelectItem value="cholera">Cholera</SelectItem>
                    <SelectItem value="typhoid">Typhoid</SelectItem>
                    <SelectItem value="hepatitis a">Hepatitis A</SelectItem>
                    <SelectItem value="dysentery">Dysentery</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Case Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="under-treatment">Under Treatment</SelectItem>
                    <SelectItem value="recovering">Recovering</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Cases Table */}
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead>Case ID</TableHead>
                      <TableHead>Disease</TableHead>
                      <TableHead>Patient Info</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Date Reported</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCases.map((case_) => (
                      <TableRow key={case_.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{case_.id}</TableCell>
                        <TableCell>{case_.disease}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{case_.patientId}</div>
                            <div className="text-sm text-gray-500">
                              {case_.gender}, {case_.age}y
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getSeverityColor(case_.severity)}>
                            {case_.severity}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(case_.status)}>
                            {case_.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{case_.location}</TableCell>
                        <TableCell className="text-sm">{case_.reportedDate}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">View</Button>
                            <Button size="sm" variant="outline">Edit</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Results Summary */}
              <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                <span>Showing {filteredCases.length} of {diseaseCases.length} cases</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
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