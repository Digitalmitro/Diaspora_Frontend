import Image from "next/image";
import banner from "../../../../public/contact.png";

function ContactUs() {
  return (
    <main>
      <section
        aria-label="Privacy Policy banner"
        className="relative   w-full bg-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30 z-10 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl md:text-6xl font-bold mb-2">Contact Us</h2>
        </div>
        <Image src={banner} alt="Contact Us Banner" />
      </section>
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-[#1F2E4A] text-white p-8 mx-auto ">
          <h2 className="text-4xl  mb-6">Contact Us</h2>

          <form className="space-y-4">
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-md mb-1">First Name *</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-[#D9D9D9] outline-none rounded-md text-black"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-md mb-1">Last Name *</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-[#D9D9D9] outline-none rounded-md text-black"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-md mb-1">Email ID *</label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-[#D9D9D9] outline-none rounded-md text-black"
                placeholder="Email ID"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-md mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-3 bg-[#D9D9D9] py-2 outline-none rounded-md text-black"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#FFC107] text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
