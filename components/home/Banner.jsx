import { assetPath } from "../../lib/assetPath";

export default function Banner() {
  return (
    <div className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image with stronger blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[6px]" // increased blur from 2px → 6px
        style={{
          backgroundImage: `url('${assetPath(
            "/images/banner/school-bg.webp"
          )}')`,
        }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 py-12">
        {/* Logo */}
        <img
          src={assetPath("/images/banner/logo.webp")}
          alt="School Logo"
          width={100}
          height={100}
          className="mb-6 pt-16"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center leading-snug">
          Welcome to{" "}
          <span className="text-blue-400">Our</span>{" "}
          <span className="text-green-500 text-4xl md:text-5xl">
            School
          </span>{" "}
          Portal
        </h1>

        {/* Description */}
        <p className="mt-4 text-center text-base md:text-lg max-w-2xl text-gray-200">
          A centralized digital platform designed to support students, parents,
          and teachers with academic records, announcements, admissions, and
          essential school services.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="px-6 py-2 border rounded text-white border-[#0C9F77] hover:bg-[#0C9F77] transition">
            Student Login
          </button>

          <button className="px-6 py-2 border rounded text-white border-[#0C9F77] hover:bg-[#0C9F77] transition">
            Update Application
          </button>

          <button className="px-6 py-2 border rounded text-white border-[#0C9F77] hover:bg-[#0C9F77] transition">
            New Admission
          </button>
        </div>
      </div>
    </div>
  );
}
