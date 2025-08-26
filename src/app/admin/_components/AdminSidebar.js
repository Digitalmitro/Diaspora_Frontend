import Image from "next/image";
import logo from "../../../../public/logo.png.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";

function AdminSidebar() {
  return (
    <div className="flex flex-col justify-between h-screen bg-[#E8E8E8] px-6 py-6 w-60">
      {/* Top Logo */}
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={60}
          className="mb-10"
        />

        {/* Menu */}
        <ul className="space-y-6 text-black font-medium">
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin">Dashboard</Link>
          </li>
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin/users">User Management</Link>
          </li>
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin/job-approval">Job Approval</Link>
          </li>
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin/payment">Payment</Link>
          </li>
          <li className="cursor-pointer px-3 py-1 hover:bg-[#2E3A59] hover:text-white">
            <Link href="/admin/cms">CMS</Link>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="space-y-4">
        <p className="text-xs text-gray-600 leading-5">
          © 2020 Global Career <br /> Company – All rights reserved
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 text-gray-700 text-sm">
          <FaFacebookF className="cursor-pointer hover:text-black" />
          <FaXTwitter className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-black" />
          <FaLinkedinIn className="cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
