export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side - Branding */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">HealthGuard</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-600">
              Smart Community Health Monitoring System
            </span>
          </div>

          {/* Center - Quick Links */}
          <div className="flex items-center space-x-6">
            <a href="/help" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Help Center
            </a>
            <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
            <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact Support
            </a>
          </div>

          {/* Right Side - Copyright */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              © {currentYear} HealthGuard. All rights reserved.
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400">Version 2.1.0</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-500">System Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-xs text-gray-500">
              Powered by AI-driven health analytics and real-time monitoring technology
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Last Updated: {new Date().toLocaleDateString()}</span>
              <span>•</span>
              <span>Data Refresh: Every 5 minutes</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Monitoring Active</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}