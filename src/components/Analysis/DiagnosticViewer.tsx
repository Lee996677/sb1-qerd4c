import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCw, Maximize2 } from 'lucide-react';

interface Annotation {
  x: number;
  y: number;
  label: string;
  confidence: number;
}

interface DiagnosticViewerProps {
  imageUrl: string;
  annotations: Annotation[];
  findings: string[];
}

export function DiagnosticViewer({ imageUrl, annotations, findings }: DiagnosticViewerProps) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="bg-slate-750 rounded-2xl shadow-soft p-6 text-white">
      <div className="relative group">
        <motion.div
          className="relative overflow-hidden rounded-xl bg-black"
          style={{ aspectRatio: '4/3' }}
        >
          <motion.img
            src={imageUrl}
            alt="X-ray diagnostic image"
            className="w-full h-full object-contain"
            style={{
              scale,
              rotate: rotation,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          {annotations.map((annotation, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{ left: `${annotation.x}%`, top: `${annotation.y}%` }}
            >
              <div className="relative">
                <div className="absolute -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-accent-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-accent-400 rounded-full animate-ping opacity-75" />
                </div>
                <div className="absolute left-6 -translate-y-1/2 bg-slate-750/90 px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {annotation.label}
                  <div className="text-xs text-accent-300">{annotation.confidence}% confidence</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setScale(scale + 0.1)}
            className="p-2 bg-slate-750/90 rounded-full hover:bg-slate-700"
          >
            <ZoomIn className="h-5 w-5 text-primary-300" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setScale(Math.max(0.5, scale - 0.1))}
            className="p-2 bg-slate-750/90 rounded-full hover:bg-slate-700"
          >
            <ZoomOut className="h-5 w-5 text-primary-300" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setRotation(rotation + 90)}
            className="p-2 bg-slate-750/90 rounded-full hover:bg-slate-700"
          >
            <RotateCw className="h-5 w-5 text-primary-300" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-slate-750/90 rounded-full hover:bg-slate-700"
          >
            <Maximize2 className="h-5 w-5 text-primary-300" />
          </motion.button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-primary-300 mb-3">AI Findings</h3>
        <div className="space-y-2">
          {findings.map((finding, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 text-sm"
            >
              <div className="w-2 h-2 bg-primary-400 rounded-full" />
              <span className="text-gray-200">{finding}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}