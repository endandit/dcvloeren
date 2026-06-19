import { FloorImageRenovatie } from "../../atoms/floor-images/FloorImageRenovatie";

function FrameImage() {
  return (
    <div className="content-stretch flex items-center pb-[24px] pl-[24px] pr-0 pt-0 relative shrink-0 size-[146px]" data-name="frame/image/5">
      <FloorImageRenovatie />
    </div>
  );
}

function FloorTextRenovatie() {
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

export function FloorItemRenovatie() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row/5">
      <FrameImage />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <FloorTextRenovatie />
      </div>
    </div>
  );
}
