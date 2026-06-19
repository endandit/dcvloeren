"use client";

import {
  StripeRow,
  AkoestiekRow,
  RoomImagesRow,
  InterieurDescriptionRow,
} from "../../molecules/interieur-rows";
import { PortfolioImage1 } from "../../atoms/floor-images/PortfolioImage1";
import { PortfolioImage2 } from "../../atoms/floor-images/PortfolioImage2";
import { PortfolioImage5, PortfolioImage6 } from "../../atoms/interieur-images";
import { ContactSection } from "../ContactSection";
import {
  FloorItemHout,
  FloorItemPvc,
  FloorItemMicrocement,
  FloorItemTraptreden,
  FloorItemRenovatie,
} from "../../molecules/floor-items";

// Image imports
import imgImage3 from "figma:asset/e090e70caa55a43b92507acdd77972728ff883dc.png";
import imgIconWork from "figma:asset/87e03bb45efaec45704d9425a884451efddf7964.png";
import imgImage4 from "figma:asset/0de16d27dc618350b29a6a1fe1d3bea8111f735d.png";
import imgImageLeft1 from "figma:asset/cdd78106b64463934274b313b38bd36e295070eb.png";
import imgImageCenter1 from "figma:asset/42022fb696ed334c17884a2bfa551a9a68cafd79.png";
import imgImageRight from "figma:asset/c70e65c1cc1b9c62d17d1b867a926e4eb04853ac.png";
import imgIconAbout from "figma:asset/3637f29b0710f93bccdfda0c35f0b36996fd295d.png";

/**
 * TabletWrapperContentCenter
 * 
 * TABLET ONLY: Custom center content wrapper with column/vloeren inserted
 * between column/images/2 and column/about
 */

// Images section components
function Image() {
  return (
    <div className="relative shrink-0 w-[440px] h-[478px]" data-name="image/3">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-center object-cover size-full" src={imgImage3} />
      <div className="content-stretch flex flex-col items-center pb-0 pt-[48px] px-0 absolute inset-0 pointer-events-none">
        <div id="icon-work" className="relative shrink-0 size-[80px]" data-name="icon/work">
          <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconWork} />
        </div>
      </div>
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

function ColumnImages() {
  return (
    <div className="content-stretch flex flex-col gap-0 h-[956px] items-stretch p-0 relative shrink-0 w-[440px]" data-name="column/images/2">
      <Image />
      <Image1 />
    </div>
  );
}

function WrapperImagesCenter() {
  // Position updated: After column/images/3 copy (2529 + 956, no gap) = 3485px
  return (
    <div className="absolute bottom-[3485px] content-stretch flex flex-col items-start justify-center left-1/2 translate-x-[-50%] w-[440px]" data-name="wrapper/images/center">
      <ColumnImages />
    </div>
  );
}

// NEW: Column/images/1 copy positioned first, then column/images/2 above it
function ColumnImagesCopy() {
  // Position: Switched with column/images/3 - now at 2529px
  return (
    <div className="absolute bottom-[2529px] content-stretch flex flex-col h-[956px] items-center left-1/2 w-[440px] translate-x-[-50%]" data-name="column/images/1-copy">
      <PortfolioImage1 />
      <PortfolioImage2 />
    </div>
  );
}

// NEW: Column/images/3 copy positioned below column/images/1
function ColumnImages3Copy() {
  // Position: Switched with column/images/1 - now at the bottom at 1573px
  return (
    <div className="absolute bottom-[1573px] content-stretch flex flex-col h-[956px] items-center left-1/2 w-[440px] translate-x-[-50%]" data-name="column/images/3-copy">
      <PortfolioImage5 />
      <PortfolioImage6 />
    </div>
  );
}

// About section components
function Row11() {
  return (
    <div className="relative shrink-0 w-full" data-name="row/1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[12px] pt-[24px] px-[36px] relative w-full">
          <p className="font-['Oswald:Light',sans-serif] font-light leading-[42px] relative shrink-0 text-[#141311] text-[28px] w-full">Dennis Cornelissen is vloerspecialist met een passie voor interieur en binnenhuis-architectuur</p>
        </div>
      </div>
    </div>
  );
}

function ImageLeft1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image/left-2">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageLeft1} />
      <div className="size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageCenter1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image/main">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageCenter1} />
      <div className="size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageRight1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="image/right-2">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageRight} />
      <div className="size-full">
        <div className="size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Row12() {
  return (
    <div className="h-[122px] relative shrink-0 w-full" data-name="row/2">
      <div className="size-full">
        <div className="content-stretch flex gap-[24px] items-start px-[24px] py-0 relative size-full">
          <ImageLeft1 />
          <ImageCenter1 />
          <ImageRight1 />
        </div>
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="relative shrink-0 w-full" data-name="row/3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[36px] pt-[12px] px-[36px] relative w-full">
          <p className="font-['Oswald:ExtraLight',sans-serif] font-extralight leading-[42px] relative shrink-0 text-[#141311] text-[28px] w-full">{`Met jarenlange ervaring in het plaatsen en renoveren van houten vloeren en trappen, parket en PVC, wordt de vloer vakkundig geplaatst naar de hoogste kwaliteitseisen en in ieder gewenst patroon. Desgewenst adviseert DC vloeren & interieur over de perfecte harmonie tussen vloer, interieur en akoestiek in uw woning, winkel of bedrijfspand.`}</p>
        </div>
      </div>
    </div>
  );
}

