"use client";
import Image from "next/image";
import banner from "../../../public/employers.png";
import back from "../../../public/back.png";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { useAuth } from "../context/authContext";
import { useState } from "react";
function Login() {
  const router = useRouter();
  const [user,setUser]=useState({
    email:"",
    password:""
  });
    const [error, setError] = useState(""); 
  const {login}=useAuth();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
  };
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
            <div className="border bg-[#EDEDED] p-8 w-full max-w-md text-center">
              <form className="space-y-4" onSubmit={handleSubmit}>
                  {error && (
                  <p className="text-red-500 font-medium">{error}</p> // ✅ Show error here
                )}
                <input
                  type="email"
                  placeholder="Company Email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="w-full px-4 py-3 border bg-white text-center font-medium focus:outline-none "
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  className="w-full px-4 py-3 border text-center bg-white font-medium focus:outline-none "
                />

                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-500 text-white font-bold hover:bg-yellow-600 transition"
                  // onClick={() => router.push("/jobPosting")}
                >
                  LOGIN
                </button>
              </form>
              {/* OR Divider */}
                            <div className="flex items-center my-6">
                              <div className="flex-grow border-t border-gray-300"></div>
                              <span className="mx-3 text-gray-500 font-medium">OR</span>
                              <div className="flex-grow border-t border-gray-300"></div>
                            </div>
                            {/* Social Buttons */}
                            <div className="space-y-3">
                              <button
                                type="button"
                                // onClick={handleGoogleSignup}
                                className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 bg-white hover:bg-gray-100 rounded-lg transition"
                              >
                                <FcGoogle size={28}/>
                                <span className="font-medium text-gray-700">
                                  Sign up with Google
                                </span>
                              </button>
              
                              <button
                                type="button"
                                // onClick={handleLinkedinSignup}
                                className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 bg-white hover:bg-gray-100 rounded-lg transition"
                              >
                                <FaLinkedin size={28} className="text-blue-800"/>
                                <span className="font-medium text-gray-700">
                                  Sign up with LinkedIn
                                </span>
                              </button>
                            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
