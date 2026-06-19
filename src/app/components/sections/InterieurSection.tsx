"use client";

import { InterieurCard } from "../organisms/interieur/InterieurCard";
import { PortfolioWrapper } from "../organisms/interieur/PortfolioWrapper";

/**
 * InterieurSection - Right content column
 * 
 * Contains:
 * - InterieurCard: Main content card with stripes, akoestiek info, room images, and interieur description
 * - PortfolioWrapper: Portfolio images column (images 5 & 6)
 * 
 * Position: right side of desktop layout
 * Height: 1734px container
 * Initial offset: top-[-1734px] (built into parent positioning)
 */
export function InterieurSection() {
  return (
    <div className="absolute h-[1734px] left-[calc(50%+464px)] top-[-1734px] translate-x-[-50%] w-[440px]" data-name="wrapper/content/right">
      <InterieurCard />
      <PortfolioWrapper />
    </div>
  );
}
