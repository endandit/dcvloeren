"use client";

import imgStripeCenter from "figma:asset/4dc9b46c5c6885d3f58b2e97d578bcf0a63753a6.png";

export function StripeImageCenter() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image/horizontal">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img loading="lazy" alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgStripeCenter} />
      </div>
      <div className="size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
