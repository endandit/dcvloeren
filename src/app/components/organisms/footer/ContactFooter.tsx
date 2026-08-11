import { IconCopyright } from "../../atoms/icons/IconCopyright";
import { IconGlobe } from "../../atoms/icons/IconGlobe";

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[45px] items-center overflow-clip relative shrink-0 w-full" data-name="row/1">
      <IconCopyright />
      <p className="font-['Oswald',sans-serif] font-medium leading-[44.8px] relative shrink-0 text-[#d3bb51] text-[18px] tracking-[-1.98px] uppercase w-[31px]">2026</p>
      <p className="basis-0 font-['Oswald',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#d3bb51] text-[18px] uppercase">DC vloeren & interieur</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] h-[45px] items-center overflow-clip relative shrink-0 w-full" data-name="row/2">
      <IconGlobe />
      <p className="font-['Oswald',sans-serif] font-light leading-[44.8px] relative shrink-0 text-[#d3bb51] text-[18px] uppercase">
        gebouwd door{" "}
        <a
          href="https://endandit.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:opacity-80 transition-opacity"
        >
          Edd van EnDanDit
        </a>
      </p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="column">
      <Row1 />
      <Row2 />
    </div>
  );
}

export function ContactFooter() {
  return (
    <div 
      className="content-stretch flex flex-col items-start justify-center overflow-clip p-[24px] max-[441px]:pb-[48px] max-[441px]:mt-[24px] relative shrink-0 w-[440px]" 
      data-name="wrapper/footer"
    >
      <Column />
    </div>
  );
}