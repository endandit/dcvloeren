import { FloorItemHout } from "../../molecules/floor-items/FloorItemHout";
import { FloorItemPvc } from "../../molecules/floor-items/FloorItemPvc";
import { FloorItemMicrocement } from "../../molecules/floor-items/FloorItemMicrocement";
import { FloorItemTraptreden } from "../../molecules/floor-items/FloorItemTraptreden";
import { FloorItemRenovatie } from "../../molecules/floor-items/FloorItemRenovatie";

export function VloerenGrid() {
  return (
    <div className="absolute bg-[#f0f0f0] content-stretch flex flex-col gap-[24px] h-[754px] items-start left-1/2 overflow-clip top-[980px] translate-x-[-50%] w-[440px]" data-name="column/vloeren">
      <FloorItemHout />
      <FloorItemPvc />
      <FloorItemMicrocement />
      <FloorItemTraptreden />
      <FloorItemRenovatie />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_24px_24px_0px_0px_rgba(255,255,255,0.5),inset_-24px_-24px_0px_0px_rgba(0,0,0,0.15)]" />
    </div>
  );
}
