import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="mb-4">
              We're a family-owned restaurant serving authentic Bangladeshi
              cuisine in the heart of the city. Our dishes are made with fresh,
              locally-sourced ingredients and are cooked to order.
            </p>
            <ul className="list-disc list-inside">
              <li>123 Main Street</li>
              <li>City, State ZIP</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Hours</h2>
            <ul className="list-disc list-inside">
              <li>Monday - Friday: 11am - 10pm</li>
              <li>Saturday: 12pm - 11pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Links</h2>
            <ul className="list-disc list-inside">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Reservation</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <Link>
                  <FaFacebook></FaFacebook>
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagram></FaInstagram>
                </Link>
              </li>
              <li>
                <Link>
                  <FaTwitter></FaTwitter>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 pt-8">
          <small>&copy;2023 RuchiBhoj. All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
