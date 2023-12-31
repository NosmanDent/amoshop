import React, { useState } from "react";
import { ImTwitter, ImFacebook2 } from "react-icons/im";
import { BsInstagram, BsChatFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Link to="/shop/contactus">
        <motion.div
          className="md:mr-10 mr-4 flex items-center justify-end pb-6 fixed bottom-6 right-6 z-10"
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onHoverStart={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className="flex items-center justify-center w-16 p-2 bg-blue-700 rounded-full"
            layout="position"
          >
            <BsChatFill className="text-white text-3xl ml-auto" />
          </motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="content"
                className="font-bold ml-1 text-#2d8b95 py-2 rouded-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-blue-700">Get In touch with us</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
      <footer className="p-6 bg-gray-800 text-gray-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <a rel="noopener noreferrer" href="#">
                Installation
              </a>
              <a rel="noopener noreferrer" href="#">
                Release Notes
              </a>
              <a rel="noopener noreferrer" href="#">
                Upgrade Guide
              </a>
              <a rel="noopener noreferrer" href="#">
                Using with Preprocessors
              </a>
              <a rel="noopener noreferrer" href="#">
                Optimizing for Production
              </a>
              <a rel="noopener noreferrer" href="#">
                Browser Support
              </a>
              <a rel="noopener noreferrer" href="#">
                IntelliSense
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <a rel="noopener noreferrer" href="#">
                Utility-First
              </a>
              <a rel="noopener noreferrer" href="#">
                Responsive Design
              </a>
              <a rel="noopener noreferrer" href="#">
                Hover, Focus, &amp; Other States
              </a>
              <a rel="noopener noreferrer" href="#">
                Dark Mode
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding Base Styles
              </a>
              <a rel="noopener noreferrer" href="#">
                Extracting Components
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding New Utilities
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <a rel="noopener noreferrer" href="#">
                Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Theme Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Breakpoints
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Colors
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Spacing
              </a>
              <a rel="noopener noreferrer" href="#">
                Configuring Variants
              </a>
              <a rel="noopener noreferrer" href="#">
                Plugins
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center gap-2"
              >
                Facebook{" "}
                <span className="text-lg text-blue-600">
                  <ImFacebook2 />
                </span>
              </a>

              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center gap-2"
              >
                Instagram{" "}
                <span className="text-lg text-red-600">
                  <BsInstagram />
                </span>
              </a>

              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center gap-2"
              >
                Twitter{" "}
                <span className="text-lg text-blue-500">
                  <ImTwitter />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="text-gray-400">
            © Copyright 1986. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