function ColumnAbout() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex flex-col h-[754px] items-start overflow-clip relative shrink-0 w-[440px]" data-name="column/about">
      <Row11 />
      <Row12 />
      <Row13 />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

function WrapperAbout({ onIconClick, isClickable }: { onIconClick?: () => void; isClickable?: boolean } = {}) {
  // Position updated: After vloeren (5243 + 754 + 24) = 6021px
  return (
    <div className="absolute bottom-[6021px] content-stretch flex flex-col gap-[48px] items-center left-1/2 translate-x-[-50%] w-[440px]" data-name="wrapper/about">
      <div 
        className={`relative shrink-0 size-[80px] ${isClickable ? 'cursor-pointer' : ''}`}
        data-name="icon/about"
        id="icon-about-highlighted"
        onClick={onIconClick}
      >
        <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconAbout} />
      </div>
      <ColumnAbout />
    </div>
  );
}

// NEW: Column Interieur positioned between images and vloeren
function ColumnInterieur() {
  // Position updated: After wrapper/images/center (3485 + 956 + 24 gap) = 4465px
  return (
    <div className="absolute bottom-[4465px] bg-[#f0f0f0] content-stretch flex flex-col h-[754px] items-start left-1/2 overflow-clip translate-x-[-50%] w-[440px]" data-name="column/interieur">
      <StripeRow />
      <AkoestiekRow />
      <RoomImagesRow />
      <InterieurDescriptionRow />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

// Column Vloeren positioned after interieur
function ColumnVloeren() {
  // Position updated: After interieur (4465 + 754 + 24) = 5243px
  return (
    <div className="absolute bottom-[5243px] bg-[#f0f0f0] content-stretch flex flex-col gap-[24px] h-[754px] items-start left-1/2 overflow-clip translate-x-[-50%] w-[440px]" data-name="column/vloeren">
      <FloorItemHout />
      <FloorItemPvc />
      <FloorItemMicrocement />
      <FloorItemTraptreden />
      <FloorItemRenovatie />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}

export function TabletWrapperContentCenter({ onIconClick, isClickable, scrollProgress }: { onIconClick?: () => void; isClickable?: boolean; scrollProgress?: number } = {}) {
  /**
   * WRAPPER STRUCTURE:
   * - Positioned at bottom-[-6775px] (starts 6775px below its container's bottom)
   * - Height increased to 7314px to accommodate ContactSection extending bottom-[-204px]
   * - Total travel: 6775px to bring bottom edge from -6775px to viewport bottom (0px)
   */
  return (
    <div className="absolute bottom-[-6775px] h-[7314px] left-1/2 translate-x-[-50%] w-[440px] overflow-visible" data-name="wrapper/content/center">
      <ContactSection scrollProgress={scrollProgress} />
      <ColumnImagesCopy />
      <ColumnImages3Copy />
      <WrapperImagesCenter />
      <ColumnInterieur />
      <ColumnVloeren />
      <WrapperAbout onIconClick={onIconClick} isClickable={isClickable} />
    </div>
  );
}