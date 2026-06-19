import svgPaths from "../../../../imports/svg-ulqbwy4fyi";

function IconQr() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="icon/QR">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="icon/QR">
          <rect height="43" stroke="var(--stroke-0, #D3BB51)" strokeWidth="2" width="43" x="1" y="1" />
          <path d={svgPaths.p35e1a1c0} id="Vector" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p295cdd00} id="Vector_2" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2b0b5980} id="Vector_3" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1f49e600} id="Vector_4" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_5"></g>
          <path d={svgPaths.p122e4b00} id="Vector_6" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_7"></g>
          <g id="Vector_8"></g>
          <g id="Vector_9"></g>
          <path d="M30 23H32" id="Vector_10" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_11"></g>
          <path d="M23 39V37" id="Vector_12" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export function HeadingScan() {
  return (
    <div className="content-stretch flex gap-[24px] h-[45px] items-center overflow-clip px-[24px] py-0 relative shrink-0 w-[440px]" data-name="heading/scan">
      <IconQr />
      <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#d3bb51] text-[18px] uppercase">
        <span>{`Scan en voeg `}</span>
        <span className="font-['Oswald:Regular',sans-serif] font-normal">dc</span>
        <span>{` toe als contact`}</span>
      </p>
    </div>
  );
}
