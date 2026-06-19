"use client";

import imgImageChair from "figma:asset/a2a1db079833ace95e3e3cf8194242c5e85d831f.png";

export function RoomImageChair() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image/chair">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-center object-contain size-full" src={imgImageChair} />
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
