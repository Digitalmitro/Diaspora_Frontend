"use client";
import Image from "next/image";
import React, { useState } from "react";
import back from "../../../public/back.png";
import { useRouter } from "next/navigation";
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [formData, setFormData] = useState({
    jobTitle: "",
    department: "",
    location: "",
    description: "",
    yearsExperience: "",
    skills: "",
    educationRequirements: "",
    openingsCount: "",
    salaryRange: "",
    currency: "",
    jobType: "",
    perksBenefits: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.jobTitle) newErrors.jobTitle = "Job Title is required";
      if (!formData.department) newErrors.department = "Department is required";
      if (!formData.location) newErrors.location = "Location is required";
      if (!formData.description)
        newErrors.description = "Description is required";
    } else if (step === 2) {
      if (!formData.yearsExperience)
        newErrors.yearsExperience = "Years of Experience is required";
      if (!formData.skills) newErrors.skills = "Skills are required";
      if (!formData.educationRequirements)
        newErrors.educationRequirements = "Education Requirements are required";
      if (!formData.openingsCount)
        newErrors.openingsCount = "Openings Count is required";
    } else if (step === 3) {
      if (!formData.salaryRange)
        newErrors.salaryRange = "Salary Range is required";
      if (!formData.currency) newErrors.currency = "Currency is required";
      if (!formData.jobType) newErrors.jobType = "Job Type is required";
      if (!formData.perksBenefits)
        newErrors.perksBenefits = "Perks/Benefits are required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log("Form submitted:", formData);
      alert("Job details submitted successfully!");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="">
            <h2 className="text-2xl font-bold mb-4 text-center">Job Details</h2>
            <div className="bg-[#EDEDED] border p-4 md:px-12">
              <div className="mb-4">
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                  className="mt-1  w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm">{errors.jobTitle}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Department"
                  className="mt-1 w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.department && (
                  <p className="text-red-500 text-sm">{errors.department}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location (Remote/On-site)"
                  className="mt-1  w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">{errors.location}</p>
                )}
              </div>
              <div className="mb-4">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description (Rich text)"
                  className="mt-1  w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Requirements
            </h2>
            <div className="bg-[#EDEDED] border p-4 md:px-12">
              <div className="mb-4">
                <input
                  type="text"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  placeholder="Years of Experience"
                  className="mt-1 w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.yearsExperience && (
                  <p className="text-red-500 text-sm">
                    {errors.yearsExperience}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Skills"
                  className="mt-1 w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.skills && (
                  <p className="text-red-500 text-sm">{errors.skills}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="educationRequirements"
                  value={formData.educationRequirements}
                  onChange={handleChange}
                  placeholder="Education Requirements"
                  className="mt-1 w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.educationRequirements && (
                  <p className="text-red-500 text-sm">
                    {errors.educationRequirements}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="openingsCount"
                  value={formData.openingsCount}
                  onChange={handleChange}
                  placeholder="Openings Count"
                  className="mt-1 w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.openingsCount && (
                  <p className="text-red-500 text-sm">{errors.openingsCount}</p>
                )}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Salary & Job Type
            </h2>
            <div className="bg-[#EDEDED] border p-6 md:px-12">
              <div className="mb-4">
                <input
                  type="text"
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleChange}
                  placeholder="Salary Range"
                  className="mt-1 w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.salaryRange && (
                  <p className="text-red-500 text-sm">{errors.salaryRange}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  placeholder="Currency"
                  className="mt-1 w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.currency && (
                  <p className="text-red-500 text-sm">{errors.currency}</p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  placeholder="Job Type (Full-time, Internship, Contract)"
                  className="mt-1 w-full border py-2 font-bold bg-white text-center outline-none"
                />
                {errors.jobType && (
                  <p className="text-red-500 text-sm">{errors.jobType}</p>
                )}
              </div>
              <input
                type="text"
                name="perksBenefits"
                value={formData.perksBenefits}
                onChange={handleChange}
                placeholder="Perks/Benefits"
                className="mt-1 w-full border py-2 font-bold bg-white text-center outline-none"
              />
              {errors.perksBenefits && (
                <p className="text-red-500 text-sm">{errors.perksBenefits}</p>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main>
      <div className="absolute top-6 left-6">
        <button
          className="flex flex-col font-bold items-center text-sm text-gray-700 hover:text-black"
          onClick={() => router.back()}
        >
          <span className="mr-2">
            <Image src={back} alt="Back" width={30} height={30} />
          </span>{" "}
          BACK
        </button>
      </div>
      <div className="max-w-lg  mx-auto mt-10 p-6 ">
        <div className="mb-6">
          {/* <div className="flex justify-between">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-1/3 text-center py-2 ${step === s ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
            >
              Step {s}
            </div>
          ))}
        </div> */}
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          {renderStep()}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-1 w-24 bg-yellow-500 text-lg  tracking-wider text-white "
              >
                Prev
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-1 w-24 bg-yellow-500 text-lg  tracking-wider text-white "
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-1 w-24 bg-yellow-500 text-lg  tracking-wider text-white "
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default MultiStepForm;
