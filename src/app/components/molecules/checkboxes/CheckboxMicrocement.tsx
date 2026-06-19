import { useState } from "react";
import imgDefaultMicrocement from "figma:asset/5112f50c95c5130333b1591c5d68e27bb84eaeac.png";
import { IconCheck } from "../../atoms/icons/IconCheck";

interface CheckboxMicrocementProps {
  isSelected: boolean;
  onToggle: () => void;
}

export function CheckboxMicrocement({ isSelected, onToggle }: CheckboxMicrocementProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine states
  const showFullOpacity = isHovered || isSelected;
  const textColor = showFullOpacity ? "#141311" : "#d3bb51";
  const imageOpacity = showFullOpacity ? "opacity-100" : "opacity-50";
  
  return (
    <div 
      className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0 cursor-pointer" 
      data-name="wrapper/microcement"
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p 
        className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[18px] top-0 uppercase w-[115px] transition-colors duration-200"
        style={{ color: textColor }}
      >
        Microcement
      </p>
      <div className="absolute left-0 size-[45px] top-0">
        <img 
          loading="lazy" 
          alt="" 
          className={`absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-opacity duration-200 ${imageOpacity}`}
          src={imgDefaultMicrocement} 
        />
        {isSelected && (
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <IconCheck />
          </div>
        )}
        <div aria-hidden="true" className="absolute border-2 border-[#141311] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}