'use client';

import { useState } from 'react';
import { TrendingUp, Activity, Award } from 'lucide-react';
import NewsFeed from '@/components/NewsFeed';

export default function Dashboard() {
  const metrics = [
    { label: 'Active Projects', value: '5', icon: Activity, color: 'bg-green-500' },
    { label: 'Team Velocity', value: '87%', icon: TrendingUp, color: 'bg-blue-500' },
    { label: 'Recent Wins', value: '3', icon: Award, color: 'bg-purple-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{metric.label}</p>
                  <p className="text-3xl font-bold mt-2">{metric.value}</p>
                </div>
                <div className={`${metric.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live News Feed */}
      <div className="bg-white rounded-lg shadow mb-8">
        <NewsFeed />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Quick Access</h3>
          <div className="space-y-3">
            <a href="/tools" className="block text-thresh-blue hover:underline">→ Tools & Apps</a>
            <a href="/sops" className="block text-thresh-blue hover:underline">→ SOPs & Documentation</a>
            <a href="/team" className="block text-thresh-blue hover:underline">→ Team Directory</a>
            <a href="/projects" className="block text-thresh-blue hover:underline">→ Active Projects</a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold mb-4">Recent Updates</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>• New onboarding guide for Product Managers</p>
            <p>• Updated coding standards in SOPs</p>
            <p>• Charter project moved to QA phase</p>
            <p>• Team meeting scheduled for Friday 2pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}