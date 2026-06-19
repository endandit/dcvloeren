import imgDefaultPvc from "figma:asset/10f8ec68b8ed8ec60ef363ddf46873a04b406710.png";

export function FloorImagePvc() {
  return (
    <div className="aspect-[100/100] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="image/2">
      <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-center object-contain size-full" src={imgDefaultPvc} />
      <div aria-hidden="true" className="absolute border border-[#141311] border-solid inset-0" />
    </div>
  );
}
