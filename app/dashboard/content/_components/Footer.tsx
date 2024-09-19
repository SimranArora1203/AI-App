import React from 'react'
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">AI Content Generator</h3>
          <p className="text-gray-400">
            Generate high-quality content using advanced AI technology.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="text-gray-400">
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="/dashboard/billing" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="/" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
          <div className="flex items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mr-6"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white mr-6"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:info@example.com"
              className="text-gray-400 hover:text-white"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-700" />
      <p className="text-center text-gray-400">
        &copy; {new Date().getFullYear()} AI Content Generator. All rights
        reserved.
      </p>
    </div>
  </footer>

  )
}

export default Footer
