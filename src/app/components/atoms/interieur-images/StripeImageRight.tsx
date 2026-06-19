"use client";

import imgStripeRight from "figma:asset/a5d0c460f9588191e7e8aa582a1be602e9d644e5.png";

export function StripeImageRight() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image/right-v">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img loading="lazy" alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgStripeRight} />
      </div>
      <div className="size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
