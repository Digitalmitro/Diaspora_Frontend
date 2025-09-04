"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFlagUsa, FaFlag } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../../public/logo.png.png";
import { useAuth } from "@/app/context/authContext";
const languages = [
  {
    code: "en",
    name: "English",
    icon: <FaFlagUsa className="text-blue-600" />,
  },
  {
    code: "hi",
    name: "हिन्दी",
    icon: <GiIndiaGate className="text-orange-500" />,
  },
  { code: "es", name: "Español", icon: <FaFlag className="text-red-500" /> },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/subscription", label: "Subscription" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact Us" },
];

function Navbar() {
  const [selected, setSelected] = useState(languages[0]);
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={120} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative pb-1 ${
                      pathname === link.href
                        ? "text-[#F4B400]"
                        : "text-gray-700 hover:text-[#F4B400]"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F4B400]"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Dropdown */}
            <div className="relative ml-4">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 border px-3 py-1 bg-white shadow rounded"
              >
                {selected.icon}
                <span>{selected.name}</span>
                <span className="text-xs">▼</span>
              </button>

              {open && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md z-50">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => {
                        setSelected(lang);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {lang.icon}
                      <span>{lang.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 ml-4">
              {/* If employer → show EMPLOYERS + CANDIDATES buttons */}
              {user && (user.role === "admin" || user.role === "employer") && (
                <>
                  <button
                    className="px-4 py-2 font-semibold text-sm bg-[#F4B400] text-white rounded"
                    onClick={() => router.push("/jobPosting")}
                  >
                    EMPLOYERS
                  </button>
                  <button
                    className="px-4 py-2 font-semibold text-sm bg-[#F4B400] text-white rounded"
                    onClick={() => router.push("/candidates")}
                  >
                    CANDIDATES
                  </button>
                </>
              )}

              {/* If NO user → show Login / Signup */}
              {!user && (
                <button
                    className="px-4 py-2 font-semibold text-sm bg-[#F4B400] text-white rounded"
                    onClick={() => router.push("/employers")}
                  >
                    LOGIN / SIGNUP
                  </button>
              )}

              {/* If user exists but is "admin" or "user" → show nothing */}
              {user?.role=="user" && null}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 ${
                      pathname === link.href
                        ? "text-[#F4B400] border-b-2 border-[#F4B400]"
                        : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Dropdown - Mobile */}
            <div className="relative mt-4">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 border px-3 py-2 bg-white shadow rounded w-full justify-between"
              >
                <div className="flex items-center gap-2">
                  {selected.icon}
                  <span>{selected.name}</span>
                </div>
                <span className="text-xs">▼</span>
              </button>

              {open && (
                <ul className="mt-2 w-full bg-white border shadow-lg rounded-md z-50">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => {
                        setSelected(lang);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {lang.icon}
                      <span>{lang.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Buttons - Mobile */}
            <div className="flex flex-col space-y-2 mt-4">
              <button
                className="px-4 py-2 font-semibold text-sm bg-[#F4B400] text-white rounded"
                onClick={() => router.push("/employers")}
              >
                EMPLOYERS
              </button>
              <button
                className="px-4 py-2 font-semibold text-sm bg-[#F4B400] text-white rounded"
                onClick={() => router.push("/candidates")}
              >
                CANDIDATES
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
