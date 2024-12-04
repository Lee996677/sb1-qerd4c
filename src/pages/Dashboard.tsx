import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, Clock, FileCheck } from 'lucide-react';
import { StatsCard } from '../components/shared/StatsCard';
import { DiagnosticViewer } from '../components/Analysis/DiagnosticViewer';
import { AnalyticsChart } from '../components/Dashboard/AnalyticsChart';

const sampleDiagnostic = {
  imageUrl: 'https://as2.ftcdn.net/v2/jpg/09/69/41/37/1000_F_969413747_qjNOXmahqg0yEhWVBlaxjmp6X5sbndKw.jpg',
  annotations: [
    { x: 35, y: 45, label: 'Hip joint alignment', confidence: 98 },
    { x: 55, y: 60, label: 'Femoral head position', confidence: 95 },
    { x: 70, y: 40, label: 'Acetabular rim', confidence: 92 }
  ],
  findings: [
    'Mild hip dysplasia detected in left hip joint',
    'Normal acetabular coverage on right side',
    'No signs of degenerative joint disease',
    'Bone density within normal limits'
  ]
};

const stats = [
  {
    title: 'Total Analyses',
    value: '1,284',
    icon: Activity,
    change: '+12.5%',
    changeType: 'increase' as const,
    gradient: 'from-primary-400 to-primary-600'
  },
  {
    title: 'AI Accuracy',
    value: '97.8%',
    icon: Brain,
    change: '+2.1%',
    changeType: 'increase' as const,
    gradient: 'from-accent-400 to-accent-600'
  },
  {
    title: 'Avg. Processing',
    value: '1.2s',
    icon: Clock,
    change: '-0.3s',
    changeType: 'decrease' as const,
    gradient: 'from-primary-400 to-accent-400'
  },
  {
    title: 'Completed Today',
    value: '48',
    icon: FileCheck,
    change: '+8',
    changeType: 'increase' as const,
    gradient: 'from-accent-600 to-primary-600'
  }
];

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DiagnosticViewer {...sampleDiagnostic} />
        <AnalyticsChart />
      </div>
    </motion.div>
  );
}