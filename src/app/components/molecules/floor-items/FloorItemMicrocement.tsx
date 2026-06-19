import { FloorImageMicrocement } from "../../atoms/floor-images/FloorImageMicrocement";

function FrameImage() {
  return (
    <div className="content-stretch flex items-center pl-[24px] pr-0 py-0 relative shrink-0 w-[146px]" data-name="frame/image/3">
      <FloorImageMicrocement />
    </div>
  );
}

function FloorTextMicrocement() {
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

export function FloorItemMicrocement() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row/3">
      <FrameImage />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <FloorTextMicrocement />
      </div>
    </div>
  );
}
