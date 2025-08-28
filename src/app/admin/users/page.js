"use client"
import React, { useState } from "react";

function UserManagement() {
  const [search, setSearch] = useState("");

  const users = [
    { name: "Kim", email: "kim@gmail.com", role: "Employer" },
    { name: "Gis", email: "gis@gmail.com", role: "Employee" },
    { name: "John", email: "john@gmail.com", role: "Employee" },
    { name: "Devid", email: "devid@gmail.com", role: "Employer" },
    { name: "Kin", email: "kin@gmail.com", role: "Employee" },
  ];

  // Filtered list
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/3 p-2 border rounded-md outline-none"
        />
      </div>

      {/* Table / Cards */}
      <div className="space-y-3">
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center border rounded-md p-3 bg-white"
          >
            {/* User Info */}
            <div className="flex flex-col sm:flex-row sm:gap-6 flex-1 text-sm sm:text-base">
              <span className="font-medium">{user.name}</span>
              <span className="text-gray-600">{user.email}</span>
              <span className="text-blue-600">{user.role}</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-3 sm:mt-0">
              <button className="px-3 py-1 rounded bg-green-500 text-white text-sm">
                View
              </button>
              <button className="px-3 py-1 rounded bg-gray-800 text-white text-sm">
                Ban
              </button>
              <button className="px-3 py-1 rounded bg-red-500 text-white text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2 text-sm sm:text-base">
        <span className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200">
          1
        </span>
        <span className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200">
          2
        </span>
        <span className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200">
          3
        </span>
        <span className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200">
          4
        </span>
      </div>
    </div>
  );
}

export default UserManagement;
