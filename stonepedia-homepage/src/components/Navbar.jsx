import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { PiSkypeLogoBold } from "react-icons/pi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#1e293b] to-[#334155] p-5">
      <div className="container mx-auto flex items-center justify-between">
        <a href="" className="w-40 lg:mx-10">
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
            alt="StonePedia Logo"
          />
        </a>

        <div className="hidden md:flex flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-1 rounded-lg border-2 border-gray-500 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
          />
        </div>

        <div className="hidden md:flex gap-4 lg:gap-8 lg:mx-10">
          <span className="text-white bg-cyan-600 p-2 rounded-lg hover:bg-cyan-400 cursor-pointer transition-colors">
            <FaFacebookF size={20} />
          </span>
          <span className="text-white bg-pink-600 p-2 rounded-lg hover:bg-pink-400 cursor-pointer transition-colors">
            <FaInstagram size={20} />
          </span>
          <span className="text-white bg-blue-600 p-2 rounded-lg hover:bg-blue-400 cursor-pointer transition-colors">
            <FiTwitter size={20} />
          </span>
          <span className="text-white bg-indigo-600 p-2 rounded-lg hover:bg-indigo-400 cursor-pointer transition-colors">
            <PiSkypeLogoBold size={20} />
          </span>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-white text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-around text-white mt-2">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-1 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300">
          Bestseller
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-1 rounded-xl font-semibold hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
          Stone Pedia Exclusive
        </button>
        <button className="bg-gradient-to-r from-green-500 to-teal-500 px-5 py-1 rounded-xl font-semibold hover:from-teal-500 hover:to-green-500 transition-all duration-300">
          Premium Stones
        </button>
        <button className="bg-gradient-to-r from-yellow-500 to-orange-500 px-5 py-1 rounded-xl font-semibold hover:from-orange-500 hover:to-yellow-500 transition-all duration-300">
          Shop by Category
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed flex flex-col justify-between top-0 right-0 h-full w-2/3 bg-gradient-to-b from-gray-800 to-gray-900 text-white space-y-3 p-6 z-50">
          <div>
            <button className="block py-2 text-cyan-400">Bestseller</button>
            <button className="block py-2 text-purple-400">
              Stone Pedia Exclusive
            </button>
            <button className="block py-2 text-green-400">
              Premium Stones
            </button>
            <button className="block py-2 text-yellow-400">
              Shop by Category
            </button>
          </div>
          <div className="flex gap-6 mx-auto">
            <span className="cursor-pointer">
              <FaFacebookF size={20} />
            </span>
            <span className="cursor-pointer">
              <FaInstagram size={20} />
            </span>
            <span className="cursor-pointer">
              <FiTwitter size={20} />
            </span>
            <span className="cursor-pointer">
              <PiSkypeLogoBold size={20} />
            </span>
          </div>
          <div className="absolute top-2 right-4">
            <button
              className="text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-5">
            <div className="flex justify-end">
              <button onClick={() => setIsModalOpen(false)} className="">
                <FaTimes size={20} className="text-white" />
              </button>
            </div>
            <div className="flex flex-col px-8 py-5 gap-3">
              <h1 className="text-3xl font-semibold font-serif text-white">
                StonePedia
              </h1>
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                Login
              </button>
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
