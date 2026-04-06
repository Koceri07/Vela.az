"use client";

import React from "react";

interface OrderTableProps {
  searchTerm: string;
  statusFilter: string;
}

const OrderTable: React.FC<OrderTableProps> = ({ searchTerm, statusFilter }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-8 text-center text-sm text-gray-500">
        Admin üçün bütün sifarişləri və ya rentals siyahısını gətirən ümumi endpoint backend contract-da yoxdur.
        Axtarış: <span className="font-semibold">{searchTerm || "-"}</span>, status:{" "}
        <span className="font-semibold">{statusFilter}</span>.
      </div>
    </div>
  );
};

export default OrderTable;
