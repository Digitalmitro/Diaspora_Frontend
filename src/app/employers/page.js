"use client"
import Image from "next/image";
import banner from "../../../public/employers.png";
import logo from "../../../public/logo.png.png";
import back from "../../../public/back.png";
import { IoPerson } from "react-icons/io5";
import { BsFillPenFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
function Employers() {
  const router = useRouter();
  return (
    <main>
      <section
        aria-label="Employers banner"
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Full background image */}
        <Image
          src={banner}
          alt="Employers Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center">
          <div className="  p-8 w-full max-w-md text-center">
            <div className="absolute top-6 left-6">
              <button className="flex flex-col font-bold items-center text-sm text-gray-700 hover:text-black" onClick={() => router.back()}>
                <span className="mr-2">
                  <Image src={back} alt="Back" width={30} height={30} />
                </span>{" "}
                BACK
              </button>
            </div>

            <h2 className="text-2xl font-semibold mb-4 ">Employee Portal</h2>
            <div className="border  p-8 w-full max-w-md text-center">
              <div className="flex justify-center mb-6">
                <Image src={logo} alt="Diaspora Works Logo" width={180} />
              </div>

              <div className="space-y-4">
                <button className="w-full py-3 px-4 border font-medium flex items-center justify-center gap-2" onClick={() => router.push("/login")}>
                  <IoPerson className="text-lg" />
                  LOGIN
                </button>
                <button className="w-full py-3 px-4 border font-medium flex items-center justify-center gap-2" onClick={() => router.push("/signup")}>
                  <BsFillPenFill className="text-lg" />
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Employers;
