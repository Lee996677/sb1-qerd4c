import React from 'react';
import { BarChart2, Activity, Clock, FileCheck } from 'lucide-react';

const stats = [
  {
    name: 'Total Analyses',
    value: '1,284',
    icon: BarChart2,
    change: '+12.5%',
    changeType: 'increase',
  },
  {
    name: 'Average Accuracy',
    value: '97.8%',
    icon: Activity,
    change: '+2.1%',
    changeType: 'increase',
  },
  {
    name: 'Processing Time',
    value: '1.2s',
    icon: Clock,
    change: '-0.3s',
    changeType: 'decrease',
  },
  {
    name: 'Completed Today',
    value: '48',
    icon: FileCheck,
    change: '+8',
    changeType: 'increase',
  },
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <stat.icon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{stat.name}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
          <div className="mt-2">
            <span className={`text-sm ${
              stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}