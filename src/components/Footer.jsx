import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid with 2 columns for the first three columns */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Training Plans</a></li>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Programs</a></li>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Social Row - Now in a separate row */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
              <FaFacebook className="w-6 h-6"/>
            </a>
            <a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Download App Button */}
        <div className="mt-12">
          <h3 className="font-semibold text-lg">Get the TriFusion App</h3>
          <div className="flex items-center gap-4 mt-[-24px]">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img className="w-32" src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" alt="" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img className="w-32" src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" alt="" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12">
          <p className="text-sm sm:text-base">&copy; 2024 Triathlon Training. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
