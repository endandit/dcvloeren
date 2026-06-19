"use client";

import { useState, useEffect } from "react";
import { HeadingScan } from "../../molecules/headings/HeadingScan";
import { QRCodeVCard } from "./QRCodeVCard";
import svgPaths from "../../../../imports/svg-qk1upwj39t";

function LogoDcIgnore() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="logo/DC/ignore">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(20, 19, 17, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <g id="logo/DC/ignore">
            <rect height="43" stroke="var(--stroke-0, #141311)" strokeWidth="2" width="43" x="1" y="1" />
            <g id="vector">
              <path d={svgPaths.p2773c700} fill="var(--fill-0, #141311)" />
              <path d={svgPaths.p1a97a200} fill="var(--fill-0, #141311)" />
              <path d={svgPaths.p2091acc0} fill="var(--fill-0, #141311)" />
              <path clipRule="evenodd" d={svgPaths.p1921ae00} fill="var(--fill-0, #141311)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p18bf0c00} fill="var(--fill-0, #141311)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function WrapperMobile() {
  const handleAddContact = () => {
    // Generate vCard data
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Dennis Cornelissen
N:Cornelissen;Dennis;;;
ORG:DC Vloeren
TEL:+31631232174
EMAIL:info@dcvloeren.nl
URL:https://dcvloeren.nl
X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/dcvloeren
END:VCARD`;
    
    // Create blob and download link
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DC-Vloeren.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return { content: (
    <div 
      className="basis-0 content-stretch flex gap-[24px] grow h-[45px] items-center min-h-px min-w-px overflow-clip relative shrink-0 w-full"
      data-name="wrapper/mobile"
    >
      <LogoDcIgnore />
      <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#141311] text-[26px]">
        <span>{`Voeg `}</span>
        <span className="font-['Oswald:Regular',sans-serif] font-normal">DC</span>
        <span>{` toe als contact`}</span>
      </p>
    </div>
  ), handleAddContact };
}

function QrVCard() {
  return (
    <div className="aspect-[136/136] basis-0 grow min-h-px min-w-px opacity-90 overflow-clip relative shrink-0" data-name="QR/vCard">
      <div className="absolute inset-[-3.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 422.336 422.336">
          <path d={svgPaths.p1605a380} fill="var(--fill-0, #F0F0F0)" fillOpacity="0.8" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup />
      <ClipPathGroup1 />
      <ClipPathGroup2 />
      <ClipPathGroup3 />
      <ClipPathGroup4 />
      <ClipPathGroup5 />
      <ClipPathGroup6 />
    </div>
  );
}

export function QrCode() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 440);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const mobileButton = WrapperMobile();
  
  // Determine background color - on mobile always use hover color, on desktop use hover state
  const mobileButtonBgColor = '#d3bb51';
  
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 max-[441px]:mt-[24px]" data-name="wrapper/QR">
      <HeadingScan />
      {isMobile ? (
        <button 
          className="content-stretch flex gap-[24px] items-center p-[24px] relative shrink-0 w-full h-[93px] transition-colors duration-200 cursor-pointer" 
          data-name="QR/code"
          style={{ backgroundColor: mobileButtonBgColor }}
          onClick={mobileButton.handleAddContact}
        >
          {mobileButton.content}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
        </button>
      ) : (
        <div className="bg-[#f0f0f0] content-stretch flex gap-[24px] items-center overflow-clip p-[24px] relative shrink-0 size-[440px]" data-name="QR/code">
          <QRCodeVCard />
          <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
        </div>
      )}
    </div>
  );
}