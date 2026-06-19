"use client";

import { useEffect, useState } from "react";
import imgDesktopHero from "figma:asset/e1f3839be838141041b6a399965767c8120f7a93.png";
import { TabletWrapperContentLeft } from "./sections/tablet/TabletWrapperContentLeft";
import { TabletWrapperContentRight } from "./sections/tablet/TabletWrapperContentRight";
import { TabletWrapperContentCenter } from "./sections/tablet/TabletWrapperContentCenter";

// Import the wrapped content containers and components from Hero
import {
  LogoDc,
} from "../../imports/DesktopHero-5-10735";

/**
 * TabletScrollController
 * 
 * Manages the unified scrolling system for TABLET breakpoint (441px - 1319px)
 * TABLET-SPECIFIC: Adds column/vloeren to center wrapper between images and about
 * All content sections scroll together at the same pace - no parallax effects
 */

export default function TabletScrollController() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // CORRECTED: Need extra scroll to show footer content fully
  // Wrapper bottom-[-6775px]: 6775px brings wrapper bottom to viewport bottom
  // ContactSection bottom-[-204px]: extends 204px below wrapper
  // Footer height ~162px needs to be visible
  // Total travel needed: 6775 + 204 = 6979px (perfect footer alignment)
  const maxScroll = 6979;
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  
  // Handle click to jump to 5% scroll progress (only works at 0% scroll)
  const isAtStart = scrollProgress < 0.01; // Allow tiny scroll tolerance
  const handleJumpClick = () => {
    if (isAtStart) {
      const targetScroll = maxScroll * 0.03; // 3% scroll for tablet
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };
  
  // Tablet positions (with additional column/vloeren and column/images copies)
  // TabletWrapperContentCenter: bottom-[-6775px]
  // TabletWrapperContentLeft: top-[-3290px]
  // TabletWrapperContentRight: top-[-3290px]
  //
  // Total scroll travel: 6979px (to bring ContactSection footer flush to viewport bottom)
  //
  // At 0% scroll: offset = 0px (wrapper bottom at -6775px - below viewport)
  // At 100% scroll: offset = 6979px (ContactSection footer sits at viewport bottom)
  const scrollOffset = scrollProgress * 6979;
  const centerBottom = scrollOffset;
  const leftTop = scrollOffset; // Same as rightTop - moves down at same pace
  const rightTop = scrollOffset; // Same as leftTop - moves down at same pace
  
  // Logo fade: 100% opacity at 0%, 0% opacity at 30% (and stays there)
  const logoOpacity = scrollProgress <= 0.3 
    ? 1 - (scrollProgress / 0.3) 
    : 0;
  
  return (
    <div className="relative" style={{ height: `${maxScroll + window.innerHeight}px` }}>
      {/* Fixed container - stays in viewport */}
      <div className="fixed inset-0">
        <div className="relative size-full" data-name="tablet/main">
          {/* Static Background - NEVER MOVES */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgDesktopHero} />
            <div className="absolute bg-[rgba(20,19,17,0.8)] inset-0" />
          </div>
          
          {/* Static Logo - FADES OUT 0% → 30% */}
          <div 
            style={{ opacity: logoOpacity }}
            onClick={handleJumpClick}
            className={isAtStart ? "cursor-pointer" : ""}
          >
            <LogoDc />
          </div>
          
          {/* Scrolling Content Wrappers - All move at SAME speed, no parallax */}
          <div style={{ position: 'absolute', top: `${rightTop}px`, left: 0, width: '100%' }}>
            <TabletWrapperContentRight />
          </div>
          
          <div style={{ position: 'absolute', bottom: `${centerBottom}px`, left: 0, width: '100%' }}>
            <TabletWrapperContentCenter onIconClick={handleJumpClick} isClickable={isAtStart} scrollProgress={scrollProgress} />
          </div>
          
          <div style={{ position: 'absolute', top: `${leftTop}px`, left: 0, width: '100%' }}>
            <TabletWrapperContentLeft />
          </div>
        </div>
      </div>
    </div>
  );
}