
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Car, User, LogIn, UserPlus } from 'lucide-react';

// const Navbar = () => {
//   const location = useLocation();

//   const isActive = (path: string) => {
//     return location.pathname === path;
//   };

//   return (
//     <nav className="bg-white shadow-lg border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
//             <Car className="w-8 h-8" />
//             <span>OnTheWay</span>
//           </Link>
          
//           <div className="flex items-center space-x-6">
//             <Link 
//               to="/" 
//               className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 isActive('/') 
//                   ? 'text-primary bg-primary/10' 
//                   : 'text-gray-700 hover:text-primary hover:bg-gray-100'
//               }`}
//             >
//               Home
//             </Link>
            
//             <Link 
//               to="/login" 
//               className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                 isActive('/login') 
//                   ? 'text-primary bg-primary/10' 
//                   : 'text-gray-700 hover:text-primary hover:bg-gray-100'
//               }`}
//             >
//               <LogIn className="w-4 h-4" />
//               <span>Login</span>
//             </Link>
            
//             <Link 
//               to="/register" 
//               className={`flex items-center space-x-1 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors ${
//                 isActive('/register') ? 'ring-2 ring-primary/30' : ''
//               }`}
//             >
//               <UserPlus className="w-4 h-4" />
//               <span>Sign Up</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // On mount, get name from localStorage
  useEffect(() => {
    const name = localStorage.getItem('name');
    setFirstname(name);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setFirstname(null);
    navigate('/');
    window.location.reload(); // Optional: to re-render all components
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        OnTheWay
      </Link>

      <div className="flex items-center space-x-4">
        {!firstname ? (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Hello {firstname}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
