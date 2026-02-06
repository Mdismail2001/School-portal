"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About School", href: "/about-school" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const linkStyle = isHome
    ? "text-white hover:text-green-600"
    : "text-gray-800 hover:text-blue-600";

  return (
    <nav
      className={`w-full py-8 px-4 border-b z-50 ${
        isHome
          ? "bg-transparent border-transparent absolute top-0 left-0"
          : "bg-gray-100 border-gray-300"
      }`}
    >
      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center gap-10">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className={`font-medium ${linkStyle}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-2xl ${isHome ? "text-white" : "text-gray-800"}`}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 bg-[#164776] rounded-md p-4 shadow-md">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-[#0C9F77] font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
