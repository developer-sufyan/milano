import React from 'react'
import logo from "../../assets/images/imgi_90_logo.webp";
import Image from 'next/image';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Milano</h1>
        <p className="text-lg text-gray-700 mb-6">
          Milano is dedicated to providing ethically and aesthetically crafted fashion for everyone. Our mission is to deliver original, authentic pieces that are made to last, with a focus on customer satisfaction and superior performance.
        </p>
      </div>

      {/* Company Values */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🌱</span>
          <h3 className="font-bold text-lg mb-1">Sustainability</h3>
          <p className="text-gray-600 text-center">We are committed to sustainable practices and eco-friendly materials in all our products.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🎨</span>
          <h3 className="font-bold text-lg mb-1">Creativity</h3>
          <p className="text-gray-600 text-center">Our designs are original, bold, and made to inspire confidence and creativity in our customers.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-3xl mb-2">🤝</span>
          <h3 className="font-bold text-lg mb-1">Community</h3>
          <p className="text-gray-600 text-center">We believe in building authentic connections and supporting our community through every collection.</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/assets/images/team1.webp" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-2" />
            <h4 className="font-semibold">Alex Johnson</h4>
            <span className="text-sm text-gray-500 mb-1">Founder & CEO</span>
            <p className="text-xs text-gray-600">Visionary leader with a passion for sustainable fashion and innovation.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/assets/images/team2.webp" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-2" />
            <h4 className="font-semibold">Maria Lee</h4>
            <span className="text-sm text-gray-500 mb-1">Creative Director</span>
            <p className="text-xs text-gray-600">Bringing bold, original designs to life and inspiring the Milano community.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src="/assets/images/team3.webp" alt="Team Member" className="w-24 h-24 rounded-full object-cover mb-2" />
            <h4 className="font-semibold">Sam Patel</h4>
            <span className="text-sm text-gray-500 mb-1">Sustainability Lead</span>
            <p className="text-xs text-gray-600">Ensuring every product meets our high standards for ethics and sustainability.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
