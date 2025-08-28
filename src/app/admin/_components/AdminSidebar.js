"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Mobile Menu Button (Floating) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-2 left-2 z-50 bg-[#2E3A59] text-white p-2 rounded-lg shadow"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-60 bg-[#E8E8E8] px-6 py-6 transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Logo (Desktop only) */}
        <div className="hidden md:block">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={60}
            className="mb-10"
          />
        </div>

        {/* Menu */}
        <ul className="space-y-6 py-20 md:py-6 text-black font-medium">
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin" onClick={handleClose}>Dashboard</Link>
          </li>
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin/users" onClick={handleClose}>User Management</Link>
          </li>
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin/job-approval" onClick={handleClose}>Job Approval</Link>
          </li>
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin/payment" onClick={handleClose}>Payment</Link>
          </li>
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin/cms" onClick={handleClose}>CMS</Link>
          </li>
        </ul>

        {/* Footer */}
        <div className="absolute bottom-6 space-y-4">
          <p className="text-xs text-gray-600 leading-5">
            © 2020 Global Career <br /> Company – All rights reserved
          </p>
          <div className="flex space-x-4 text-gray-700 text-sm">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaXTwitter className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
            <FaLinkedinIn className="cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 md:hidden z-30"
          onClick={handleClose}
        />
      )}
    </div>
  );
}

export default AdminSidebar;
