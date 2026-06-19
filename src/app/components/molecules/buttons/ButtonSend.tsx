import { useState, useEffect } from "react";
import { IconSend } from "../../atoms/icons/IconSend";

function IconCheck() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="icon/select">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(20, 19, 17, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <g id="icon/select">
            <rect height="43" stroke="var(--stroke-0, #141311)" strokeWidth="2" width="43" x="1" y="1" />
            <path d="M37 13L17.0625 33L8 23.9091" id="Vector" stroke="var(--stroke-0, #141311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconError() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="icon/select">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(20, 19, 17, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <g id="icon/select">
            <rect height="43" stroke="var(--stroke-0, #141311)" strokeWidth="2" width="43" x="1" y="1" />
            <path d="M37 8L8 37" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M8 8L37 37" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function WrapperSend() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-[45px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/send">
      <IconSend />
      <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#141311] text-[26px]">Verstuur</p>
    </div>
  );
}

function WrapperSuccess() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-[45px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/send">
      <IconCheck />
      <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#141311] text-[26px]">Verstuurd</p>
    </div>
  );
}

function WrapperError() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-[45px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/send">
      <IconError />
      <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#141311] text-[26px]">Niet verstuurd</p>
    </div>
  );
}

interface ButtonSendProps {
  onClick: () => void;
  disabled?: boolean;
  state?: 'default' | 'success' | 'error';
}

export function ButtonSend({ onClick, disabled = false, state = 'default' }: ButtonSendProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 440);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determine background color based on state
  let bgColor = "#f0f0f0";
  if (state === 'success' || state === 'error') {
    bgColor = "#ccc";
  } else if (isMobile) {
    // On mobile, default to hover color (#d3bb51)
    bgColor = "#d3bb51";
  } else if (isHovered && !disabled) {
    bgColor = "#d3bb51";
  }
  
  // Render appropriate content based on state
  const renderContent = () => {
    if (state === 'success') return <WrapperSuccess />;
    if (state === 'error') return <WrapperError />;
    return <WrapperSend />;
  };
  
  // Disable interaction when in success or error state
  const isInteractive = state === 'default' && !disabled;
  
  return (
    <div 
      className="content-stretch flex h-[93px] items-center overflow-clip p-[24px] relative shrink-0 w-[440px] transition-colors duration-200" 
      data-name="button/send"
      style={{ 
        backgroundColor: bgColor,
        cursor: isInteractive ? "pointer" : (disabled ? "not-allowed" : "default"),
        opacity: disabled ? 0.6 : 1
      }}
      onMouseEnter={() => isInteractive && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => isInteractive && onClick()}
    >
      {renderContent()}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}