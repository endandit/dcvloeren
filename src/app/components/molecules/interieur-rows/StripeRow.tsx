"use client";

import {
  StripeImageLeft,
  StripeImageCenter,
  StripeImageRight,
} from "../../atoms/interieur-images";

export function StripeRow() {
  return (
    <div className="h-[146px] relative shrink-0 w-full" data-name="row/1">
      <div className="size-full">
        <div className="content-stretch flex gap-[24px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <StripeImageLeft />
          <StripeImageCenter />
          <StripeImageRight />
        </div>
      </div>
    </div>
  );
}
