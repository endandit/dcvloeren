"use client";

import imgImageShop from "figma:asset/b46e21dea586cf695584e01fcf6874beae1bfb15.png";

export function RoomImageShop() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image/shop">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-center object-contain size-full" src={imgImageShop} />
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
