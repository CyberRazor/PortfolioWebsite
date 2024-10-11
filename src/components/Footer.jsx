import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social icons


const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-black/15 to-green/15  text-gray 4">
      <div className="container mx-auto px-4 grid grid-cols-3 md:grid-cols-3 gap-8">
        
        {/* About Us Section */}
        <div></div>
        <div>
          <h3 className="text-lg font-bold text-gray mb-4 ">About This Page</h3>
          <p className="text-sm">
Michael Taylor is a freelance audio designer with 12+ years of experience. Follow on social media for the latest updates on upcoming projects and availability.
          </p>
        </div>


        {/* Social Media Links Section */}
        <div>
          <h3 className="text-lg font-bold text-center text-gray mx-auto mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">


                <a href="https://twitter.com/stomp224" className="hover:text-white">
                    <FaTwitter className="text-bluetw mx-2 w-8 h-8" />
                 </a>

                <a href="https://www.youtube.com/@VimesWithAVee" className="hover:text-white">
                    <FaYoutube className="text-red mx-2 w-8 h-8" />
                </a>

                <a href="#https://www.linkedin.com/in/michael-taylor-57477422/twit" className="hover:text-white">
                    <FaLinkedin className="text-blueli mx-2 w-8 h-8" />
                </a>

                <a href="https://github.com/CyberRazor" className="hover:text-white">
                    <FaGithub className="text-black mx-2 w-8 h-8" />
                </a>

            
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray">
        &copy; {new Date().getFullYear()} Michael Taylor Audio Design. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
