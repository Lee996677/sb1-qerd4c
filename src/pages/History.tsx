import React from 'react';
import { Calendar, Clock, Search, Filter } from 'lucide-react';

const analyses = [
  {
    id: 1,
    patientName: 'Max',
    species: 'Dog',
    type: 'X-Ray Analysis',
    date: '2024-03-15',
    status: 'Completed',
    confidence: 98,
    veterinarian: 'Dr. Smith',
  },
  {
    id: 2,
    patientName: 'Luna',
    species: 'Cat',
    type: 'MRI Scan',
    date: '2024-03-14',
    status: 'Processing',
    confidence: null,
    veterinarian: 'Dr. Johnson',
  },
  // Add more analyses here
];

export function History() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Analysis History</h2>
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search analyses..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="h-5 w-5 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {analyses.map((analysis) => (
            <div key={analysis.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {analysis.patientName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {analysis.species} - {analysis.type}
                  </p>
                  <p className="text-sm text-gray-500">{analysis.veterinarian}</p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    analysis.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
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
    </div>
  );
}