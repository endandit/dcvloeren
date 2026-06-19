import { useState } from "react";
import imgHoverLaminaat from "figma:asset/94ce05cd72cb86df7abb8e3c35ee7367f6ba25cb.png";
import { IconCheck } from "../../atoms/icons/IconCheck";

interface CheckboxLaminaatProps {
  isSelected: boolean;
  onToggle: () => void;
}

export function CheckboxLaminaat({ isSelected, onToggle }: CheckboxLaminaatProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine states
  const showFullOpacity = isHovered || isSelected;
  const textColor = showFullOpacity ? "#141311" : "#d3bb51";
  const imageOpacity = showFullOpacity ? "opacity-100" : "opacity-50";
  
  return (
    <div 
      className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0 cursor-pointer" 
      data-name="wrapper/laminaat"
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p 
        className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[18px] top-0 uppercase w-[115px] transition-colors duration-200"
        style={{ color: textColor }}
      >
        Laminaat
      </p>
      <div className="absolute left-0 size-[45px] top-0">
        <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-200 ${imageOpacity}`}>
          <img loading="lazy" alt="" className="absolute h-[424.65%] left-[-49.26%] max-w-none top-[-320.2%] w-[195.87%]" src={imgHoverLaminaat} />
        </div>
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