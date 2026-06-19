import { VloerenGrid } from "../organisms/vloeren/VloerenGrid";
import { PortfolioColumn } from "../organisms/portfolio/PortfolioColumn";

export function VloerenSection() {
  return (
    <div className="absolute h-[1734px] left-[calc(50%-464px)] top-[-1734px] translate-x-[-50%] w-[440px]" data-name="wrapper/content/left">
      <VloerenGrid />
      <PortfolioColumn />
    </div>
  );
}
