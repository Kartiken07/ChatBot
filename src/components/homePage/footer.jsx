import React from 'react';
import 'font-awesome/css/font-awesome.min.css';



const Footer = () => {
  return (
    <footer className=" text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
        {/* Logo and description */}
        <div className="flex flex-col items-center md:items-start px-10 ">
          <h2 className="text-3xl font-bold text-green mb-4">Your Logo</h2>
          <p className="text-center md:text-left">
            This platform offers top-quality content editing services at affordable prices. Our skilled freelancers, utilizing premium software, ensure your content is polished to perfection, meeting the highest industry standards.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center md:items-start px-5">
          <h3 className="text-xl font-semibold text-green mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green">Home</a></li>
            <li><a href="/about" className="hover:text-green">About Us</a></li>
            <li><a href="/services" className="hover:text-green">Services</a></li>
            <li><a href="/contact" className="hover:text-green">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start px-5">
          <h3 className="text-xl font-semibold text-green mb-4">Contact Us</h3>
          <p>123 Street Name, City, Country</p>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +123 456 7890</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:text-green">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-green">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="hover:text-green">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-green">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
