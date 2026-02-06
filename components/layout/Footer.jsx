import Image from "next/image";
import { assetPath } from "../../lib/assetPath";

export default function Footer() {
  return (
    <footer className="bg-[#164776] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Left: Logo */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            src={assetPath("/images/banner/logo.webp")}
            alt="School Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex w-full md:w-auto gap-6 items-start md:items-stretch">
          {/* Vertical Line */}
          <div className="hidden md:block w-[2px] bg-white" />

          {/* Text Content */}
          <div className="text-left w-full">
            <h3 className="text-2xl font-semibold">
              ABC International School
            </h3>

            <p className="text-base text-gray-200 mt-4 leading-relaxed">
              Academic & Administrative Office
            </p>

            <p className="text-base text-gray-200 mt-4 leading-relaxed">
              ABC International School Campus <br />
              Level 7, Education Tower <br />
              Shah Alam, Selangor, Malaysia
            </p>

            <a
              href="tel:+60355143512"
              className="block text-base text-gray-200 mt-4"
            >
              Phone: +60 3-5514 3512 / 3513
            </a>

            <a
              href="mailto:info@abcschool.edu.my"
              className="block text-base text-gray-200 mt-1"
            >
              Email: info@abcschool.edu.my
            </a>

            {/* Social Media */}
            <div className="flex gap-5 mt-5 text-xl">
              <a href="#" aria-label="Facebook">
                <Image
                  src={assetPath("/icons/fb.svg")}
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Image
                  src={assetPath("/icons/instagram.svg")}
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="#" aria-label="X">
                <Image
                  src={assetPath("/icons/x.svg")}
                  alt="X"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} ABC International School. All Rights Reserved.
        <br />
        Powered by Awfatech Global Sdn Bhd.
      </div>
    </footer>
  );
}
