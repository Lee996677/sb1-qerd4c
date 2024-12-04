import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Image, 
  History, 
  Settings, 
  Users, 
  HelpCircle 
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'New Analysis', icon: Image, path: '/analysis/new' },
  { name: 'History', icon: History, path: '/history' },
  { name: 'Patients', icon: Users, path: '/patients' },
  { name: 'Settings', icon: Settings, path: '/settings' },
  { name: 'Help', icon: HelpCircle, path: '/help' },
];

export function Sidebar() {
  return (
    <aside className="bg-white w-64 min-h-screen border-r border-gray-200">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}