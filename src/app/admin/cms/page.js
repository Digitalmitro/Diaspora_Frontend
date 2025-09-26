"use client";
import { useState } from "react";
import AboutPage from "./components/AboutPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsPage from "./components/TermsPage";
import HomePage from "./components/HomePage";

function CMS() {
  const [activePage, setActivePage] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    banner: null,
    secondaryImage: null,
    home: {
      bannerSection: {
        bannerImage: null,
        title: "",
      },
      jobCategorySection: {
        title: "",
        description: "",
      },
      blogSection: {
        title: "",
        description: "",
      },
      jobsSection: {
        title: "",
        description: "",
      },
      secondBannerSection: {
        bannerImage: null,
        title: "",
        description: "",
      },
    },
  });

  const pageSlugs = {
    1: "about",
    2: "privacy-policy",
    3: "terms",
    4: "home",
  };
  const slug = pageSlugs[activePage];
  const handleFileChange = (e, section = null, field = null) => {
    if (section && field) {
      // For nested home page fields
      setFormData((prev) => ({
        ...prev,
        home: {
          ...prev.home,
          [section]: {
            ...prev.home[section],
            [field]: e.target.files[0],
          },
        },
      }));
    } else {
      // For regular fields
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  const handleChange = (e, section = null, field = null) => {
    if (section && field) {
      // For nested home page fields
      setFormData((prev) => ({
        ...prev,
        home: {
          ...prev.home,
          [section]: {
            ...prev.home[section],
            [field]: e.target.value,
          },
        },
      }));
    } else {
      // For regular fields
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async () => {
const slug = pageSlugs[activePage];
  console.log("Slug:", slug); // Verify slug
  console.log("FormData state:", formData); // Verify formData content

  const formDataToSend = new FormData();

  // Always append slug and basic fields
  formDataToSend.append("slug", slug);

  if (slug === "home") {
    console.log("Home page formData:", formData.home); // Debug home page data
    Object.entries(formData.home).forEach(([section, fields]) => {
      Object.entries(fields).forEach(([key, value]) => {
        formDataToSend.append(`home[${section}][${key}]`, value || "");
      });
    });
  } else {
    console.log("Non-home page formData:", formData); // Debug other pages
    formDataToSend.append("title", formData.title || "");
    formDataToSend.append("content", formData.content || "");

    if (formData.banner) {
      formDataToSend.append("banner", formData.banner);
    }
    if (formData.secondaryImage) {
      formDataToSend.append("secondaryImage", formData.secondaryImage);
    }
  }

  // Debug FormData entries
  console.log("FormData entries:");
  for (let [key, value] of formDataToSend.entries()) {
    console.log(`${key}: ${value instanceof File ? value.name : value}`);
  }

    try {
      let res;

      console.log("form data to be send", formDataToSend);

      if (formData._id) {
        console.log("form id ", formData._id);
        // UPDATE (PUT)
        res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/cms/${slug}`,
          {
            method: "PUT",
            body: formDataToSend, // Pass FormData directly, do not spread
          }
        );
      } else {
        // CREATE (POST)
        res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cms`, {
          method: "POST",
          body: formDataToSend,
        });
      }

      if (res.ok) {
        const data = await res.json();
        console.log("Response:", data);
        alert(`Page ${formData._id ? "updated" : "created"} successfully!`);

        // Always update formData with the response to get latest data
        setFormData(data);
      } else {
        const errorData = await res.json();
        console.error("Server error:", errorData);
        alert(`Failed to save page: ${errorData.message}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error saving page. Please try again.");
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case 1:
        return (
          <AboutPage
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
            setFormData={setFormData}
            slug={slug}
          />
        );
      case 2:
        return (
          <PrivacyPolicyPage
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
            setFormData={setFormData}
            slug={slug}
          />
        );
      case 3:
        return (
          <TermsPage
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
            slug={slug}
          />
        );
      case 4:
        return (
          <HomePage
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleSubmit={handleSubmit}
            slug={slug}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="bg-white rounded-lg shadow-md">{renderContent()}</div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
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
            {num === 1 && "About"}
            {num === 2 && "Privacy"}
            {num === 3 && "Terms"}
            {num === 4 && "Home"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CMS;
