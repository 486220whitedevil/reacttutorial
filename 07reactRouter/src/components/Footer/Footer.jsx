import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Name */}
          <h2 className="text-xl font-semibold text-white">
            MyWebsite
          </h2>

          {/* Links */}
          <ul className="flex gap-6 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition">
              About
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
