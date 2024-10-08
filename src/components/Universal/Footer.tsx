import React from "react";
import { Link } from "react-router-dom";
import {
  FcHome,
  FcConferenceCall,
  FcFeedback,
  FcCamcorderPro,
  FcOldTimeCamera,
  FcClapperboard,
  FcCustomerSupport,
  FcVoicePresentation,
} from "react-icons/fc";

interface FooterProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const columns = [
    {
      title: "Community",
      links: [
        { to: "/", label: "Dashboard", icon: FcHome },
        { to: "/ErrorPage", label: "Friends", icon: FcConferenceCall },
        { to: "/", label: "Messages", icon: FcFeedback },
      ],
    },
    {
      title: "Debate",
      links: [
        { to: "/", label: "Start Debate", icon: FcCamcorderPro },
        { to: "/", label: "Join Debate", icon: FcOldTimeCamera },
        { to: "/", label: "Previous Debates", icon: FcClapperboard },
      ],
    },
    {
      title: "Support",
      links: [
        { to: "/", label: "Help", icon: FcCustomerSupport },
        { to: "/", label: "Ai Chat", icon: FcVoicePresentation },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          to: "/terms-of-service",
          label: "Terms of Service",
          icon: () => null,
        },
        { to: "/legal", label: "Legal", icon: () => null },
        { to: "/privacy-policy", label: "Privacy Policy", icon: () => null },
      ],
    },
  ];

  // Consolas, 'Courier New', monospace

  return (
    <footer
      className={`py-4 transition-transform duration-300 ease-in-out ${
        isDarkMode ? "bg-darkMode text-white" : "bg-lightMode text-black"
      }`}
    >
      {/* Top Border */}
      <div
        className={`border-t-2 ${
          isDarkMode ? "border-gray-600" : "border-gray-300"
        } mb-6`}
      />

      <div className="container mx-auto px-4">
        <div className="flex md:flex-row lg:justify-between gap-6">
          {columns.map((column, index) => (
            <div
              key={index}
              aria-labelledby={`footer-${column.title.toLowerCase()}`}
              className="flex-1"
            >
              <h2
                id={`footer-${column.title.toLowerCase()}`}
                className="text-lg font-bold mb-4"
              >
                {column.title}
              </h2>
              <div className="flex flex-col gap-3">
                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.to}
                    className={`flex items-center font-roboto hover:text-gray-400 space-x-2 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                    aria-label={link.label}
                  >
                    {link.icon && <link.icon size="20" />}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t font-bold border-gray-600 pt-4 text-center text-md mt-6">
        <p className="text-center mx-4 sm:mx-0" aria-live="polite">
          &copy; {new Date().getFullYear()} Debate Me. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
