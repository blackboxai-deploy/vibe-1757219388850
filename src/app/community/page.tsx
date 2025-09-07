"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CommunityPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock community data
  const publicAdvisories = [
    {
      id: "ADV-001",
      title: "Water Safety Advisory - District 7",
      type: "Water Safety",
      severity: "High",
      date: "2024-01-16",
      message: "Residents in District 7 (Riverside area) should boil water for drinking and cooking until further notice. Use bottled water when possible.",
      actions: ["Boil water for 3+ minutes", "Use bottled water", "Avoid ice cubes", "Report illness immediately"],
      status: "Active"
    },
    {
      id: "ADV-002",
      title: "Health Prevention Tips - Cholera Prevention",
      type: "Prevention",
      severity: "Medium", 
      date: "2024-01-15",
      message: "Follow these important steps to protect yourself and your family from water-borne diseases during the current health situation.",
      actions: ["Wash hands frequently", "Drink only safe water", "Eat freshly cooked food", "Maintain proper hygiene"],
      status: "Active"
    },
    {
      id: "ADV-003",
      title: "Community Vaccination Drive",
      type: "Vaccination",
      severity: "Low",
      date: "2024-01-14",
      message: "Free hepatitis A vaccinations available at Central Health Center. No appointment needed. Bring ID and health records.",
      actions: ["Bring identification", "Arrive early", "Bring health records", "Follow up in 6 months"],
      status: "Ongoing"
    }
  ];

  const healthResources = [
    {
      title: "Water Safety Guidelines",
      description: "Comprehensive guide on ensuring safe drinking water at home",
      type: "Guide",
      downloadUrl: "#",
      readTime: "5 min read"
    },
    {
      title: "Disease Prevention Checklist",
      description: "Daily practices to prevent water-borne diseases",
      type: "Checklist", 
      downloadUrl: "#",
      readTime: "3 min read"
    },
    {
      title: "Emergency Contact Numbers",
      description: "Important phone numbers for health emergencies and reporting",
      type: "Reference",
      downloadUrl: "#",
      readTime: "1 min read"
    },
    {
      title: "Symptom Recognition Guide",
      description: "How to identify symptoms of common water-borne diseases",
      type: "Guide",
      downloadUrl: "#",
      readTime: "7 min read"
    }
  ];

  const communityStats = [
    {
      title: "Population Monitored",
      value: "24,580",
      description: "Total residents under health surveillance",
      icon: "👥"
    },
    {
      title: "Safe Water Access",
      value: "94.2%",
      description: "Households with access to safe drinking water",
      icon: "💧"
    },
    {
      title: "Vaccination Rate",
      value: "87.5%",
      description: "Community vaccination coverage",
      icon: "💉"
    },
    {
      title: "Health Centers",
      value: "12",
      description: "Active health facilities in the area",
      icon: "🏥"
    }
  ];

  const reportingForm = {
    categories: [
      "Water Quality Concern",
      "Illness/Symptoms", 
      "Sanitation Issue",
      "Vaccination Query",
      "General Health Question"
    ]
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
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
            <h1 className="text-3xl font-bold text-gray-900">Community Health Portal</h1>
            <p className="text-gray-600 mt-2">
              Public health information, advisories, and community resources
            </p>
          </div>

          {/* Community Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {communityStats.map((stat, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{stat.icon}</div>
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm font-medium text-gray-700">{stat.title}</p>
                      <p className="text-xs text-gray-500">{stat.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="advisories" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="advisories">Health Advisories</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="reporting">Report Issue</TabsTrigger>
              <TabsTrigger value="vaccination">Vaccination</TabsTrigger>
            </TabsList>

            {/* Health Advisories Tab */}
            <TabsContent value="advisories">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>📢</span>
                    <span>Current Health Advisories</span>
                  </CardTitle>
                  <CardDescription>
                    Important health announcements and safety advisories for the community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {publicAdvisories.map((advisory) => (
                      <Alert key={advisory.id} className={`border-l-4 ${
                        advisory.severity === 'High' ? 'border-l-red-500' :
                        advisory.severity === 'Medium' ? 'border-l-yellow-500' :
                        'border-l-blue-500'
                      }`}>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <AlertTitle className="text-lg">{advisory.title}</AlertTitle>
                              <Badge className={getSeverityColor(advisory.severity)}>
                                {advisory.severity} Priority
                              </Badge>
                            </div>
                            <AlertDescription className="text-gray-700 mb-4">
                              {advisory.message}
                            </AlertDescription>
                            
                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                              <h4 className="font-medium text-gray-900 mb-2">Recommended Actions:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                {advisory.actions.map((action, index) => (
                                  <li key={index}>{action}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span>Category: {advisory.type}</span>
                              <span>Issued: {advisory.date}</span>
                              <Badge variant="outline">{advisory.status}</Badge>
                            </div>
                          </div>
                        </div>
                      </Alert>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>📚</span>
                    <span>Health Resources & Education</span>
                  </CardTitle>
                  <CardDescription>
                    Educational materials and guides for maintaining community health
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {healthResources.map((resource, index) => (
                      <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{resource.readTime}</span>
                          <Button size="sm" variant="outline">
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Emergency Contacts */}
                  <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">Emergency Contacts</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div><strong>Health Emergency:</strong> 📞 911</div>
                        <div><strong>Health Department:</strong> 📞 (555) 123-4567</div>
                        <div><strong>Water Quality Hotline:</strong> 📞 (555) 987-6543</div>
                      </div>
                      <div className="space-y-2">
                        <div><strong>Disease Reporting:</strong> 📞 (555) 456-7890</div>
                        <div><strong>Community Health Center:</strong> 📞 (555) 321-0987</div>
                        <div><strong>24/7 Nurse Line:</strong> 📞 (555) 111-2222</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reporting Tab */}
            <TabsContent value="reporting">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>📝</span>
                    <span>Report Health Concerns</span>
                  </CardTitle>
                  <CardDescription>
                    Report health issues, water quality problems, or ask questions to health officials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-w-2xl mx-auto">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Number *
                          </label>
                          <input 
                            type="tel" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location/Address *
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your location or address"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Report Category *
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="">Select a category</option>
                          {reportingForm.categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description *
                        </label>
                        <textarea 
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Please describe the issue or concern in detail..."
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="urgent" className="rounded" />
                        <label htmlFor="urgent" className="text-sm text-gray-700">
                          This is an urgent health concern
                        </label>
                      </div>
                      
                      <div className="flex space-x-4">
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          Submit Report
                        </Button>
                        <Button type="button" variant="outline">
                          Call Instead
                        </Button>
                      </div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Vaccination Tab */}
            <TabsContent value="vaccination">
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>💉</span>
                    <span>Community Vaccination Program</span>
                  </CardTitle>
                  <CardDescription>
                    Information about available vaccines and immunization schedules
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Current Vaccination Drive */}
                    <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                      <h3 className="text-xl font-semibold text-green-900 mb-4">
                        🎯 Current Vaccination Drive: Hepatitis A
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Schedule & Locations</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>📅 <strong>Dates:</strong> January 15-30, 2024</li>
                            <li>🕐 <strong>Hours:</strong> 9:00 AM - 4:00 PM</li>
                            <li>🏥 <strong>Location:</strong> Central Health Center</li>
                            <li>💰 <strong>Cost:</strong> Free of charge</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>✅ Valid ID or proof of residence</li>
                            <li>✅ Previous vaccination records (if available)</li>
                            <li>✅ No appointment necessary</li>
                            <li>⚠️ Ages 12 months and older</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button className="bg-green-600 hover:bg-green-700">
                          Get Directions to Health Center
                        </Button>
                      </div>
                    </div>

                    {/* Vaccination Statistics */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Vaccination Coverage</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">87.5%</div>
                          <div className="text-sm text-gray-600">Hepatitis A</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">92.1%</div>
                          <div className="text-sm text-gray-600">Typhoid</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">84.3%</div>
                          <div className="text-sm text-gray-600">Cholera</div>
                        </div>
                      </div>
                    </div>

                    {/* Information */}
                    <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">
                        📋 Vaccination Information
                      </h3>
                      <div className="space-y-3 text-sm text-blue-800">
                        <p>
                          <strong>Why get vaccinated?</strong> Vaccines protect you and your community from preventable diseases, especially important during disease outbreaks.
                        </p>
                        <p>
                          <strong>Side effects:</strong> Most people experience only mild side effects like soreness at the injection site. Serious reactions are rare.
                        </p>
                        <p>
                          <strong>Questions?</strong> Contact our vaccination hotline at (555) 123-VACC or speak with your healthcare provider.
                        </p>
                      </div>
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