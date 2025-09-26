"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner from "../../../../public/about.png";
import image from "../../../../public/aboutImage.png";

function About() {
  const [aboutData, setAboutData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/cms/about`
      );
      if (res.ok) {
        const data = await res.json();
        setAboutData(data);
        console.log(data);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="space-y-6">
      {/* 🔹 Banner Section */}
      <section
        aria-label="About page banner"
        className="relative h-64 md:h-96 p w-full bg-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30 z-10 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-2">About Us</h1>
        </div>
        {aboutData?.banner && (
          <Image
            src={aboutData.banner}
            alt="About Us Banner"
            fill
            className="object-cover"
          />
        )}
      </section>

      {/* 🔹 Main Content */}
      <section
        aria-labelledby="about-heading"
        className="container mx-auto px-4 py-12 "
      >
        <div className="space-y-8">
          <div>
            <h2
              id="about-heading"
              className="text-2xl md:text-4xl font-semibold mb-4 text-[#1F2E4A]"
            >
              {aboutData ? aboutData.title : "Our Story"}
            </h2>
            <div className="font-medium text-lg leading-relaxed space-y-6">
              <p>{aboutData ? aboutData.content : "Loading..."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Team Image Section */}
      <section className="bg-gray-50 ">
        <div className="flex justify-center w-full mx-auto px-4 ">
          <figure className="text-center">
            <div className="relative  w-full rounded-full p-6 border overflow-hidden">
              <Image
                src={aboutData?.secondaryImage || image}
                alt="Our team working together"
                // fill
                height={400}
                width={400}
              />
            </div>
          </figure>
        </div>
      </section>
    </main>
  );
}

export default About;
