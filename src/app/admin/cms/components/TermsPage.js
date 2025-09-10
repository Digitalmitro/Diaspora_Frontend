"use client";
import { useState } from "react";

export default function TermsPage({ formData, handleChange, handleFileChange, handleSubmit }) {
  const [submitting, setSubmitting] = useState(false);

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
      <h2 className="text-xl font-semibold">Terms & Conditions</h2>
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
        onClick={onSubmit}
        disabled={submitting}
        className={`px-6 py-2 rounded-lg font-medium w-full sm:w-auto 
          ${submitting ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 text-white"}
        `}
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}