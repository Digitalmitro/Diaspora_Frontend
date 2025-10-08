"use client";

import React from "react";
import back from "../../../../public/back.png";
import { useRouter } from "next/navigation";
import { FiBriefcase, FiMapPin, FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechWave Pvt. Ltd.",
    location: "Kolkata",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CodeBase Technologies",
    location: "Pune",
  },
//   {
//     id: 3,
//     title: "Full Stack Engineer",
//     company: "InnoSoft Solutions",
//     location: "Bangalore",
//   },
//   {
//     id: 4,
//     title: "UI/UX Designer",
//     company: "DesignCraft",
//     location: "Remote",
//   },
//   {
//     id: 5,
//     title: "React Native Developer",
//     company: "Appify Labs",
//     location: "Delhi",
//   },
];

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* <div className="">
          <button
            className="flex flex-col font-bold items-center text-sm text-gray-700 hover:text-black"
            onClick={() => router.back()}
          >
            <span className="mr-2">
              <Image src={back} alt="Back" width={20} height={20} />
            </span>{" "}
            BACK
          </button>
        </div> */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Available Job Openings
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => router.push(`/job/${job.id}`)}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {job.title}
                </h2>
                <FiArrowRight className="text-gray-400 group-hover:text-blue-600 transition" />
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <FiBriefcase className="text-blue-500" />
                <span className="text-sm font-medium">{job.company}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <FiMapPin className="text-red-500" />
                <span className="text-sm">{job.location}</span>
              </div>

              <button
                onClick={() => router.push(`/job/${job.id}`)}
                className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium tracking-wide hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
