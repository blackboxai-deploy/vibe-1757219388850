"use client";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Community Health Monitoring System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Early Warning System for Water-Borne Diseases
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Disease Monitoring</h3>
            <p className="text-gray-600 mb-4">Track and monitor water-borne disease cases in real-time</p>
            <div className="text-2xl font-bold text-blue-600">0 Active Cases</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Water Quality</h3>
            <p className="text-gray-600 mb-4">Monitor water sources and quality indicators</p>
            <div className="text-2xl font-bold text-green-600">Safe</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Alert Status</h3>
            <p className="text-gray-600 mb-4">Current community health alert level</p>
            <div className="text-2xl font-bold text-yellow-600">Normal</div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Welcome to the Smart Community Health Monitoring System. This platform helps communities track water-borne diseases and maintain public health safety.
          </p>
          <div className="space-x-4">
            <a 
              href="/dashboard"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Dashboard
            </a>
            <a 
              href="/diseases"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Report Case
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}