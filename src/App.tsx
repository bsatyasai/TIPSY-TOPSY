import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-[#0a0a0c] text-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<Shop />} />
              <Route path="/collections" element={<Shop />} />
              <Route path="/trending" element={<Shop />} />
              {/* Other routes placeholder */}
              <Route path="*" element={<Home />} />
            </Routes>
            
            {/* Flash Sale Bar Simulation */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 bg-pink-500 text-white px-6 py-2 rounded-full font-black text-sm uppercase shadow-[0_0_20px_rgba(236,72,153,0.5)] transform -rotate-1 pointer-events-none">
              Flash Sale: 22m : 14s
            </div>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
