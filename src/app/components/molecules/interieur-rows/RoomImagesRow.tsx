"use client";

import {
  RoomImageShop,
  RoomImageChair,
  RoomImageTv,
} from "../../atoms/interieur-images";

export function RoomImagesRow() {
  return (
    <div className="h-[122px] relative shrink-0 w-full" data-name="row/3">
      <div className="size-full">
        <div className="content-stretch flex gap-[24px] items-start px-[24px] py-0 relative size-full">
          <RoomImageShop />
          <RoomImageChair />
          <RoomImageTv />
        </div>
      </div>
    </div>
  );
}
