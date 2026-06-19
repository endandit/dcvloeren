import { PortfolioImage1 } from "../../atoms/floor-images/PortfolioImage1";
import { PortfolioImage2 } from "../../atoms/floor-images/PortfolioImage2";

function ColumnImages() {
  return (
    <div className="content-stretch flex flex-col h-[956px] items-center relative shrink-0 w-[440px]" data-name="column/images/1">
      <PortfolioImage1 />
      <PortfolioImage2 />
    </div>
  );
}

export function PortfolioColumn() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-1/2 top-0 translate-x-[-50%] w-[440px]" data-name="wrapper/images/left">
      <ColumnImages />
    </div>
  );
}
