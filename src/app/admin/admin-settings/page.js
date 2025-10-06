"use client";
import React, { useState } from "react";
import { FiTrash2, FiMoreVertical, FiPlus } from "react-icons/fi"; 
import { Switch } from "@headlessui/react"; 
export default function AdminSettings() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const [admins, setAdmins] = useState([
    { name: "Jenny Wilson", role: "Owner" },
    { name: "Darrell Steward", role: "Admin" },
    { name: "Kathryn Murphy", role: "Admin" },
  ]);

  const [newAdmin, setNewAdmin] = useState("");

  const roles = [
    { role: "Owner", dashboard: true, users: true, content: true, settings: true },
    { role: "Admin", dashboard: true, users: true, content: true, settings: true },
    { role: "Custom", dashboard: false, users: false, content: false, settings: false },
  ];

  const addAdmin = () => {
    if (!newAdmin.trim()) return;
    setAdmins([...admins, { name: newAdmin, role: "Custom" }]);
    setNewAdmin("");
  };

  return (
    <section className="bg-white p-8 rounded-2xl shadow-md max-w-5xl mx-auto ">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Settings</h2>

      {/* Global Controls */}
      <div className="mb-10">
        <h3 className="text-gray-700 font-semibold mb-4">GLOBAL CONTROLS</h3>
        <div className="flex items-center justify-between w-full max-w-md">
          <span className="text-gray-800 font-medium">System Alerts</span>
          <Switch
            checked={maintenanceMode}
            onChange={setMaintenanceMode}
            className={`${
              maintenanceMode ? "bg-blue-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${
                maintenanceMode ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <span className="text-gray-800 font-medium ml-3">Maintenance Mode</span>
        </div>
      </div>

      {/* Admin Management */}
      <div className="mb-10">
        <h3 className="text-gray-700 font-semibold mb-4">ADMIN MANAGEMENT</h3>
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            value={newAdmin}
            onChange={(e) => setNewAdmin(e.target.value)}
            placeholder="Search user..."
            className="border px-4 py-2 rounded-lg w-full max-w-xs focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={addAdmin}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
          >
            <FiPlus /> Add admin
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Role</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index} className="border-b text-gray-800">
                <td className="py-2">{admin.name}</td>
                <td className="py-2">{admin.role}</td>
                <td className="py-2 text-right flex items-center gap-3 justify-end">
                  <button className="text-gray-500 hover:text-blue-600">
                    <FiMoreVertical />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() =>
                      setAdmins(admins.filter((_, i) => i !== index))
                    }
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Role Permissions */}
      <div>
        <h3 className="text-gray-700 font-semibold mb-4">ROLE-BASED PERMISSIONS</h3>
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2 text-left">Role</th>
              <th className="py-2">Dashboard</th>
              <th className="py-2">Users</th>
              <th className="py-2">Content</th>
              <th className="py-2">Settings</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((r, index) => (
              <tr key={index} className="border-b text-gray-800">
                <td className="py-2 text-left">{r.role}</td>
                {[r.dashboard, r.users, r.content, r.settings].map(
                  (val, i) => (
                    <td key={i} className="py-2">
                      <input type="checkbox" checked={val} readOnly />
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
