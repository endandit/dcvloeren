import { IconScroll } from "../../atoms/icons/IconScroll";

export function HeadingQuote() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="heading/quote">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[24px] py-0 relative size-full">
          <IconScroll />
          <p className="basis-0 font-['Oswald:Light',sans-serif] font-light grow leading-[44.8px] min-h-px min-w-px relative shrink-0 text-[#d3bb51] text-[18px] uppercase">
            Vraag vrijblijvend een offerte aan
          </p>
        </div>
      </div>
    </div>
  );
}
