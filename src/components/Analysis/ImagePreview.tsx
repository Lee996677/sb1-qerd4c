import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

interface ImagePreviewProps {
  imageUrl: string;
  findings: string[];
}

export function ImagePreview({ imageUrl, findings }: ImagePreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="relative">
        <motion.img
          src={imageUrl}
          alt="Diagnostic Image"
          className="w-full rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
            <ZoomIn className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
            <ZoomOut className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
            <RotateCw className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-medium text-gray-900 mb-2">AI Findings</h4>
        <ul className="space-y-2">
          {findings.map((finding, index) => (
            <motion.li
              key={index}
              className="flex items-center text-sm text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
              {finding}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}