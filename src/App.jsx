import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import BookingModal from './components/BookingModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SpeakingPage from './pages/SpeakingPage';
import CoachingPage from './pages/CoachingPage';
import CoursesPage from './pages/CoursesPage';
import PathsPage from './pages/PathsPage';
import ShortsPage from './pages/ShortsPage';
import MediaPage from './pages/MediaPage';
import ShopPage from './pages/ShopPage';
import PodcastPage from './pages/PodcastPage';
import BooksPage from './pages/BooksPage';
import FaqPage from './pages/FaqPage';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedKeynote, setSelectedKeynote] = useState('');
  const [activeVideoId, setActiveVideoId] = useState(null);
  const location = useLocation();

  // Ensure scroll restoration starts from top on page refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Handle smooth scrolling to in-page anchors on route / hash transitions
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const handleOpenBooking = (topic = '') => {
    setSelectedKeynote(typeof topic === 'string' ? topic : '');
    setBookingOpen(true);
  };

  const handlePlayVideo = (videoId) => {
    setActiveVideoId(videoId);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0B0A09] text-white flex flex-col font-sans selection:bg-[#2D0891] selection:text-white antialiased">
        
        {/* Mainstage Architectural Global Header */}
        <Navbar onOpenBooking={handleOpenBooking} />

        <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenBooking={handleOpenBooking}
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                onOpenBooking={handleOpenBooking}
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/speaking"
            element={
              <SpeakingPage
                onOpenBooking={handleOpenBooking}
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/coaching"
            element={
              <CoachingPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />
          <Route
            path="/courses"
            element={
              <CoursesPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />
          <Route
            path="/paths"
            element={
              <PathsPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />
          <Route
            path="/shorts"
            element={
              <ShortsPage
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/media"
            element={
              <MediaPage
                onOpenBooking={handleOpenBooking}
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <ShopPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />
          <Route
            path="/shop/:productId"
            element={
              <ShopPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />
          <Route
            path="/podcast"
            element={
              <PodcastPage
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/books"
            element={
              <BooksPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />
          <Route
            path="/faq"
            element={
              <FaqPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />

          {/* Client Navigation Routes & Aliases */}
          <Route
            path="/programs"
            element={
              <CoursesPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />
          <Route
            path="/watch"
            element={
              <ShortsPage
                onPlayVideo={handlePlayVideo}
              />
            }
          />
          <Route
            path="/other-ventures"
            element={
              <PathsPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />
          <Route
            path="/ventures"
            element={
              <PathsPage
                onOpenBooking={handleOpenBooking}
              />
            }
          />

          {/* Friendly Route Aliases */}
          <Route path="/coaches" element={<Navigate to="/coaching" replace />} />
          <Route path="/coach" element={<Navigate to="/coaching" replace />} />
          <Route path="/speaker" element={<Navigate to="/speaking" replace />} />
          <Route path="/keynotes" element={<Navigate to="/speaking" replace />} />
          <Route path="/book" element={<Navigate to="/books" replace />} />
          <Route path="/store" element={<Navigate to="/shop" replace />} />
          <Route path="/podcasts" element={<Navigate to="/podcast" replace />} />
          <Route path="/course" element={<Navigate to="/courses" replace />} />
          <Route path="/faqs" element={<Navigate to="/faq" replace />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Mainstage Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Video Lightbox Player */}
      <VideoModal
        videoId={activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />

      {/* Calendar Inquiry Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedKeynote={selectedKeynote}
      />

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Checkout Modal */}
      <CheckoutModal />

      {/* Floating Get To Top Button */}
      <ScrollToTop />

    </div>
  </CartProvider>
);
}
