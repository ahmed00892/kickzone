import React from "react";
import ContactUs from "../components/ContactUs";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // Import the theme hook

export default function Contact() {
  const { theme } = useTheme(); // Get current theme

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-dark-bg text-dark-text"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section with Tailwind background */}
      <section className="relative flex items-center justify-center h-56 md:h-72 bg-contact-bg bg-cover bg-center">
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-black bg-opacity-70"
              : "bg-black bg-opacity-50"
          }`}
        />

        {/* Text Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-dark-accent" : "text-brand-blue"
            }`}
          >
            We'd love to hear from you
          </h2>
          <p
            className={`mt-4 max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Whether you have a question, suggestion, or just want to say hello —
            feel free to reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactUs />
          </div>

          {/* Contact Info with Icons + Animations */}
          <div className="space-y-6">
            <div
              className={`p-6 rounded-2xl shadow text-center transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl ${
                theme === "dark"
                  ? "bg-dark-surface hover:bg-gray-800"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <MapPin
                className={`mx-auto w-8 h-8 mb-2 transition duration-300 ${
                  theme === "dark" ? "text-dark-accent" : "text-brand-blue"
                }`}
              />
              <h4
                className={`mt-3 font-semibold ${
                  theme === "dark" ? "text-dark-text" : "text-gray-800"
                }`}
              >
                Our Location
              </h4>
              <p
                className={`text-sm mt-1 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Al-Husseiniya, Mecca
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl shadow text-center transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl ${
                theme === "dark"
                  ? "bg-dark-surface hover:bg-gray-800"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <Phone
                className={`mx-auto w-8 h-8 mb-2 ${
                  theme === "dark" ? "text-dark-accent" : "text-brand-blue"
                }`}
              />
              <h4
                className={`mt-3 font-semibold ${
                  theme === "dark" ? "text-dark-text" : "text-gray-800"
                }`}
              >
                Call Us
              </h4>
              <p
                className={`text-sm mt-1 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                +966 539 130 130
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl shadow text-center transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl ${
                theme === "dark"
                  ? "bg-dark-surface hover:bg-gray-800"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <Mail
                className={`mx-auto w-8 h-8 mb-2 ${
                  theme === "dark" ? "text-dark-accent" : "text-brand-blue"
                }`}
              />
              <h4
                className={`mt-3 font-semibold ${
                  theme === "dark" ? "text-dark-text" : "text-gray-800"
                }`}
              >
                Email
              </h4>
              <p
                className={`text-sm mt-1 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                info@thepadelmap.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <iframe
            title="map"
            className="w-full h-72 md:h-96 rounded-lg border-0 shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402114.123456789!2d39.5!3d21.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE0JzUwLjAiTiAzOcKwMzAnNDYuMCJF!5e0!3m2!1sen!2s!4v0000000000000"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
