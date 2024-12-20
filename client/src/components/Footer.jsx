import React from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaArrowRight
} from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container px-6 py-12 mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex gap-2 items-center">
              <img 
                className="w-auto h-10 opacity-90" 
                src={logo} 
                alt="MarketSphere Logo" 
              />
              <span className="text-gray-900 font-medium text-xl">MarketSphere</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering businesses through innovative digital solutions and creative excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-medium text-sm tracking-wider uppercase">
              Navigation
            </h3>
            <nav className="grid grid-cols-1 gap-3">
              {['Home', 'About', 'Teams', 'Privacy', 'Cookies'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200 
                           text-sm group flex items-center"
                >
                  <span className="relative">
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 
                                   group-hover:w-full transition-all duration-200"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-medium text-sm tracking-wider uppercase">
              Contact
            </h3>
            <div className="space-y-4">
              {[
                { icon: FaMapMarkerAlt, text: 'Dhaka, Bangladesh' },
                { icon: FaPhone, text: '(+880) 1534-633727' },
                { icon: FaEnvelope, text: 'najibhossain1234@gmail.com' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 text-gray-500 group">
                  <item.icon className="w-5 h-5 mt-1" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-medium text-sm tracking-wider uppercase">
              Newsletter
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                Stay updated with our latest news and updates.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border-b border-gray-200 
                           focus:outline-none focus:border-gray-900 
                           text-sm transition-colors duration-200"
                />
                <button className="ml-2 p-2 text-gray-900 hover:text-gray-600 
                                 transition-colors duration-200">
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-500">
                © 2025 MarketSphere. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {['Terms', 'Privacy', 'Security'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 
                             transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/md-najib-hossain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 
                         transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/NajibHossain49"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 
                         transition-colors duration-200"
                aria-label="Github"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;