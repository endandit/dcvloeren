import svgPaths from "./svg-msqtetj4w4";
import imgCheckedParket from "figma:asset/63b869a961a1faa47c2bbe44a6553a5dd5e394ba.png";
import imgHoverLaminaat from "figma:asset/922d02e2b1381e32373ede0736690b80372d4230.png";
import imgDefaultPvc from "figma:asset/2100c0f674e8ec51c099af44f9e13ebe991c7c29.png";
import imgDefaultMicrocement from "figma:asset/90f6da94381e61477103334c3a8457f4ecb4882e.png";
import imgDefaultTraptreden from "figma:asset/63f2454f42a669bb9a855442b66318599ed797d9.png";
import imgDefaultRenovatie from "figma:asset/a0342c0fbcd15d228b91f3e8aea6b61872b38909.png";
import imgDefaultAkoestiek from "figma:asset/6ffa7f6de34eced81babe5cfba24955e8616c7b3.png";
import imgDefaultInterieur from "figma:asset/5a29efebbde61f4c02f3513ebf9296a0f8fd159d.png";

function IconScroll() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="icon/scroll">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="icon/scroll">
          <rect height="43" stroke="var(--stroke-0, #D3BB51)" strokeWidth="2" width="43" x="1" y="1" />
          <path d={svgPaths.p2b3dc900} id="Vector" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1b79500} id="Vector_2" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pb7f3380} id="Vector_3" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M39 30H19" id="Vector_4" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeadingQuote() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="heading/quote">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative size-full">
          <IconScroll />
          <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#d3bb51] text-[18px] uppercase">Vraag vrijblijvend een offerte aan</p>
        </div>
      </div>
    </div>
  );
}

function IconUser() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="icon/user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="icon/user">
          <rect height="43" stroke="var(--stroke-0, #141311)" strokeWidth="2" width="43" x="1" y="1" />
          <path d={svgPaths.pfaf5f00} id="Vector" stroke="var(--stroke-0, #141311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c9b8b60} id="Vector_2" stroke="var(--stroke-0, #141311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function WrapperNaam() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-[45px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/naam">
      <IconUser />
      <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#141311] text-[26px]">Naam</p>
    </div>
  );
}

