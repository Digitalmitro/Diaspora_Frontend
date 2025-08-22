"use client";
import Image from "next/image";
import banner from "../../../../public/candidateBanner.png";
import candidate from "../../../../public/candidate.png";

const candidatesData = {
  candidates: [
    {
      id: 1,
      name: "Darlene Robertson",
      date: "10/06/25",
      experience: "1-5 years",
      resumeUrl: "/resumes/darlene_robertson.pdf",
      profileImage: candidate,
    },
    {
      id: 2,
      name: "Darlene Robertson",
      date: "10/06/25",
      experience: "1-5 years",
      resumeUrl: "/resumes/darlene_robertson2.pdf",
      profileImage: candidate,
    },
    {
      id: 3,
      name: "Darlene Robertson",
      date: "10/06/25",
      experience: "1-5 years",
      resumeUrl: "/resumes/darlene_robertson3.pdf",
      profileImage: candidate,
    },
    {
      id: 4,
      name: "Darlene Robertson",
      date: "10/06/25",
      experience: "1-5 years",
      resumeUrl: "/resumes/darlene_robertson4.pdf",
      profileImage: candidate,
    },
  ],
  pagination: {
    currentPage: 1,
    totalPages: 4,
  },
};

function Candidates() {
  const { candidates, pagination } = candidatesData;

  return (
    <main>
      {/* Banner */}
      <section
        aria-label="Candidates banner"
        className="relative w-full bg-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30 z-10 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2">
            Candidates
          </h1>
        </div>
        <Image
          src={banner}
          alt="Candidates Banner"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
        />
      </section>

      {/* Filters + Total */}
      <section className="py-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 mb-6">
          {/* Total candidates */}
          <p className="font-semibold text-lg">
            {candidates.length} Candidates
          </p>

          {/* Sorting + Filters */}
          <div className="flex flex-wrap gap-3">
            <select className="border px-3 py-2 text-sm sm:text-base">
              <option>Sort By (Default)</option>
              <option>Name</option>
              <option>Date</option>
              <option>Experience</option>
            </select>
            <select className="border px-3 py-2 text-sm sm:text-base">
              <option>All</option>
              <option>Shortlisted</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        {/* Candidates List */}
        <div className="space-y-6">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="flex flex-col md:flex-row items-center justify-evenly gap-4 border-b border-gray-300 md:border-0 pb-4"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <Image
                  src={candidate.profileImage}
                  alt={candidate.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">
                    {candidate.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                    <p>{candidate.date}</p>
                    <p>Exp – {candidate.experience}</p>
                  </div>
                  <a
                    href={candidate.resumeUrl}
                    className="text-red-500 text-sm font-medium"
                    target="_blank"
                  >
                    View Resume
                  </a>
                </div>
              </div>

              {/* Actions */}
              <div className="flex md:flex-col flex-row gap-2 items-center">
                <button className="bg-[#00F410] text-white px-4 py-2 w-28 text-sm sm:text-base">
                  Shortlist
                </button>
                <button className="bg-[#F43900] text-white px-4 py-2 w-28 text-sm sm:text-base">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 flex-wrap gap-2">
          {Array.from({ length: pagination.totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-3 py-1 border text-sm sm:text-base ${
                pagination.currentPage === i + 1
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Candidates;
