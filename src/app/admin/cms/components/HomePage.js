import { useEffect, useState } from "react";

export default function HomePage({
  formData,
  handleChange,
  handleFileChange,
  handleSubmit,
  setFormData,
  slug,
}) {
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/cms/${slug}`
        );
        if (res.ok) {
          const data = await res.json();
          console.log("Fetched page data:", data);

          // directly set formData
          setFormData((prev) => ({
            ...prev,
            home: {
              ...prev.home,
              ...data.home,
            },
          }));
        }
      } catch (err) {
        console.error("Error fetching page:", err);
      }
    };

    if (slug) fetchPage();
  }, [slug]);
  const onSubmit = async () => {
    setSubmitting(true);
    try {
      await handleSubmit(); // call your submit handler
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-semibold">Home Page</h2>

      {/* Banner Section */}
      <div>
        <h3 className="text-lg font-medium mb-2">Banner Section</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="mb-2 font-medium">Upload Banner Image</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleFileChange(e, "bannerSection", "bannerImage")
              }
              className="w-full p-2 border rounded-lg bg-[#0B2447] text-white"
            />
          </div>
          <div>
            <p className="mb-2 font-medium">Change the Title Here</p>
            <input
              type="text"
              placeholder="Change Title Here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              value={formData?.home?.bannerSection?.title}
              onChange={(e) => handleChange(e, "bannerSection", "title")}
            />
          </div>
        </div>
      </div>

      {/* Job Category Section */}
      <div>
        <h3 className="text-lg font-medium mb-2">Job Category Section</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="mb-2 font-medium">Change the Title Here</p>
            <input
              type="text"
              placeholder="Change Title Here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              value={formData?.home?.jobCategorySection?.title}
              onChange={(e) => handleChange(e, "jobCategorySection", "title")}
            />
          </div>
          <div>
            <p className="mb-2 font-medium">Change the Description Here</p>
            <textarea
              placeholder="Change Description Here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              rows="3"
              value={formData?.home?.jobCategorySection?.description}
              onChange={(e) =>
                handleChange(e, "jobCategorySection", "description")
              }
            />
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div>
        <h3 className="text-lg font-medium mb-2">Blog Section</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="mb-2 font-medium">Change the Title Here</p>
            <input
              type="text"
              placeholder="Change Title Here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              value={formData?.home?.blogSection?.title}
              onChange={(e) => handleChange(e, "blogSection", "title")}
            />
          </div>
          <div>
            <p className="mb-2 font-medium">Change the Description Here</p>
            <textarea
              placeholder="Change Description Here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              rows="3"
              value={formData?.home?.blogSection?.description}
              onChange={(e) => handleChange(e, "blogSection", "description")}
            />
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div>
        <h3 className="text-lg font-medium mb-2">Jobs Section</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <p className="mb-2 font-medium">Change the Title Here</p>
            <input
              type="text"
              placeholder="Change Title Here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              value={formData?.home?.jobsSection?.title}
              onChange={(e) => handleChange(e, "jobsSection", "title")}
            />
          </div>
          <div>
            <p className="mb-2 font-medium">Change the Description Here</p>
            <textarea
              placeholder="Change Description Here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              rows="3"
              value={formData?.home?.jobsSection?.description}
              onChange={(e) => handleChange(e, "jobsSection", "description")}
            />
          </div>
        </div>
      </div>

      {/* Second Banner Section */}
      <div>
        <h3 className="text-lg font-medium mb-2">Second Banner Section</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="mb-2 font-medium">Change the Title Here</p>
            <input
              type="text"
              placeholder="Change Title Here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              value={formData?.home?.secondBannerSection?.title||""}
              onChange={(e) => handleChange(e, "secondBannerSection", "title")}
            />
          </div>
          <div>
            <p className="mb-2 font-medium">Change the Description Here</p>
            <textarea
              placeholder="Change Description Here"
              className="w-full p-3 border rounded-lg bg-[#0B2447] text-white"
              rows="3"
              value={formData?.home?.secondBannerSection?.description||""}
              onChange={(e) =>
                handleChange(e, "secondBannerSection", "description")
              }
            />
          </div>
          <div>
            <p className="mb-2 font-medium">Upload Banner Image</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleFileChange(e, "secondBannerSection", "bannerImage")
              }
              className="w-full p-2 border rounded-lg bg-[#0B2447] text-white"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="button"
          onClick={onSubmit}
        disabled={submitting}
         className={`px-6 py-2 rounded-lg font-medium w-full sm:w-auto 
          ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-yellow-500 text-white"
          }
        `}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
