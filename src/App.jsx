import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import DynamicTitle from './components/DynamicTitle';

import Home from './pages/Home';
import TheFest from './pages/TheFest';
import Events from './pages/Events';
import Schedule from './pages/Schedule';
import Sponsors from './pages/Sponsors';
import Register from './pages/Register';
import Highlights from './pages/Highlights';
import FAQsContact from './pages/FAQsContact';

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <HashRouter>
      {/* Dynamic Browser Tab Title with Route and Focus awareness */}
      <DynamicTitle />

      {/* High-tech cyberpunk festival mouse pointer */}
      <CustomCursor />

      {/* Mood Indigo style futuristic loading intro screen */}
      {!loadingDone && <LoadingScreen onComplete={() => setLoadingDone(true)} />}

      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-[#08090D] text-[#F4EBDD] selection:bg-[#F12B25] selection:text-white relative">
        {/* Single synchronized global navbar with live audio looper & working hyperlinks */}
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/the-fest" element={<TheFest />} />
            <Route path="/events" element={<Events />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/register" element={<Register />} />

            {/* Pro Nights revamped to redirect to Events page */}
            <Route path="/pro-nights" element={<Navigate to="/events" replace />} />
            <Route path="/plan-your-visit" element={<Navigate to="/schedule" replace />} />

            {/* Blueprint aliases & backward compatibility */}
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/schedule-venue" element={<Navigate to="/schedule" replace />} />
            <Route path="/faqs-contact" element={<FAQsContact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}
