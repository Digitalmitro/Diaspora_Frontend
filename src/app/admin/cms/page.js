"use client";
import { useState } from "react";

function CMS() {
  const [activePage, setActivePage] = useState(1);

  const renderContent = () => {
    switch (activePage) {
      case 1:
        return (
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">About Us</h2>
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-2 font-medium">Upload Secondary Image</p>
                <div className="h-24 flex items-center justify-center border rounded-lg bg-[#0B2447] text-white cursor-pointer">
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
            </div>
            <button className="bg-yellow-500 px-6 py-2 rounded-lg font-medium text-white">
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
            <button className="bg-yellow-500 px-6 py-2 rounded-lg font-medium text-white">
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
            <button className="bg-yellow-500 px-6 py-2 rounded-lg font-medium text-white">
              Submit
            </button>
          </div>
        );
      case 4:
        return <div className="p-4 text-lg">📄 This is Page 4 Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className=" rounded-lg shadow-md bg-white">{renderContent()}</div>

      {/* Pagination */}
      <div className="flex justify-center space-x-3 mt-6">
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
