"use client";

import React from "react";

interface ChartCardProps {
  title: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="h-80 flex items-center justify-center">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grid Lines */}
          <line x1="50" y1="250" x2="350" y2="250" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="50" y1="200" x2="350" y2="200" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="50" y1="150" x2="350" y2="150" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="50" y1="100" x2="350" y2="100" stroke="#e5e7eb" strokeWidth="1" />

          {/* Bar Chart */}
          <rect x="60" y="180" width="30" height="70" fill="#8E6969" opacity="0.8" rx="4" />
          <rect x="100" y="150" width="30" height="100" fill="#8E6969" opacity="0.8" rx="4" />
          <rect x="140" y="120" width="30" height="130" fill="#8E6969" rx="4" />
          <rect x="180" y="140" width="30" height="110" fill="#8E6969" opacity="0.8" rx="4" />
          <rect x="220" y="100" width="30" height="150" fill="#8E6969" rx="4" />
          <rect x="260" y="130" width="30" height="120" fill="#8E6969" opacity="0.8" rx="4" />
          <rect x="300" y="110" width="30" height="140" fill="#8E6969" rx="4" />

          {/* Axes */}
          <line x1="50" y1="50" x2="50" y2="250" stroke="#d1d5db" strokeWidth="2" />
          <line x1="50" y1="250" x2="350" y2="250" stroke="#d1d5db" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#8E6969] rounded-full"></div>
          <span className="text-sm text-gray-600">Satışlar</span>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
