"use client";

import { FaPlay } from "react-icons/fa";

const questions = [
  {
    title: "General Information",
    description: "Overview of the school system, policies, and services.",
  },
  {
    title: "Student Admission",
    description: "Guidelines on student enrollment and registration.",
  },
  {
    title: "Application Process",
    description: "Step-by-step explanation of the admission process.",
  },
  {
    title: "Technical Support",
    description: "Help for login issues and system-related problems.",
  },
  {
    title: "Course Registration",
    description: "How to register or update academic courses.",
  },
  {
    title: "Student Verification",
    description: "Procedures for validating student information.",
  },
  {
    title: "Withdrawal Process",
    description: "Steps to withdraw or cancel an application.",
  },
  {
    title: "User Responsibilities",
    description: "Rules and responsibilities for students and parents.",
  },
];

export default function FAQ() {
  return (
    <div
      className="relative bg-cover bg-center py-16 px-4"
      style={{
        backgroundImage: "url('/images/soalan/bg.png')",
      }}
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Frequently Asked Questions
      </h2>

      {/* FAQ Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((item, index) => (
          <button
            key={index}
            className="group w-full text-left flex items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg active:shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#0C9F77]"
          >
            {/* Text */}
            <div className="pr-4">
              <h3 className="text-base md:text-lg font-semibold text-black mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>

            {/* Icon */}
            <FaPlay className="text-sm text-gray-400 group-hover:text-[#0C9F77] group-active:text-[#0C9F77] group-focus-within:text-[#0C9F77] transition-colors duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
}
