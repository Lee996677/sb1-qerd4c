import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  changeType: 'increase' | 'decrease';
  gradient?: string;
}

export function StatsCard({ title, value, icon: Icon, change, changeType, gradient = 'from-blue-500 to-blue-600' }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
    >
      <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 bg-gradient-to-br ${gradient} rounded-bl-full`} />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div className="mt-4">
        <span className={`inline-flex items-center text-sm ${
          changeType === 'increase' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        }`}>
          {change}
          <svg
            className={`w-3 h-3 ml-1 ${changeType === 'increase' ? 'rotate-0' : 'rotate-180'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </span>
      </div>
    </motion.div>
  );
}