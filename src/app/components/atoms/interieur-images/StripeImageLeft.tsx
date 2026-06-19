"use client";

import imgStripeLeft from "figma:asset/29f85bb1dfa3dbd46e028d11f579cebb25d2b3a9.png";

export function StripeImageLeft() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image/left-v">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img loading="lazy" alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgStripeLeft} />
      </div>
      <div className="size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
