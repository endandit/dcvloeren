import { FloorImagePvc } from "../../atoms/floor-images/FloorImagePvc";

function FrameImage() {
  return (
    <div className="content-stretch flex items-center pl-[24px] pr-0 py-0 relative shrink-0 w-[146px]" data-name="frame/image/2">
      <FloorImagePvc />
    </div>
  );
}

function FloorTextPvc() {
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

export function FloorItemPvc() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="row/2">
      <FrameImage />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <FloorTextPvc />
      </div>
    </div>
  );
}
