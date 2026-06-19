"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import imgHome1 from "figma:asset/df18a9aa414d962d4d34f9294d82b87d70cbc448.png";

// Import button images for hover states
import imgHover from "figma:asset/c303907961fb5673450112384670527cd6b8c24b.png";
import imgDefault from "figma:asset/352e13dcea91b68757a08e9a09c39f3b8ca54f4b.png";
import imgHover1 from "figma:asset/f03cf10dbf1f041e64b41b076c275fada4c2d59b.png";
import imgHover2 from "figma:asset/2225ca1e6467ac1f3f2b147c59ea8baba81b90ff.png";
import imgDefault1 from "figma:asset/87e03bb45efaec45704d9425a884451efddf7964.png";
import imgHover3 from "figma:asset/51c383df9b7a5c86b5a17e3298af661c73c19e4c.png";
import imgDefault2 from "figma:asset/821a4e555d93f3232c1c618f2f1e34aea81a801c.png";
import imgIconAbout from "figma:asset/3637f29b0710f93bccdfda0c35f0b36996fd295d.png";
import imgIconMenuHover from "figma:asset/cc45d9932a64bfdf158c65b3db527f40654ba5ae.png";

// Preload hover images
if (typeof window !== 'undefined') {
  const preloadImages = [imgIconMenuHover, imgHover, imgHover1, imgHover2, imgHover3];
  preloadImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function ButtonHome({ onCollapse }: { onCollapse: () => void }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onCollapse();
  };

  return (
    <div 
      className="relative shrink-0 size-[80px] group cursor-pointer" 
      data-name="button/home"
      onClick={handleClick}
    >
      <div className="absolute left-0 size-[80px] top-0" data-name="hover">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgHover}
        />
      </div>
      <div className="absolute left-0 size-[80px] top-0 opacity-100 group-hover:opacity-0 transition-opacity" data-name="default">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgDefault}
        />
      </div>
    </div>
  );
}

function ButtonAbout({ onCollapse }: { onCollapse: () => void }) {
  const handleClick = () => {
    const iconElement = document.getElementById('icon-about-highlighted');
    if (iconElement) {
      const rect = iconElement.getBoundingClientRect();
      const currentIconTop = rect.top;
      const targetTop = 48;
      
      // Calculate how much the icon needs to move (in visual pixels)
      const iconYChange = targetTop - currentIconTop;
      
      // On mobile (≤440px), content is scaled, so we need to compensate
      // 1px of scroll = scale px of visual movement
      // Therefore: visual_movement / scale = scroll_needed
      const viewportWidth = window.innerWidth;
      let scale = 1.0;
      let correction = 0;
      
      if (viewportWidth <= 440) {
        scale = viewportWidth / 440;
        
        // Empirical correction: Linear error from 0px@440px to 14px@320px
        // This accounts for subtle positioning differences in the scaled container
        const errorAtViewport = (440 - viewportWidth) * (14 / 120);
        correction = errorAtViewport / scale;
      }
      
      // The icon moves opposite to scroll direction
      // Divide by scale to convert visual movement to scroll distance
      const scrollChange = (-iconYChange / scale) + correction;
      
      // Calculate target scroll position
      const currentScroll = window.scrollY;
      const targetScroll = currentScroll + scrollChange;
      
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
    onCollapse();
  };

  return (
    <div 
      className="relative shrink-0 size-[80px] group cursor-pointer" 
      data-name="button/about"
      onClick={handleClick}
    >
      <div className="absolute left-0 size-[80px] top-0" data-name="hover">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgHover1}
        />
      </div>
      <div className="absolute left-0 size-[80px] top-0 opacity-100 group-hover:opacity-0 transition-opacity" data-name="default">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgIconAbout}
        />
      </div>
    </div>
  );
}

function ButtonWork({ onCollapse }: { onCollapse: () => void }) {
  const handleClick = () => {
    const iconElement = document.getElementById('icon-work');
    if (iconElement) {
      const rect = iconElement.getBoundingClientRect();
      const currentIconTop = rect.top;
      const targetTop = 48;
      
      // Calculate how much the icon needs to move (in visual pixels)
      const iconYChange = targetTop - currentIconTop;
      
      // On mobile (≤440px), content is scaled, so we need to compensate
      // 1px of scroll = scale px of visual movement
      // Therefore: visual_movement / scale = scroll_needed
      const viewportWidth = window.innerWidth;
      let scale = 1.0;
      let correction = 0;
      
      if (viewportWidth <= 440) {
        scale = viewportWidth / 440;
        
        // Empirical correction: Linear error from 0px@440px to 14px@320px
        // This accounts for subtle positioning differences in the scaled container
        const errorAtViewport = (440 - viewportWidth) * (14 / 120);
        correction = errorAtViewport / scale;
      }
      
      // The icon moves opposite to scroll direction
      // Divide by scale to convert visual movement to scroll distance
      const scrollChange = (-iconYChange / scale) + correction;
      
      // Calculate target scroll position
      const currentScroll = window.scrollY;
      const targetScroll = currentScroll + scrollChange;
      
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
    onCollapse();
  };

  return (
    <div 
      className="relative shrink-0 size-[80px] group cursor-pointer" 
      data-name="button/work"
      onClick={handleClick}
    >
      <div className="absolute left-0 size-[80px] top-0" data-name="hover">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgHover2}
        />
      </div>
      <div className="absolute left-0 size-[80px] top-0 opacity-100 group-hover:opacity-0 transition-opacity" data-name="default">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgDefault1}
        />
      </div>
    </div>
  );
}

