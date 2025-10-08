"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const jobData = [
  { id: 1, title: "Data Analyst", company: "abc Tech", date: "2025-06-10", status: "rejected", postedBy: "Admin" },
  { id: 2, title: "Accountant", company: "Rt Solutions", date: "2025-07-14", status: "approved", postedBy: "HR" },
  { id: 3, title: "Software Developer", company: "Telemindz", date: "2025-05-20", status: "rejected", postedBy: "Recruiter" },
  { id: 4, title: "UI Designer", company: "Mindgen Tech", date: "2025-03-10", status: "approved", postedBy: "Admin" },
  { id: 5, title: "HTML Developer", company: "Techmantra", date: "2025-04-13", status: "approved", postedBy: "HR" },
];

export default function JobApproval() {
  const [search, setSearch] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const filteredJobs = jobData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesPostedBy = postedBy ? job.postedBy === postedBy : true;
    const matchesDate = date ? job.date === date : true;
    const matchesStatus = status ? job.status === status : true;
    return matchesSearch && matchesPostedBy && matchesDate && matchesStatus;
  });

  return (
    <div className="p-6">
      {/* ---------------- Filters ---------------- */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by job or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-md pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-3">
          {/* Posted By */}
          <select
            value={postedBy}
            onChange={(e) => setPostedBy(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Posted By</option>
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
            <option value="Recruiter">Recruiter</option>
          </select>

          {/* Date Picker */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Status</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* ---------------- Desktop Table ---------------- */}
      <div className="hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2">Job Title</th>
              <th className="p-2">Company</th>
              <th className="p-2">Date Posted</th>
              <th className="p-2">Status</th>
              <th className="p-2">Posted By</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job) => (
              <tr key={job.id} className="border-t hover:bg-gray-50 transition">
                <td className="p-2">{job.title}</td>
                <td className="p-2">{job.company}</td>
                <td className="p-2">{job.date}</td>
                <td className="p-2 capitalize">
                  <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      job.status === "approved" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {job.status}
                </td>
                <td className="p-2">{job.postedBy}</td>
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

      {/* ---------------- Mobile Cards ---------------- */}
      <div className="space-y-4 md:hidden">
        {filteredJobs.map((job) => (
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
            <p className="text-sm text-gray-500 mt-1">Posted on: {job.date}</p>
            <p className="text-sm text-gray-500">Posted By: {job.postedBy}</p>

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

      {/* ---------------- Pagination ---------------- */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="cursor-pointer px-2 py-1 border rounded">1</span>
        <span className="cursor-pointer px-2 py-1 border rounded">2</span>
        <span className="cursor-pointer px-2 py-1 border rounded">3</span>
      </div>
    </div>
  );
}
