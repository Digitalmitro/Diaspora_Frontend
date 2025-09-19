import { useEffect } from "react";

export default function PrivacyPolicyPage({
  formData,
  handleChange,
  handleFileChange,
  handleSubmit,
  setFormData,
  slug,
}) {
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/cms/${slug}`
        );

         if (res.status === 404) {
          console.warn("Page not found, resetting form data");
          setFormData({
            title: "",
            content: "",
            banner: null,
          });
          return;
        }
        if (res.ok) {
          const data = await res.json();
          console.log("Fetched page data:", data);

          // directly set formData
          setFormData((prev) => ({
            ...prev,
            title: data.title,
            content: data.content,
            bannerUrl: data.banner,
          }));
        }
      } catch (err) {
        console.error("Error fetching page:", err);
      }
    };

    if (slug) fetchPage();
  }, [slug]);
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Privacy Policy</h2>
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
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-yellow-500 px-6 py-2 rounded-lg font-medium text-white w-full sm:w-auto"
      >
        Submit
      </button>
    </div>
  );
}