function ButtonContact({ onCollapse }: { onCollapse: () => void }) {
  const handleClick = () => {
    const iconElement = document.getElementById('icon-contact');
    if (iconElement) {
      const rect = iconElement.getBoundingClientRect();
      const currentIconTop = rect.top;
      const targetTop = 48;
      
      // Calculate how much the icon needs to move (in visual pixels)
      const iconYChange = targetTop - currentIconTop;
      
      // On mobile (≤440px), content is scaled, so we need to compensate
      // 1px of scroll = scale px of visual movement
      // Therefore: visual_movement / scale = scroll_needed
      const viewportWidth = window.innerWidth;
      let scale = 1.0;
      let correction = 0;
      
      if (viewportWidth <= 440) {
        scale = viewportWidth / 440;
        
        // Empirical correction: Linear error from 0px@440px to 14px@320px
        // This accounts for subtle positioning differences in the scaled container
        const errorAtViewport = (440 - viewportWidth) * (14 / 120);
        correction = errorAtViewport / scale;
      }
      
      // The icon moves opposite to scroll direction
      // Divide by scale to convert visual movement to scroll distance
      const scrollChange = (-iconYChange / scale) + correction;
      
      // Calculate target scroll position
      const currentScroll = window.scrollY;
      const targetScroll = currentScroll + scrollChange;
      
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
    onCollapse();
  };

  return (
    <div 
      className="relative shrink-0 size-[80px] group cursor-pointer" 
      data-name="button/contact"
      onClick={handleClick}
    >
      <div className="absolute left-0 size-[80px] top-0" data-name="hover">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgHover3}
        />
      </div>
      <div className="absolute left-0 size-[80px] top-0 opacity-100 group-hover:opacity-0 transition-opacity" data-name="default">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgDefault2}
        />
      </div>
    </div>
  );
}

function WrapperButtons({ onCollapse }: { onCollapse: () => void }) {
  return (
    <div
      className="content-stretch flex gap-[24px] items-center justify-center overflow-clip relative shrink-0 w-full"
      data-name="wrapper/buttons"
    >
      <ButtonHome onCollapse={onCollapse} />
      <ButtonAbout onCollapse={onCollapse} />
      <ButtonWork onCollapse={onCollapse} />
      <ButtonContact onCollapse={onCollapse} />
    </div>
  );
}

export default function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleNav = () => {
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
    // Animation duration is 0.4s (400ms)
    setTimeout(() => setIsAnimating(false), 400);
  };

  const collapseNav = () => {
    if (isExpanded) {
      setIsAnimating(true);
      setIsExpanded(false);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  return (
    <motion.div
      className="absolute content-stretch flex flex-col gap-[48px] items-center left-1/2 overflow-clip pb-0 pt-[48px] px-[24px] w-[440px]"
      data-name="nav"
      initial={{
        height: 304,
        top: -128,
      }}
      animate={{
        height: isExpanded ? 233 : 304,
        top: isExpanded ? 0 : -128,
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        transform: `translateX(-50%)`,
        transformOrigin: 'top center'
      }}
    >
      <WrapperButtons onCollapse={collapseNav} />
      <motion.div
        className="flex items-center justify-center relative shrink-0 cursor-pointer group"
        onClick={toggleNav}
        style={{ pointerEvents: isAnimating ? 'none' : 'auto' }}
        animate={{
          width: isExpanded ? 113.137 : 80,
          height: isExpanded ? 113.137 : 80,
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <motion.div
          className="flex-none"
          animate={{
            rotate: isExpanded ? 45 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <div className="relative size-[80px]" data-name="icon/menu">
            <img
              alt="Menu"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgIconMenuHover}
            />
            <img
              alt="Menu"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full opacity-100 group-hover:opacity-0 transition-opacity"
              src={imgHome1}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}