function InputName() {
  return (
    <div className="bg-[#d3bb51] content-stretch flex h-[93px] items-center overflow-clip p-[24px] relative shrink-0 w-[440px]" data-name="input/name">
      <WrapperNaam />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function IconMail() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="icon/mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="icon/mail">
          <g clipPath="url(#clip0_15_87)">
            <path d={svgPaths.p9ae120} id="Vector 1" stroke="var(--stroke-0, #F0F0F0)" strokeWidth="2" />
          </g>
          <rect height="43" stroke="var(--stroke-0, #F0F0F0)" strokeWidth="2" width="43" x="1" y="1" />
        </g>
        <defs>
          <clipPath id="clip0_15_87">
            <rect fill="white" height="45" width="45" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WrapperMail() {
  return (
    <div className="basis-0 content-stretch flex gap-[24px] grow h-[45px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/mail">
      <IconMail />
      <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow h-[45px] leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#f0f0f0] text-[26px]">E-mail</p>
    </div>
  );
}

function InputMail() {
  return (
    <div className="bg-[#d3bb51] content-stretch flex h-[93px] items-center overflow-clip p-[24px] relative shrink-0 w-[440px]" data-name="input/mail">
      <WrapperMail />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function IconSelect() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="icon/select">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="icon/select">
          <rect height="43" stroke="var(--stroke-0, #D3BB51)" strokeWidth="2" width="43" x="1" y="1" />
          <path d="M37 13L17.0625 33L8 23.9091" id="Vector" stroke="var(--stroke-0, #D3BB51)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HeadingSelect() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="heading/select">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative size-full">
          <IconSelect />
          <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#d3bb51] text-[18px] uppercase">Selecteer benodigdheden</p>
        </div>
      </div>
    </div>
  );
}

function IconCheck() {
  return (
    <div className="absolute left-[11px] size-[24px] top-[11px]" data-name="icon/check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon/check">
          <path d="M20 6L9 17L4 12" id="Vector" stroke="var(--stroke-0, #141311)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CheckedParket() {
  return (
    <div className="absolute left-0 size-[45px] top-0" data-name="checked/parket">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[178.89%] left-[-44.85%] max-w-none top-[-76.26%] w-[259.63%]" src={imgCheckedParket} />
      </div>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <IconCheck />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function WrapperParket() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/parket">
      <p className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[#141311] text-[18px] top-0 uppercase w-[115px]">parket</p>
      <CheckedParket />
    </div>
  );
}

function HoverLaminaat() {
  return (
    <div className="absolute left-0 size-[45px] top-0" data-name="hover/laminaat">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[424.65%] left-[-49.26%] max-w-none top-[-320.2%] w-[195.87%]" src={imgHoverLaminaat} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-2 border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function WrapperLaminaat() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/laminaat">
      <p className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[#141311] text-[18px] top-0 uppercase w-[115px]">Laminaat</p>
      <HoverLaminaat />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row/1">
      <WrapperParket />
      <WrapperLaminaat />
    </div>
  );
}

function DefaultPvc() {
  return (
    <div className="absolute left-0 size-[45px] top-0" data-name="default/PVC">
      <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[295.99%] left-[-77.34%] max-w-none top-[-113.24%] w-[311.23%]" src={imgDefaultPvc} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-2 border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function WrapperPvc() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/PVC">
      <p className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[#d3bb51] text-[18px] top-0 uppercase w-[115px]">PVC</p>
      <DefaultPvc />
    </div>
  );
}

function DefaultMicrocement() {
  return (
    <div className="absolute left-0 size-[45px] top-0" data-name="default/microcement">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-50 pointer-events-none size-full" src={imgDefaultMicrocement} />
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-2 border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function WrapperMicrocement() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/microcement">
      <p className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[#d3bb51] text-[18px] top-0 uppercase w-[115px]">Microcement</p>
      <DefaultMicrocement />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row/2">
      <WrapperPvc />
      <WrapperMicrocement />
    </div>
  );
}

function DefaultTraptreden() {
  return (
    <div className="absolute left-0 size-[45px] top-0" data-name="default/traptreden">
      <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[210.45%] left-[-46.99%] max-w-none top-[-99.14%] w-[157.83%]" src={imgDefaultTraptreden} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-2 border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function WrapperTraptreden() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/traptreden">
      <p className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[#d3bb51] text-[18px] top-0 uppercase w-[115px]">Traptreden</p>
      <DefaultTraptreden />
    </div>
  );
}

function DefaultRenovatie() {
  return (
    <div className="absolute left-0 size-[45px] top-0" data-name="default/renovatie">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-30.37%] w-full" src={imgDefaultRenovatie} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-2 border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function WrapperRenovatie() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/renovatie">
      <p className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[#d3bb51] text-[18px] top-0 uppercase w-[115px]">Renovatie</p>
      <DefaultRenovatie />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row/3">
      <WrapperTraptreden />
      <WrapperRenovatie />
    </div>
  );
}

function DefaultAkoestiek() {
  return (
    <div className="absolute left-0 size-[45px] top-0" data-name="default/akoestiek">
      <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-17.83%] max-w-none top-0 w-[139.22%]" src={imgDefaultAkoestiek} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[42px] pt-[24px] px-[36px] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function WrapperAkoestiek() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/akoestiek">
      <p className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[#d3bb51] text-[18px] top-0 uppercase w-[115px]">Akoestiek</p>
      <DefaultAkoestiek />
    </div>
  );
}

function DefaultInterieur() {
  return (
    <div className="absolute left-0 size-[45px] top-0" data-name="default/interieur">
      <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-27.31%] max-w-none top-0 w-[159.86%]" src={imgDefaultInterieur} />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-2 border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function WrapperInterieur() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="wrapper/interieur">
      <p className="absolute font-['Oswald:Light',sans-serif] font-light leading-[44.8px] left-[69px] text-[#d3bb51] text-[18px] top-0 uppercase w-[115px]">Interieur</p>
      <DefaultInterieur />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="row/4">
      <WrapperAkoestiek />
      <WrapperInterieur />
    </div>
  );
}

function CheckTopics() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip p-[24px] relative shrink-0 w-[440px]" data-name="check/topics">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function IconSend() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="icon/send">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(20, 19, 17, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
          <g id="icon/send">
            <rect height="43" stroke="var(--stroke-0, #141311)" strokeWidth="2" width="43" x="1" y="1" />
            <path d={svgPaths.p12145960} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function ButtonSend() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex h-[93px] items-center overflow-clip p-[24px] relative shrink-0 w-[440px]" data-name="button/send">
      <WrapperSend />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

export default function WrapperForm() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="wrapper/form">
      <HeadingQuote />
      <InputName />
      <InputMail />
      <HeadingSelect />
      <CheckTopics />
      <ButtonSend />
    </div>
  );
}