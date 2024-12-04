import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Mon', analyses: 65, accuracy: 97 },
  { date: 'Tue', analyses: 78, accuracy: 98 },
  { date: 'Wed', analyses: 82, accuracy: 96 },
  { date: 'Thu', analyses: 70, accuracy: 97 },
  { date: 'Fri', analyses: 85, accuracy: 98 },
  { date: 'Sat', analyses: 45, accuracy: 99 },
  { date: 'Sun', analyses: 40, accuracy: 98 },
];

export function AnalyticsChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Weekly Analytics</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorAnalyses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="analyses"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#colorAnalyses)"
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="accuracy"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#colorAccuracy)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}