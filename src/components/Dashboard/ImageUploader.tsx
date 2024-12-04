import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function ImageUploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('Dropped files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.dcm'],
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow p-6"
    >
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center">
          <Upload className={`h-12 w-12 mb-4 ${
            isDragActive ? 'text-blue-500' : 'text-gray-400'
          }`} />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {isDragActive ? 'Drop files here' : 'Upload Diagnostic Images'}
          </h3>
          <p className="text-sm text-gray-500 mb-4 text-center">
            Drag and drop your images here, or click to select files
            <br />
            <span className="text-xs">
              Supports: X-Ray, MRI, CT scan images (DICOM, JPEG, PNG)
            </span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Select Files
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}