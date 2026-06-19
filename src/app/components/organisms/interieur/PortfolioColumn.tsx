"use client";

import {
  PortfolioImage5,
  PortfolioImage6,
} from "../../atoms/interieur-images";

export function PortfolioColumn() {
  return (
    <div className="content-stretch flex flex-col h-[956px] items-center relative shrink-0 w-[440px]" data-name="column/images/3">
      <PortfolioImage5 />
      <PortfolioImage6 />
    </div>
  );
}