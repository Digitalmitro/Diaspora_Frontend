"use client";
import { useState } from "react";

function CMS() {
  const [activePage, setActivePage] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    banner: null,
    secondaryImage: null,
  });

  const pageSlugs = {
    1: "about",
    2: "privacy-policy",
    3: "terms",
    4: "home",
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log("first", formData);
    const slug = pageSlugs[activePage];

    // Build FormData
    const formDataToSend = new FormData();
    formDataToSend.append("slug", slug);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);

    if (formData.banner) {
      formDataToSend.append("banner", formData.banner); // File object
    }

    if (formData.secondaryImage) {
      formDataToSend.append("secondaryImage", formData.secondaryImage); // File object
    }
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cms`, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();
      console.log("Response:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case 1:
        return (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">About Us</h2>
            <textarea
              name="content"
              placeholder="Type your content here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              rows="4"
              value={formData.content}
              onChange={handleChange}
            />
            <div>
              <p className="mb-2 font-medium">Upload Banner Image</p>
              <input
                type="file"
                name="banner"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border rounded-lg bg-[#0B2447] text-white"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="mb-2 font-medium">Upload Secondary Image</p>
                <input
                  type="file"
                  name="secondaryImage"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded-lg bg-[#0B2447] text-white"
                />
              </div>

              <div>
                <p className="mb-2 font-medium">Change the Title Here</p>
                <input
                  type="text"
                  name="title"
                  placeholder="Change Title Here"
                  className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
            type="button"
              onClick={handleSubmit}
              className="bg-yellow-500 px-6 py-2 rounded-lg font-medium text-white w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        );
      case 2:
        return (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">Privacy Policy</h2>
            <textarea
              placeholder="Type your content here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              rows="4"
            />
            <div>
              <p className="mb-2 font-medium">Upload Banner Image</p>
              <div className="w-full h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white cursor-pointer">
                Upload
              </div>
            </div>
            <div>
              <p className="mb-2 font-medium">Change the Title Here</p>
              <input
                type="text"
                placeholder="Change Title Here"
                className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              />
            </div>
            <button className="bg-yellow-500 px-6 py-2 rounded-lg font-medium text-white w-full sm:w-auto">
              Submit
            </button>
          </div>
        );
      case 3:
        return (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">Terms & Conditions</h2>
            <textarea
              placeholder="Type your content here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              rows="4"
            />
            <div>
              <p className="mb-2 font-medium">Upload Banner Image</p>
              <div className="w-full h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white cursor-pointer">
                Upload
              </div>
            </div>
            <div>
              <p className="mb-2 font-medium">Change the Title Here</p>
              <input
                type="text"
                placeholder="Change Title Here"
                className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              />
            </div>
            <button className="bg-yellow-500 px-6 py-2 rounded-lg font-medium text-white w-full sm:w-auto">
              Submit
            </button>
          </div>
        );
      case 4:
        return (
          <div className="p-4 space-y-6">
            <h2 className="text-xl font-semibold">Home Page</h2>

            {/* Banner Section */}
            <div>
              <h3 className="text-lg font-medium mb-2">Banner Section</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white cursor-pointer">
                  Upload Banner Image
                </div>
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Title Here
                </div>
              </div>
            </div>

            {/* Job Category Section */}
            <div>
              <h3 className="text-lg font-medium mb-2">Job Category Section</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Title Here
                </div>
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Description Here
                </div>
              </div>
            </div>

            {/* Blog Section */}
            <div>
              <h3 className="text-lg font-medium mb-2">Blog Section</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Title Here
                </div>
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Description Here
                </div>
              </div>
            </div>

            {/* Jobs Section */}
            <div>
              <h3 className="text-lg font-medium mb-2">Jobs Section</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Title Here
                </div>
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Title Here
                </div>
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Description Here
                </div>
              </div>
            </div>

            {/* Second Banner Section */}
            <div>
              <h3 className="text-lg font-medium mb-2">
                Second Banner Section
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Title Here
                </div>
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white">
                  Change the Description Here
                </div>
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white cursor-pointer">
                  Upload Banner Image
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button className="bg-yellow-500 px-6 py-2 rounded-lg font-medium text-white w-full sm:w-auto">
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md">{renderContent()}</div>

      {/* Pagination */}
      <div className="flex justify-center space-x-3 mt-6 flex-wrap">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            onClick={() => setActivePage(num)}
            className={`px-3 py-1 rounded-lg border ${
              activePage === num
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CMS;
