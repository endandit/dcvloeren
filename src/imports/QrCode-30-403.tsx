import svgPaths from "./svg-qk1upwj39t";

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
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-[45px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/mobile">
      <LogoDcIgnore />
      <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#141311] text-[26px]">
        <span>{`Voeg `}</span>
        <span className="font-['Oswald:Regular',sans-serif] font-normal">DC</span>
        <span>{` toe als contact`}</span>
      </p>
    </div>
  );
}

export default function QrCode() {
  return (
    <div className="bg-[#f0f0f0] relative size-full" data-name="QR/code">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative size-full">
          <WrapperMobile />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}