import React, { useState } from 'react';
import {
  Typography,
  Button,
  Input,
  Chip,
} from "@material-tailwind/react";
import { Clock, Search, Filter } from 'lucide-react';
import CartForm from '../components/CartForm';

const Cart = () => {
  const [currentFilter, setCurrentFilter] = useState('all');

  const footballFields = [
    {
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80",
      title: "Al Ahly Sports Club - Main Field",
      location: "Nasr City, Cairo",
      rating: 4.9,
      reviews: 243,
      price: "200",
      oldPrice: "250",
      duration: "90 minutes",
      capacity: "10-14 players",
      availability: "Available Today",
      surfaceType: "Natural Grass",
      amenities: ["Professional Lighting", "Cafeteria", "Parking"]
    },
    {
      image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80",
      title: "Zamalek Athletic Stadium - Field A",
      location: "Dokki, Giza",
      rating: 4.8,
      reviews: 198,
      price: "250",
      duration: "90 minutes",
      capacity: "14-18 players",
      availability: "Available Tomorrow",
      surfaceType: "Natural Grass",
      amenities: ["Night Lights", "VIP Lounge", "Security"]
    },
    {
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
      title: "Stars Academy - Training Field",
      location: "6th October, Giza",
      rating: 4.7,
      reviews: 156,
      price: "180",
      oldPrice: "220",
      duration: "60 minutes",
      capacity: "10-12 players",
      availability: "Available Today",
      surfaceType: "Artificial Turf",
      amenities: ["Night Lights", "Cafeteria", "Professional Training"]
    },
    {
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&q=80",
      title: "Youth & Sports Center - Central Field",
      location: "Maadi, Cairo",
      rating: 4.6,
      reviews: 134,
      price: "150",
      duration: "90 minutes",
      capacity: "10-14 players",
      availability: "Available Today",
      surfaceType: "Artificial Turf",
      amenities: ["Lighting", "Parking", "Locker Rooms"]
    },
    {
      image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&q=80",
      title: "Olympic Stadium - International Field",
      location: "Sheikh Zayed, Giza",
      rating: 4.9,
      reviews: 287,
      price: "300",
      duration: "120 minutes",
      capacity: "18-22 players",
      availability: "Available Tomorrow",
      surfaceType: "Natural Grass",
      amenities: ["Professional Lighting", "VIP Areas", "Premium Cafeteria"]
    },
    {
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
      title: "Community Sports Club - Field 1",
      location: "New Cairo, Cairo",
      rating: 4.5,
      reviews: 167,
      price: "220",
      oldPrice: "270",
      duration: "90 minutes",
      capacity: "10-16 players",
      availability: "Available Today",
      surfaceType: "Artificial Turf",
      amenities: ["LED Lighting", "Music System", "Comfortable Seating"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <Typography className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              THE FOOTBALL MAP
            </Typography>
            <Typography className="text-xl md:text-2xl text-teal-50 mb-4 font-light">
              Welcome to The Football Map, where we provide top-notch football fields
            </Typography>
            <Typography className="text-lg md:text-xl text-teal-100 mb-10 leading-relaxed">
              Experience the Thrill of Football with Ease. Use The Football Map & Reserve Your Field Today
            </Typography>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-2 flex items-center gap-2">
              <div className="flex-1 px-3">
                <Input
                  type="text"
                  placeholder="Search for a field in your area..."
                  className="!border-0 focus:!border-0"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{
                    className: "min-w-0"
                  }}
                  icon={<Search className="text-gray-400" size={20} />}
                />
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 shrink-0 normal-case font-semibold">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Typography className="text-3xl font-bold text-teal-600">1</Typography>
              </div>
              <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                Choose your field
              </Typography>
              <Typography className="text-gray-600 leading-relaxed">
                Whether you're playing with friends or family
              </Typography>
            </div>
            <div className="p-6">
              <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Typography className="text-3xl font-bold text-teal-600">2</Typography>
              </div>
              <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                Choose a time
              </Typography>
              <Typography className="text-gray-600 leading-relaxed">
                Choose a convenient time and date to enjoy the game
              </Typography>
            </div>
            <div className="p-6">
              <div className="bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Typography className="text-3xl font-bold text-teal-600">3</Typography>
              </div>
              <Typography variant="h5" color="blue-gray" className="mb-3 font-bold">
                Book your field
              </Typography>
              <Typography className="text-gray-600 leading-relaxed">
                Experience the Thrill of Football with Ease
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Opening Hours Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <Clock size={24} />
              <Typography variant="h6" className="font-bold">
                Opening Hours
              </Typography>
            </div>
            <Typography variant="h6" className="font-light">
              Everyday: 5 PM – 7 AM
            </Typography>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter size={20} className="text-gray-400 flex-shrink-0" />
            
            <Chip
              value="All Fields"
              onClick={() => setCurrentFilter('all')}
              className={`cursor-pointer normal-case font-semibold ${
                currentFilter === 'all' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            />
            <Chip
              value="Available Today"
              onClick={() => setCurrentFilter('today')}
              className={`cursor-pointer normal-case font-semibold ${
                currentFilter === 'today' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            />
            <Chip
              value="Natural Grass"
              onClick={() => setCurrentFilter('natural')}
              className={`cursor-pointer normal-case font-semibold ${
                currentFilter === 'natural' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            />
            <Chip
              value="Artificial Turf"
              onClick={() => setCurrentFilter('artificial')}
              className={`cursor-pointer normal-case font-semibold ${
                currentFilter === 'artificial' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            />
            <Chip
              value="Top Rated"
              onClick={() => setCurrentFilter('rated')}
              className={`cursor-pointer normal-case font-semibold ${
                currentFilter === 'rated' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Fields Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Typography variant="h3" color="blue-gray" className="mb-2 font-bold">
          Best Sellers
        </Typography>
        <Typography className="text-gray-600 mb-8 text-lg">
          Experience the excitement of football with top-quality fields
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {footballFields.map((field, index) => (
            <CartForm key={index} {...field} />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <Typography variant="h2" color="blue-gray" className="mb-4 font-bold">
              About Us
            </Typography>
            <Typography variant="h5" className="text-teal-600 font-semibold mb-6">
              Egypt's First and Premier Football Field Booking Service
            </Typography>
          </div>
          <div className="max-w-3xl mx-auto">
            <Typography className="text-center mb-6 text-gray-700 text-lg leading-relaxed">
              Welcome to The Football Map, your one-stop destination for booking your next game and purchasing top-quality football equipment. 
              We proudly offer state-of-the-art fields, designed specifically for the best playing experience.
            </Typography>
            <Typography className="text-center text-gray-700 text-lg leading-relaxed">
              We aim to provide our customers with a convenient and reliable service, easy online booking, and secure payment options. 
              Whether you're a seasoned pro or a beginner, our website has everything you need to enjoy the game of football to the fullest.
            </Typography>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Typography variant="h2" className="mb-4 font-bold">
            Looking for the Right Field?
          </Typography>
          <Typography variant="h5" className="text-teal-50 mb-8 font-light">
            Contact us now and we'll help you find the perfect field for your needs
          </Typography>
          <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-50 shadow-xl normal-case font-semibold text-base px-8">
            Contact Us Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Typography variant="small">
            © 2024 All Rights Reserved - Football Field Booking Platform
          </Typography>
        </div>
      </footer>
    </div>
  );
};

export default Cart;