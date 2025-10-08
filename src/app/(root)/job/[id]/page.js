"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import back from "../../../../../public/back.png";
import Image from "next/image";

// Sample job data — you can later replace this with data from an API
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechWave Pvt. Ltd.",
    location: "Kolkata, India",
    salary: "₹6–10 LPA",
    description:
      "We are looking for a skilled Frontend Developer experienced in React, Tailwind, and Next.js to build modern user interfaces.",
    responsibilities: [
      "Build and maintain reusable components",
      "Collaborate with backend developers and designers",
      "Optimize web performance and responsiveness",
    ],
    requirements: [
      "1+ year of experience with React.js",
      "Strong understanding of JavaScript (ES6+)",
      "Experience with Tailwind CSS and Next.js",
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CodeBase Technologies",
    location: "Pune, India",
    salary: "₹8–12 LPA",
    description:
      "Seeking a Backend Developer skilled in Node.js, Express, and MongoDB to create scalable APIs and backend systems.",
    responsibilities: [
      "Develop RESTful APIs",
      "Work with MongoDB and implement data models",
      "Ensure application performance and security",
    ],
    requirements: [
      "1+ year experience with Node.js and Express",
      "Familiarity with MongoDB and Mongoose",
      "Understanding of authentication and authorization (JWT, OAuth)",
    ],
  },
];

export default function JobDetails() {
  const { id } = useParams();
  const router = useRouter();

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        Job not found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button
        onClick={() => router.back()}
        className="text-blue-600 hover:underline mb-6 flex items-center gap-2"
      >
        <span className="mr-2">
          <Image src={back} alt="Back" width={30} height={30} />
        </span>{" "}
      </button>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
        <p className="text-gray-700 font-medium">{job.company}</p>
        <p className="text-gray-500 mb-4">{job.location}</p>
        <p className="text-gray-600 mb-4">{job.salary}</p>
        <p className="text-gray-700 mb-6">{job.description}</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Responsibilities
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {job.responsibilities.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Requirements
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        <button className="mt-8 bg-yellow-500 text-white px-6 py-2 rounded-lg uppercase text-sm font-medium tracking-wide hover:bg-yellow-600">
          Apply Now
        </button>
      </div>
    </div>
  );
}
