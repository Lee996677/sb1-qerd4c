import React from 'react';
import { Search, Plus, Dog, Cat } from 'lucide-react';

const patients = [
  {
    id: 1,
    name: 'Max',
    species: 'Dog',
    breed: 'German Shepherd',
    age: 5,
    owner: 'John Smith',
    lastVisit: '2024-03-15',
  },
  {
    id: 2,
    name: 'Luna',
    species: 'Cat',
    breed: 'Persian',
    age: 3,
    owner: 'Sarah Johnson',
    lastVisit: '2024-03-14',
  },
  // Add more patients here
];

export function Patients() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Patients</h2>
            <div className="flex space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <Plus className="h-5 w-5 mr-2" />
                Add Patient
              </button>
            </div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {patients.map((patient) => (
            <div key={patient.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {patient.species === 'Dog' ? (
                      <Dog className="h-6 w-6 text-blue-600" />
                    ) : (
                      <Cat className="h-6 w-6 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {patient.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {patient.species} • {patient.breed} • {patient.age} years old
                    </p>
                    <p className="text-sm text-gray-500">Owner: {patient.owner}</p>
                    <p className="text-sm text-gray-500">
                      Last Visit: {patient.lastVisit}
                    </p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}