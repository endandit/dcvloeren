import imgDefaultMicrocement from "figma:asset/5112f50c95c5130333b1591c5d68e27bb84eaeac.png";

export function FloorImageMicrocement() {
  return (
    <div className="aspect-[100/100] basis-0 grow min-h-px min-w-px pointer-events-none relative shrink-0" data-name="image/3">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-center object-contain size-full" src={imgDefaultMicrocement} />
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0" />
    </div>
  );
}
