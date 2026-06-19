import { FloorImageHout } from "../../atoms/floor-images/FloorImageHout";

function FrameImage() {
  return (
    <div className="content-stretch flex items-start pb-0 pl-[24px] pr-0 pt-[24px] relative shrink-0 size-[146px]" data-name="frame/image/1">
      <FloorImageHout />
    </div>
  );
}

function FloorTextHout() {
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

export function FloorItemHout() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row/1">
      <FrameImage />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <FloorTextHout />
      </div>
    </div>
  );
}
