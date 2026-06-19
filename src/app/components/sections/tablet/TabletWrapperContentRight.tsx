"use client";

import { PortfolioWrapper } from "../../organisms/interieur/PortfolioWrapper";
import { PortfolioImage1 } from "../../atoms/floor-images/PortfolioImage1";
import { PortfolioImage2 } from "../../atoms/floor-images/PortfolioImage2";

// Image imports for column/images/2
import imgImage3 from "figma:asset/e090e70caa55a43b92507acdd77972728ff883dc.png";
import imgImage4 from "figma:asset/0de16d27dc618350b29a6a1fe1d3bea8111f735d.png";

/**
 * TabletWrapperContentRight
 * 
 * TABLET ONLY: Empty column/interieur (just bg color + inner shadows)
 * + 2 copies of column/interieur inserted between original and column/images/3
 * Desktop uses full InterieurCard with rows
 */

// NEW: Copy of column/images/2 positioned above column/images/3 (icon/work removed)
function Image() {
  return (
    <div className="relative shrink-0 w-[440px] h-[478px]" data-name="image/3">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-center object-cover size-full" src={imgImage3} />
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 w-[440px] h-[478px]" data-name="image/4">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-center object-cover size-full" src={imgImage4} />
    </div>
  );
}

function ColumnImages2Top() {
  return (
    <div className="absolute content-stretch flex flex-col gap-0 h-[956px] items-stretch left-1/2 p-0 top-[-956px] translate-x-[-50%] w-[440px]" data-name="column/images/2-top">
      <Image1 />
      <Image />
    </div>
  );
}

// NEW: Copy of column/images/1 positioned above column/images/3
function ColumnImages1Top() {
  return (
    <div className="absolute content-stretch flex flex-col h-[956px] items-center left-1/2 top-[-1912px] translate-x-[-50%] w-[440px]" data-name="column/images/1-top">
      <PortfolioImage2 />
      <PortfolioImage1 />
    </div>
  );
}

function ColumnInterieurEmpty() {
  return (
    <div className="absolute bg-[#adadad] h-[754px] left-1/2 overflow-clip top-[980px] translate-x-[-50%] w-[440px]" data-name="column/interieur">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ColumnInterieurCopy1() {
  return (
    <div className="absolute bg-[#adadad] h-[754px] left-1/2 overflow-clip top-[1758px] translate-x-[-50%] w-[440px]" data-name="column/interieur-copy-1">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function ColumnInterieurCopy2() {
  return (
    <div className="absolute bg-[#adadad] h-[754px] left-1/2 overflow-clip top-[2536px] translate-x-[-50%] w-[440px]" data-name="column/interieur-copy-2">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

export function TabletWrapperContentRight() {
  return (
    <div className="absolute h-[3290px] left-[calc(50%+464px)] top-[-3290px] translate-x-[-50%] w-[440px]" data-name="wrapper/content/right">
      <PortfolioWrapper />
      <ColumnInterieurEmpty />
      <ColumnInterieurCopy1 />
      <ColumnInterieurCopy2 />
      <ColumnImages1Top />
      <ColumnImages2Top />
    </div>
  );
}