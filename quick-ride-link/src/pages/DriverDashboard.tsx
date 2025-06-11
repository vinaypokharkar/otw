
import React, { useState } from 'react';
import { Car, DollarSign, Clock, Star, Navigation, Users, TrendingUp } from 'lucide-react';

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Driver Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your rides and track your earnings</p>
        </div>

        {/* Status Toggle */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Driver Status</h2>
              <p className="text-gray-600">
                {isOnline ? 'You are online and available for rides' : 'You are offline'}
              </p>
            </div>
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                isOnline
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {isOnline ? 'Go Offline' : 'Go Online'}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Current Ride */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Ride</h2>
              {isOnline ? (
                <div className="text-center py-8">
                  <Navigation className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Waiting for ride requests</p>
                  <p className="text-sm text-gray-400">New requests will appear here</p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Car className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">You are offline</p>
                  <p className="text-sm text-gray-400">Go online to start receiving ride requests</p>
                </div>
              )}
            </div>

            {/* Today's Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Summary</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">$127</p>
                  <p className="text-sm text-gray-600">Earnings</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-sm text-gray-600">Rides</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">6.5h</p>
                  <p className="text-sm text-gray-600">Online</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">4.9</p>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Earnings */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Earnings</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-semibold text-green-600">$643</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Week</span>
                  <span className="font-semibold">$578</span>
                </div>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">+11% from last week</span>
                </div>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Make/Model</span>
                  <span className="font-medium">Toyota Camry</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year</span>
                  <span className="font-medium">2020</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">License</span>
                  <span className="font-medium">ABC-1234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Color</span>
                  <span className="font-medium">Silver</span>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Acceptance Rate</span>
                  <span className="font-semibold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cancellation Rate</span>
                  <span className="font-semibold">2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Overall Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold ml-1">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
