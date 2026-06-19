import imgImage1 from "figma:asset/922d02e2b1381e32373ede0736690b80372d4230.png";
import imgImage2 from "figma:asset/2100c0f674e8ec51c099af44f9e13ebe991c7c29.png";
import imgImage3 from "figma:asset/90f6da94381e61477103334c3a8457f4ecb4882e.png";
import imgImage4 from "figma:asset/63f2454f42a669bb9a855442b66318599ed797d9.png";
import imgImage5 from "figma:asset/a0342c0fbcd15d228b91f3e8aea6b61872b38909.png";

function Image() {
  return (
    <div className="aspect-[100/100] h-full pointer-events-none relative shrink-0" data-name="image/1">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[424.65%] left-[-49.26%] max-w-none top-[-320.2%] w-[195.87%]" src={imgImage1} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0" />
    </div>
  );
}

function FrameImage() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[24px] pr-0 pt-[24px] relative shrink-0 size-[146px]" data-name="frame/image/1">
      <Image />
    </div>
  );
}

function P() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="p/1">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Oswald:Light',sans-serif] font-light items-start justify-center leading-[36.4px] pb-0 pt-[24px] px-[24px] relative size-full text-[26px]">
          <p className="relative shrink-0 text-[#141311] w-full">Hout</p>
          <p className="relative shrink-0 text-[#817b6e] w-full">Parket of laminaat</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row/1">
      <FrameImage />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <P />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="aspect-[100/100] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="image/2">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[295.99%] left-[-77.34%] max-w-none top-[-113.24%] w-[311.23%]" src={imgImage2} />
      </div>
      <div className="size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FrameImage1() {
  return (
    <div className="content-stretch flex items-center pl-[24px] pr-0 py-0 relative shrink-0 w-[146px]" data-name="frame/image/2">
      <Image1 />
    </div>
  );
}

function P1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="p/2">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Oswald:Light',sans-serif] font-light items-start justify-center leading-[36.4px] px-[24px] py-0 relative size-full text-[26px]">
          <p className="relative shrink-0 text-[#141311] w-full">PVC</p>
          <p className="relative shrink-0 text-[#817b6e] w-full">Duurzaam en slijtvast</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row/2">
      <FrameImage1 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <P1 />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="aspect-[100/100] basis-0 grow min-h-px min-w-px pointer-events-none relative shrink-0" data-name="image/3">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgImage3} />
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0" />
    </div>
  );
}

function FrameImage2() {
  return (
    <div className="content-stretch flex items-center pl-[24px] pr-0 py-0 relative shrink-0 w-[146px]" data-name="frame/image/3">
      <Image2 />
    </div>
  );
}

function P2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="p/3">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Oswald:Light',sans-serif] font-light items-start justify-center leading-[36.4px] px-[24px] py-0 relative size-full text-[26px]">
          <p className="relative shrink-0 text-[#141311] w-full">Microcement</p>
          <p className="relative shrink-0 text-[#817b6e] w-full">Naadloze betonlook</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row/3">
      <FrameImage2 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <P2 />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="aspect-[100/100] basis-0 grow min-h-px min-w-px pointer-events-none relative shrink-0" data-name="image/4">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[210.45%] left-[-46.99%] max-w-none top-[-99.14%] w-[157.83%]" src={imgImage4} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0" />
    </div>
  );
}

function FrameImage3() {
  return (
    <div className="content-stretch flex items-center pl-[24px] pr-0 py-0 relative shrink-0 w-[146px]" data-name="frame/image/4">
      <Image3 />
    </div>
  );
}

function P3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="p/4">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Oswald:Light',sans-serif] font-light items-start justify-center leading-[36.4px] px-[24px] py-0 relative size-full text-[26px]">
          <p className="relative shrink-0 text-[#141311] w-full">Traptreden</p>
          <p className="relative shrink-0 text-[#817b6e] w-full">Hout of PVC</p>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row/4">
      <FrameImage3 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <P3 />
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px pointer-events-none relative shrink-0" data-name="image/5">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-[-30.37%] w-full" src={imgImage5} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0" />
    </div>
  );
}

function FrameImage4() {
  return (
    <div className="content-stretch flex items-center pb-[24px] pl-[24px] pr-0 pt-0 relative shrink-0 size-[146px]" data-name="frame/image/5">
      <Image4 />
    </div>
  );
}

function P4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="p/5">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col font-['Oswald:Light',sans-serif] font-light items-start justify-center leading-[36.4px] pb-[24px] pt-0 px-[24px] relative size-full text-[26px]">
          <p className="relative shrink-0 text-[#141311] w-full">Renovatie</p>
          <p className="relative shrink-0 text-[#817b6e] w-full">Oude vloer als nieuw</p>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row/5">
      <FrameImage4 />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <P4 />
      </div>
    </div>
  );
}

export default function ColumnVloeren() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="column/vloeren">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}