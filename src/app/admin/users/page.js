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

      {/* Table */}
      <div className="space-y-3">
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            className="flex justify-between items-center border rounded-md p-3 bg-white"
          >
            <div className="flex-1">{user.name}</div>
            <div className="flex-1">{user.email}</div>
            <div className="flex-1">{user.role}</div>
            <div className="flex gap-3">
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

      {/* Pagination placeholder */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="cursor-pointer">1</span>
        <span className="cursor-pointer">2</span>
        <span className="cursor-pointer">3</span>
        <span className="cursor-pointer">4</span>
      </div>
    </div>
  );
}

export default UserManagement;
