import React from "react";
import banner from "../../../public/homeBanner.png";
import blog1 from "../../../public/blog1.png";
import blog2 from "../../../public/blog2.png";
import blog3 from "../../../public/blog3.png";
import icon1 from "../../../public/Amsterdam-colored.png";
import icon2 from "../../../public/colorado-colored.png";
import icon3 from "../../../public/theo-colored.png";
import icon4 from "../../../public/Ararat-colored.png";
import icon5 from "../../../public/Nairobi-colored.png";
import icon6 from "../../../public/New York-colored.png";
import icon7 from "../../../public/lux-colored.png";

import svg1 from "../../../public/briefcase.svg";
import svg2 from "../../../public/code.svg";
import svg3 from "../../../public/settings.svg";
import svg4 from "../../../public/hand-shake.svg";
import Image from "next/image";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
const blogData = [
  {
    id: 1,
    image: blog1,
    author: "Andrew Lawson",
    date: "Feb 12, 2024",
    title: "The Internet Is A Job Seeker Most Crucial Success",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    link: "/blog/the-internet-is-a-job-seeker",
  },
  {
    id: 2,
    image: blog2,
    author: "Espinoza Lara",
    date: "Feb 12, 2024",
    title: "We’ve Weeded Through Hundreds Of Job Hunting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    link: "/blog/we-ve-weeded-through-job-hunting",
  },
  {
    id: 3,
    image: blog3,
    author: "Adonay Porras",
    date: "Feb 12, 2024",
    title: "Today From Connecting With Potential Employers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    link: "/blog/today-from-connecting-with-employers",
  },
];

const icons = [
  { image: icon1 },
  { image: icon2 },
  { image: icon3 },
  { image: icon4 },
  { image: icon5 },
  { image: icon6 },
  { image: icon7 },
];

function HomePage() {
  return (
    <>
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image src={banner} alt="Home Banner" layout="fill" objectFit="cover" />

        <div className="absolute inset-0 bg-opacity-50"></div>

        <div className="relative z-10 w-full max-w-4xl text-center px-4">
          <div className="bg-white shadow-md  flex items-center p-2 mb-6">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 " />
              <input
                type="text"
                placeholder="Job Title, Keywords, or Company"
                className="w-full pl-10 pr-3 py-2 text-sm font-medium tracking-wide uppercase outline-none text-gray-700"
              />
            </div>

            <div className="relative flex-1 border-l">
              <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 " />
              <input
                type="text"
                placeholder="City, State, Zip Code, or 'Remote'"
                className="w-full pl-10 pr-3 py-2 text-sm uppercase font-medium tracking-wide outline-none text-gray-700"
              />
            </div>

            <button className="bg-yellow-500 text-white px-6 py-2 uppercase text-sm font-medium tracking-wide hover:bg-yellow-600">
              Find Jobs
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-snug">
            Find Your Career <br /> To Make A Better Life
          </h1>

          <button className="bg-yellow-500 text-white px-6 py-3 uppercase font-semibold hover:bg-yellow-600">
            Find Jobs
          </button>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-[#1F2E4A] mb-4">
            Most Demanded Job Categories
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white border p-6 flex flex-col items-center hover:shadow-lg transition">
              <Image src={svg1} alt="IT & Software" width={60} height={60} />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                CORPORATE JOBS (25)
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white border p-6 flex flex-col items-center hover:shadow-lg transition">
              <Image src={svg2} alt="Healthcare" width={60} height={60} />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Development (25)
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white border p-6 flex flex-col items-center hover:shadow-lg transition">
              <Image src={svg3} alt="Finance" width={60} height={60} />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Information IT (25)
              </h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white border p-6 flex flex-col items-center hover:shadow-lg transition">
              <Image src={svg4} alt="Marketing" width={60} height={60} />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                Business Policy (25)
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl text-center  font-bold text-[#1F2E4A] mb-4">
          Read Our Article To Get Tricks
        </h3>
        <p className="text-gray-600 text-center  mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-6">
          {blogData.map((blog) => (
            <article key={blog.id} className="  overflow-hidden bg-white">
              <div className="relative w-full h-64">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="py-4">
                <div className="flex  gap-4  text-sm mb-2">
                  <span className="flex items-center gap-1">
                    <FaUser /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm ">{blog.description}</p>
                <Link
                  href={blog.link}
                  className=" font-medium tracking-wider text-sm hover:underline"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

<section className="py-6 bg-[#0000003D]">
  <div className="max-w-7xl mx-auto text-center">
    {/* Title */}
    <h3 className="text-2xl font-semibold text-[#1F2E4A] mb-6">Our Partners</h3>

    {/* Icons */}
    <div className="flex flex-wrap justify-center gap-6">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="relative w-32 shadow-lg h-32 rounded-full bg-white flex items-center justify-center"
        >
          <Image
            src={icon.image}
            alt={icon.image}
            fill
            className="object-contain p-6"
          />
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}

export default HomePage;
