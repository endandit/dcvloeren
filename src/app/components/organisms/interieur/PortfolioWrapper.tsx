"use client";

import { PortfolioColumn } from "../../organisms/interieur/PortfolioColumn";

export function PortfolioWrapper() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-1/2 top-0 translate-x-[-50%] w-[440px]" data-name="wrapper/images/right">
      <PortfolioColumn />
    </div>
  );
}
