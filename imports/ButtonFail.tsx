function IconSelect() {
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
      <IconSelect />
      <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#141311] text-[26px]">Niet verstuurd</p>
    </div>
  );
}

export default function ButtonFail() {
  return (
    <div className="bg-[#ccc] relative size-full" data-name="button/fail">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative size-full">
          <WrapperSend />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}