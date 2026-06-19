"use client";

import { useState, useEffect } from "react";
import DesktopScrollController from "./components/DesktopScrollController";
import TabletScrollController from "./components/TabletScrollController";
import MobileScrollController from "./components/MobileScrollController";
import Navigation from "./components/Navigation";

// Main App component with responsive breakpoints
export default function App() {
  const [breakpoint, setBreakpoint] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1320) {
        setBreakpoint('desktop');
      } else if (width > 440) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('mobile');
      }
    };

    // Set initial breakpoint
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen relative">
      {/* Global Navigation - Fixed at top, only for desktop and tablet */}
      {breakpoint !== 'mobile' && (
        <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
          <div className="pointer-events-auto w-fit mx-auto">
            <Navigation />
          </div>
        </div>
      )}

      {/* Breakpoint-specific Scroll Controllers */}
      {breakpoint === 'desktop' && <DesktopScrollController />}
      {breakpoint === 'tablet' && <TabletScrollController />}
      {breakpoint === 'mobile' && <MobileScrollController />}
    </div>
  );
}