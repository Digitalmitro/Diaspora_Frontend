import Image from "next/image";
import React from "react";
import banner from "../../../public/about.png";
import image from "../../../public/aboutImage.png";

function About() {
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
        <Image src={banner} alt="About Us Banner" />
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
              Our Perfect Platform
            </h2>
            <div className="font-medium text-lg leading-relaxed space-y-6">
              <p>
                Doctus omnesque duo ne, cu vel offendit erroribus. Laudem
                hendrerit pro ex, cum postea delectus ad. Te pro feugiat
                perpetua tractatos. Nam movet omnes id, usu te meis corpora.
                Augue doming quaestio vix at. Sumo duis ea sed, ut vix euismod
                lobortis prodesset, everti necessitatibus mei cu.
              </p>
              <p>
                Nam ea eripuit assueverit, invenire delicatissimi ad pro, an
                dicam principes duo. Paulo prodesset duo ad. Duo eu summo
                verear. Natum gubergren definitionem id usu, graeco cetero ius
                ut.
              </p>
              <p>
                Unum postea sit an, iudico invenire expetenda ei sea, atqui
                fierent sed ut. Ex pri numquam indoctum suavitate, sed id movet
                mentitum consequat, cum et amet ipsum dolor. Unum postea sit an,
                iudico invenire expetenda ei sea, atqui fierent sed ut
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Team Image Section */}
      <section className="bg-gray-50 ">
        <div className="flex justify-center w-full mx-auto px-4 ">
          <figure className="text-center">
            <div className="relative  w-full rounded-full p-6 border overflow-hidden ">
              <Image
                src={image}
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
