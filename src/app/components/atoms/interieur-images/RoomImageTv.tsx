"use client";

import imgImageTv from "figma:asset/bc534455f882691020a80f03935ebbb89dd0cc56.png";

export function RoomImageTv() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image/tv">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-center object-contain size-full" src={imgImageTv} />
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
