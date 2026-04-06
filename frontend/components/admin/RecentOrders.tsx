"use client";

import React from "react";

const RecentOrders = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Son kirayələr</h3>
      </div>

      <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-sm text-gray-500">
        Backend contract-da admin üçün bütün rentals/orders siyahısını gətirən ümumi endpoint yoxdur.
        Ona görə bu blok hələlik boş saxlanılıb.
      </div>
    </div>
  );
};

export default RecentOrders;
