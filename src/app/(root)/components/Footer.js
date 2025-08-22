import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="font-sans">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full text-white bg-[#1F2E4A]">
        {/* First Column */}
        <section className="w-full">
          <div className="flex p-8 w-full">
            <nav className="w-full">
              <h2 className="font-bold text-xl mb-6 tracking-wide">Candidates</h2>
              <ul className="space-y-3">
                <li className="hover:text-blue-200 transition-colors">
                  <Link href="#">Search Jobs</Link>
                </li>
                <li className="hover:text-blue-200 transition-colors">
                  <Link href="#">Submit CV</Link>
                </li>
                <li className="hover:text-blue-200 transition-colors">
                  <Link href="#">Why Apply</Link>
                </li>
                <li className="hover:text-blue-200 transition-colors">
                  <Link href="#">Alumni</Link>
                </li>
              </ul>
            </nav>
            <nav className="w-full">
              <h2 className="font-bold text-xl mb-6 tracking-wide">
                Global Career Company
              </h2>
              <ul className="space-y-3">
                <li className="hover:text-blue-200 transition-colors">
                  <Link href="#">Global Career Company</Link>
                </li>
                <li className="hover:text-blue-200 transition-colors">
                  <Link href="#">GCC Search</Link>
                </li>
                <li className="hover:text-blue-200 transition-colors">
                  <Link href="#">GCC Advisory</Link>
                </li>
                <li className="hover:text-blue-200 transition-colors">
                  <Link href="#">Talent Agenda Series</Link>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Bottom Section */}
          <div className="max-w-7xl mx-auto px-8 py-6 text-sm ">
            <p className="pb-4 ">
              © 2020 Global Career Company - All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-4 md:mt-0 text-2xl">
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <FaFacebook />
              </Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <FaTwitter />
              </Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <FaInstagram />
              </Link>
              <Link href="#" className="hover:text-blue-300 transition-colors">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </section>

        {/* Second Column */}
        <section className="w-full flex p-8">
          <nav className="w-full">
            <h2 className="font-bold text-xl mb-6 tracking-wide">Careers in Africa</h2>
            <ul className="space-y-3">
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">About</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">Countries</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">Sectors</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">Media & Press</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">Global Career Company <br/> Data Protection Policy</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </nav>
          <nav className="w-full">
            <h2 className="font-bold text-xl mb-6 tracking-wide">Get In Touch</h2>
            <ul className="space-y-3">
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">FAQ</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">Contact Us</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">Facebook</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">LinkedIn</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">Twitter</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link href="#">Instagram</Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
      <div className="bg-white text-[#1F2E4A] text-center py-4 text-sm font-medium tracking-wide">
        <p>Designed and Developed By Digital Mitro</p>
      </div>
    </footer>
  );
}

export default Footer;