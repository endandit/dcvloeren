"use client";

import { useEffect, useState } from "react";
import imgDesktopHero from "figma:asset/e1f3839be838141041b6a399965767c8120f7a93.png";
import { VloerenSection } from "./sections/VloerenSection";
import { InterieurSection } from "./sections/InterieurSection";

// Import the wrapped content containers and components from Hero
import {
  LogoDc,
  WrapperContentCenter,
} from "../../imports/DesktopHero-5-10735";

export default function DesktopScrollController() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Simple linear scroll from 0 to 1
  // CORRECTED: Scroll should end when wrapper/content/center bottom touches viewport bottom
  // WrapperContentCenter has bottom-[-3307px], so we need to scroll exactly 3307px
  // to bring it from -3307px to 0px (viewport bottom)
  // PLUS 204px extra to fully show ContactSection wrapper which extends bottom-[-204px]
  const maxScroll = 3307 + 204; // 3511px total
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  
  // Handle click to jump to 5% scroll progress (only works at 0% scroll)
  const isAtStart = scrollProgress < 0.01; // Allow tiny scroll tolerance
  const handleJumpClick = () => {
    if (isAtStart) {
      const targetScroll = maxScroll * 0.05; // 5% scroll
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };
  
  // EXACT positions from Figma designs (viewport: 1320x1080)
  // 
  // The imported components ALREADY have their HERO positions baked in:
  //   WrapperContentCenter: bottom-[-3307px], with ContactSection extending bottom-[-204px] = 3511px total travel
  //   VloerenSection (Left): top-[-1734px]
  //   InterieurSection (Right): top-[-1734px]
  //
  // Total scroll travel: 3511px (3307px + 204px extra to show contact section)
  //
  // At 0% scroll: offset = 0px (wrapper bottom at -3307px - below viewport)
  // At 100% scroll: offset = 3511px (wrapper bottom at 204px - contact section fully visible)
  
  const scrollOffset = scrollProgress * maxScroll; // scrollProgress * 3511px
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
        <div className="relative size-full" data-name="desktop/main">
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
            <InterieurSection />
          </div>
          
          <div style={{ position: 'absolute', bottom: `${centerBottom}px`, left: 0, width: '100%' }}>
            <WrapperContentCenter onIconClick={handleJumpClick} isClickable={isAtStart} scrollProgress={scrollProgress} />
          </div>
          
          <div style={{ position: 'absolute', top: `${leftTop}px`, left: 0, width: '100%' }}>
            <VloerenSection />
          </div>
        </div>
      </div>
    </div>
  );
}