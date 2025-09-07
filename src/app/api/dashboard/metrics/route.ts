import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Simulate real-time data with slight variations
    const variations = {
      cases: Math.floor(Math.random() * 5) + 22, // 22-26 cases
      waterSources: 156 + Math.floor(Math.random() * 3), // 156-158 sources
      coverage: (94.2 + (Math.random() * 0.6 - 0.3)).toFixed(1) // 93.9-94.5%
    };

    const healthMetrics = [
      {
        title: "Active Disease Cases",
        value: variations.cases.toString(),
        change: variations.cases > 24 ? "+2" : "-1",
        trend: variations.cases > 24 ? "up" : "down",
        icon: "🦠",
        description: "Total confirmed cases this month",
        color: "text-red-600",
        details: {
          thisWeek: Math.floor(variations.cases * 0.3),
          lastWeek: Math.floor(variations.cases * 0.4),
          critical: Math.floor(variations.cases * 0.1)
        }
      },
      {
        title: "Water Sources Monitored",
        value: variations.waterSources.toString(),
        change: "+3",
        trend: "up",
        icon: "💧",
        description: "Sources under surveillance",
        color: "text-blue-600",
        details: {
          safe: Math.floor(variations.waterSources * 0.79),
          caution: Math.floor(variations.waterSources * 0.15),
          unsafe: Math.floor(variations.waterSources * 0.06)
        }
      },
      {
        title: "Community Alert Level",
        value: variations.cases > 25 ? "MEDIUM" : "LOW",
        change: "Stable",
        trend: "stable",
        icon: "🚨", 
        description: "Current risk assessment",
        color: variations.cases > 25 ? "text-yellow-600" : "text-green-600",
        details: {
          riskScore: variations.cases > 25 ? 6 : 3,
          activeAlerts: variations.cases > 25 ? 8 : 3,
          resolvedToday: 2
        }
      },
      {
        title: "Population Coverage",
        value: `${variations.coverage}%`,
        change: "+0.2%",
        trend: "up",
        icon: "👥",
        description: "Communities under monitoring",
        color: "text-purple-600",
        details: {
          totalPopulation: 24580,
          covered: Math.floor(24580 * parseFloat(variations.coverage) / 100),
          newRegistrations: 45
        }
      }
    ];

    return NextResponse.json({
      success: true,
      data: healthMetrics,
      timestamp: new Date().toISOString(),
      systemStatus: {
        uptime: "99.97%",
        lastUpdate: new Date().toLocaleTimeString(),
        dataFreshness: "Real-time"
      }
    });

  } catch (error) {
    console.error('Dashboard metrics error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch dashboard metrics'
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { refreshType } = await request.json();
    
    // Simulate data refresh based on type
    let refreshResult = {
      type: refreshType || 'full',
      timestamp: new Date().toISOString(),
      recordsUpdated: Math.floor(Math.random() * 100) + 50,
      status: 'completed'
    };

    return NextResponse.json({
      success: true,
      data: refreshResult,
      message: `Dashboard ${refreshType} refresh completed successfully`
    });

  } catch (error) {
    console.error('Dashboard refresh error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to refresh dashboard data'
    }, { status: 500 });
  }
}