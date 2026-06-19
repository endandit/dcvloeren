"use client";

import svgPaths from "./svg-ih5xhwa54h";

function IconUser({ color }: { color: string }) {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="icon/user">
      <div className="absolute inset-0" style={{ "--stroke-0": color } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <g id="icon/user">
            <rect height="43" stroke="var(--stroke-0, #F0F0F0)" strokeWidth="2" width="43" x="1" y="1" />
            <path d={svgPaths.pfaf5f00} id="Vector" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2c9b8b60} id="Vector_2" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface InputNameProps {
  value: string;
  onChange: (value: string) => void;
  shake?: boolean;
}

export default function InputName({ value, onChange, shake = false }: InputNameProps) {
  const color = value ? "#141311" : "#F0F0F0";

  return (
    <div 
      className="bg-[#d3bb51] relative size-full" 
      data-name="input/name"
      style={{
        animation: shake ? "shake 0.5s ease-in-out" : "none"
      }}
    >
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
          20%, 40%, 60%, 80% { transform: translateX(8px); }
        }
      `}</style>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative size-full">
          <div className="basis-0 content-stretch flex gap-[24px] grow h-[45px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/naam">
            <IconUser color={color} />
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Naam"
              className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[26px] bg-transparent border-none outline-none placeholder:text-[#F0F0F0]"
              style={{ color }}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}