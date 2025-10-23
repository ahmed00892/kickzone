import React from "react";
import ContactUs from "../components/ContactUs";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Tailwind background */}
      <section className="relative flex items-center justify-center h-56 md:h-72 bg-contact-bg bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

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
          <h2 className="text-xl font-semibold text-blue-900">
            We’d love to hear from you
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-700">
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
            <div className="bg-white p-6 rounded-2xl shadow text-center transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
              <MapPin className="mx-auto text-blue-800 w-8 h-8 mb-2 transition duration-300 group-hover:rotate-12" />
              <h4 className="mt-3 font-semibold text-gray-800">Our Location</h4>
              <p className="text-sm text-gray-600 mt-1">Al-Husseiniya, Mecca</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
              <Phone className="mx-auto text-blue-800 w-8 h-8 mb-2" />
              <h4 className="mt-3 font-semibold text-gray-800">Call Us</h4>
              <p className="text-sm text-gray-600 mt-1">+966 539 130 130</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
              <Mail className="mx-auto text-blue-800 w-8 h-8 mb-2" />
              <h4 className="mt-3 font-semibold text-gray-800">Email</h4>
              <p className="text-sm text-gray-600 mt-1">info@thepadelmap.com</p>
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
