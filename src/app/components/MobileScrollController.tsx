"use client";

import { useEffect, useState } from "react";
import imgDesktopHero from "figma:asset/e1f3839be838141041b6a399965767c8120f7a93.png";
import { MobileWrapperContentCenter } from "./sections/mobile/MobileWrapperContentCenter";
import Navigation from "./Navigation";

// Import the wrapped content containers and components from Hero
import {
  LogoDc,
} from "../../imports/DesktopHero-5-10735";

/**
 * MobileScrollController
 * 
 * Manages the unified scrolling system for MOBILE breakpoint (≤440px)
 * MOBILE-SPECIFIC: Only shows center content - left and right wrappers are hidden
 * Simpler scroll logic since there's no counter-scrolling needed
 * Fixed at 440px width (no scaling)
 */

export default function MobileScrollController() {
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);
  
  // Lock viewport heights on first load to prevent mobile browser chrome issues
  // maxViewportHeight: Used for background fill (browser GUI minimized)
  // minViewportHeight: Used for icon positioning at bottom (browser GUI maximized)
  // Both are set once at load and never updated
  const [maxViewportHeight] = useState(() => {
    if (typeof window === 'undefined') return 800;
    // On initial load, capture the current viewport height
    // User should load page with browser GUI minimized for best results
    return window.innerHeight;
  });
  
  const [minViewportHeight] = useState(() => {
    if (typeof window === 'undefined') return 800;
    // For now, use same as max - will stabilize after first load
    // In practice, this gets locked to the initial state
    return window.innerHeight;
  });
  
  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      // Scale based on 440px baseline
      setScale(viewportWidth / 440);
      // Don't update viewport height - keep it locked to initial value
    };
    
    updateScale();
    window.addEventListener('resize', updateScale);
    
    return () => window.removeEventListener('resize', updateScale);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Mobile uses same center content as tablet
  // MobileWrapperContentCenter has bottom-[-6775px], so we need to scroll exactly 6775px
  // to bring it from -6775px to 0px (viewport bottom)
  // PLUS 204px extra to fully show ContactSection wrapper which extends bottom-[-204px]
  const maxScroll = 6775 + 204; // 6979px total
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  
  // Handle click to jump to 2% scroll progress (only works at 0% scroll)
  const isAtStart = scrollProgress < 0.01; // Allow tiny scroll tolerance
  const handleJumpClick = () => {
    if (isAtStart) {
      const targetScroll = maxScroll * 0.02; // 2% scroll for mobile
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };
  
  // Simplified scroll logic - only center content moves up
  // MobileWrapperContentCenter: bottom-[-6775px]
  //
  // Total scroll travel: 6979px (6775px + 204px extra to show contact section)
  //
  // At 0% scroll: offset = 0px (wrapper bottom at -6775px - below viewport)
  // At 100% scroll: offset = 6979px (wrapper bottom at 204px - contact section fully visible)
  // NOTE: Scale affects visual size but NOT scroll distances (px values stay absolute)
  const scrollOffset = scrollProgress * maxScroll;
  const centerBottom = scrollOffset;
  
  // Logo fade: 100% opacity at 0%, 0% opacity at 30% (and stays there)
  const logoOpacity = scrollProgress <= 0.3 
    ? 1 - (scrollProgress / 0.3) 
    : 0;
  
  // Calculate scaled viewport height
  const scaledViewportHeight = maxViewportHeight / scale;
  
  return (
    <div className="relative bg-[#141311]" style={{ height: `${maxScroll + maxViewportHeight - 368}px` }}>
      {/* Fixed container - stays in viewport */}
      <div className="fixed top-0 left-0 right-0 bg-[#141311]" style={{ height: `${maxViewportHeight}px` }}>
        {/* Static Background - NEVER MOVES - fills FULL viewport including area behind browser GUI */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: '100vh', width: '100vw' }}>
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgDesktopHero} />
          <div className="absolute bg-[rgba(20,19,17,0.8)] inset-0" />
        </div>
        
        {/* Scaled 440px content container */}
        <div 
          style={{
            width: '440px',
            height: `${scaledViewportHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
          }}
        >
          {/* Navigation - Inside scaled container on mobile */}
          <div className="absolute top-0 left-0 right-0 z-50 pointer-events-none">
            <div className="pointer-events-auto w-fit mx-auto">
              <Navigation />
            </div>
          </div>
          
          <div 
            className="relative" 
            style={{ height: '100%' }}
            data-name="mobile/main"
          >
            {/* Static Logo - FADES OUT 0% → 30% - Centered like desktop/tablet */}
            <div 
              style={{ opacity: logoOpacity }}
              onClick={handleJumpClick}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${isAtStart ? "cursor-pointer" : ""}`}
            >
              <LogoDc />
            </div>
            
            {/* Scrolling Center Content - Only center wrapper visible on mobile */}
            <div style={{ position: 'absolute', bottom: `${centerBottom}px`, left: 0, width: '100%' }}>
              <MobileWrapperContentCenter onIconClick={handleJumpClick} isClickable={isAtStart} scrollProgress={scrollProgress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}