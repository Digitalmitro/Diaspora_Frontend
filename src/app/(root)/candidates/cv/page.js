"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFilePdf, FaCheck, FaTimes, FaArrowLeft } from "react-icons/fa";

function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 ">
            <div className="flex items-center ">
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 text-sm rounded-md border hover:bg-gray-50"
                onClick={() => router.back()}
              >
                <FaArrowLeft /> Back
              </button>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="p-6">
            <div className="w-full h-[70vh] bg-gray-100 rounded-md border-dashed border-2 border-gray-200 flex flex-col items-center justify-center text-center">
              <FaFilePdf className="text-gray-400 text-6xl mb-4" />
              <p className="text-gray-500 mb-2">
                Resume preview will appear here
              </p>
              <p className="text-sm text-gray-400">(File comes from backend)</p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <FaFilePdf className="text-red-500" /> resume.pdf
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                <FaCheck /> Shortlist
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                <FaTimes /> Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
