import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const recentAnalyses = [
  {
    id: 1,
    patientName: 'Max',
    species: 'Dog',
    type: 'X-Ray Analysis',
    date: '2024-03-15',
    status: 'Completed',
    confidence: 98,
  },
  {
    id: 2,
    patientName: 'Luna',
    species: 'Cat',
    type: 'MRI Scan',
    date: '2024-03-14',
    status: 'Processing',
    confidence: null,
  },
];

export function RecentAnalyses() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Analyses</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {recentAnalyses.map((analysis) => (
          <div key={analysis.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{analysis.patientName}</h3>
                <p className="text-sm text-gray-500">{analysis.species} - {analysis.type}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                analysis.status === 'Completed' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {analysis.status}
              </span>
            </div>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {analysis.date}
              </div>
              {analysis.confidence && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {analysis.confidence}% confidence
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}