"use client";
import { useState } from "react";

const jobData = [
  { id: 1, title: "Data Analyst", company: "abc Tech", date: "10/06/2025", status: "rejected" },
  { id: 2, title: "Accountant", company: "Rt Solutions", date: "14/07/2025", status: "approved" },
  { id: 3, title: "Software Developer", company: "Telemindz", date: "20/05/2025", status: "rejected" },
  { id: 4, title: "Ui Designer", company: "Mindgen Tech", date: "10/03/2025", status: "approved" },
  { id: 5, title: "Html Developer", company: "Techmantra", date: "13/04/2025", status: "approved" },
];

function JobApproval() {
  const [search, setSearch] = useState("");

  const filteredUsers = jobData.filter(
    (u) =>
      u.title.toLowerCase().includes(search.toLowerCase()) ||
      u.company.toLowerCase().includes(search.toLowerCase()) ||
      u.date.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by job, company or date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/3 p-2 border rounded-md outline-none"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2">Job Title</th>
              <th className="p-2">Company</th>
              <th className="p-2">Date Posted</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((job) => (
              <tr key={job.id} className="border-t">
                <td className="p-2">{job.title}</td>
                <td className="p-2">{job.company}</td>
                <td className="p-2">{job.date}</td>
                <td className="p-2">
                  <span
                    className={`inline-block w-4 h-4 rounded-full ${
                      job.status === "approved" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </td>
                <td className="p-2 flex gap-2">
                  {job.status === "rejected" && (
                    <button className="bg-green-500 text-white px-2 py-1 text-sm rounded">
                      Shortlist
                    </button>
                  )}
                  <button className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {filteredUsers.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{job.title}</h3>
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  job.status === "approved" ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </div>
            <p className="text-sm text-gray-600">{job.company}</p>
            <p className="text-sm text-gray-500">Posted on: {job.date}</p>
            <div className="mt-3 flex gap-2">
              {job.status === "rejected" && (
                <button className="bg-green-500 text-white px-2 py-1 text-sm rounded">
                  Shortlist
                </button>
              )}
              <button className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="cursor-pointer px-2 py-1 border rounded">1</span>
        <span className="cursor-pointer px-2 py-1 border rounded">2</span>
        <span className="cursor-pointer px-2 py-1 border rounded">3</span>
        <span className="cursor-pointer px-2 py-1 border rounded">4</span>
      </div>
    </div>
  );
}

export default JobApproval;
