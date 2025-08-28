"use client"
import { useState } from "react";

function PaymentTable() {
  const [payments] = useState([
    { company: "abc Tech", plan: "Basic", price: "400$", status: "Pending" },
    { company: "Rt Solutions", plan: "Pro", price: "785$", status: "Paid" },
    { company: "Telemindz", plan: "Premium", price: "850$", status: "Paid" },
    { company: "Mindgen Tech", plan: "Premium", price: "158$", status: "Pending" },
    { company: "Techmantra", plan: "Basic", price: "210$", status: "Pending" },
  ]);

  const getStatusClass = (status) => {
    return status === "Paid" ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="flex justify-center items-center bg-white">
      <div className="w-full max-w-5xl p-4 sm:p-6">
        {/* Table for md+ screens */}
        <div className="hidden md:block">
          <table className="w-full border-collapse text-left shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Company</th>
                <th className="p-3">Plan</th>
                <th className="p-3">Price</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="p-3">{payment.company}</td>
                  <td className="p-3">{payment.plan}</td>
                  <td className="p-3 font-semibold">{payment.price}</td>
                  <td className={`p-3 font-semibold ${getStatusClass(payment.status)}`}>
                    {payment.status}
                  </td>
                  <td className="p-3 space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded">
                      View Invoice
                    </button>
                    <button className="bg-gray-800 text-white px-3 py-1 text-sm rounded">
                      Refund
                    </button>
                    <button className="bg-orange-500 text-white px-3 py-1 text-sm rounded">
                      Resend
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card view for mobile */}
        <div className="md:hidden space-y-4">
          {payments.map((payment, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm bg-gray-50"
            >
              <p className="font-semibold">{payment.company}</p>
              <p><span className="font-medium">Plan:</span> {payment.plan}</p>
              <p><span className="font-medium">Price:</span> {payment.price}</p>
              <p className={`${getStatusClass(payment.status)} font-semibold`}>
                {payment.status}
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded">
                  View Invoice
                </button>
                <button className="bg-gray-800 text-white px-3 py-1 text-sm rounded">
                  Refund
                </button>
                <button className="bg-orange-500 text-white px-3 py-1 text-sm rounded">
                  Resend
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-3">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className="text-black px-2 py-1 hover:underline"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentTable;
