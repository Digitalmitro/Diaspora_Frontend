import { useEffect, useState } from "react";

export default function AboutPage({
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
      console.log("this is slug", slug);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/cms/${slug}`
        );

        if (res.status === 404) {
          console.warn("Page not found, resetting form data");
          setFormData({
            _id: null, // Add _id here too
            title: "",
            content: "",
            banner: null,
            secondaryImage: null,
          });
          return;
        }

        if (res.ok) {
          const data = await res.json();
          console.log("Fetched page data:", data);

          if (!data) return;

          // Set ALL the fields including _id
          setFormData((prev) => ({
            ...prev,
            _id: data._id, // ← THIS IS CRITICAL!
            title: data.title,
            content: data.content,
            banner: data.banner, // Changed from bannerUrl to banner
            secondaryImage: data.secondaryImage,
          }));
        }
      } catch (err) {
        console.error("Error fetching page:", err);
      }
    };

    if (slug) fetchPage();
  }, [slug, setFormData]);

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
  );
}
