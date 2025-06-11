
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Users, MapPin, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);


  // Handle click on Passenger Card
  const handlePassengerClick = () => {
    if (isLoggedIn) {
      navigate("/passenger"); // or your actual passenger route
    } else {
      navigate("/register?role=passenger");
    }
  };

  // You can add a similar function for the driver if needed
  const handleDriverClick = () => {
    if (isLoggedIn) {
      navigate("/driver"); // or another route if logged in
    } else {
      navigate("/register?role=driver");
    }
  };

  return (

    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Ride, Your Way
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with reliable drivers or earn money driving. Safe, fast, and convenient rides whenever you need them.
            </p>
            
            {/* Role Selection Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
              <div 
                onClick={handlePassengerClick}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">I'm a Passenger</h3>
                  <p className="text-gray-600 mb-6">
                    Book rides quickly and safely. Get to your destination with ease.
                  </p>
                  <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium group-hover:bg-blue-700 transition-colors" >
                    Get Started
                  </div>
                </div>
              </div>

              <div 
                onClick={handleDriverClick}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Car className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">I'm a Driver</h3>
                  <p className="text-gray-600 mb-6">
                    Start earning money driving on your own schedule. Join our driver network.
                  </p>
                  <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium group-hover:bg-green-700 transition-colors">
                    Start Driving
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose OnTheWay?</h2>
            <p className="text-lg text-gray-600">Experience the best in ride-sharing technology</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Track your ride in real-time and know exactly when your driver will arrive.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">All drivers are verified and background checked for your safety.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Get rides whenever you need them, day or night.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
