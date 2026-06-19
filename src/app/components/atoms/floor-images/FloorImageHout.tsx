import imgHoverLaminaat from "figma:asset/94ce05cd72cb86df7abb8e3c35ee7367f6ba25cb.png";

export function FloorImageHout() {
  return (
    <div className="aspect-[100/100] h-full pointer-events-none relative shrink-0" data-name="image/1">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-center object-contain size-full" src={imgHoverLaminaat} />
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0" />
    </div>
  );
}
