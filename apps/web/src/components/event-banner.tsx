import React from "react";
import { apis } from "~/apis";
import EventBannerButton from "./event-banner-button";
import BaseImage from "./ui/base-image";

const EventBanner = async () => {
  const res = await apis.eventApi.getPrizeList();
  const eventList = res.result;
  const eventMainItem = eventList.prizeList[0];

  return (
    <div className="bg-[#F4F1EA] px-[40px] py-[7px] flex items-center justify-center">
      <BaseImage
        src={eventMainItem?.bannerImageUrl}
        width={60}
        height={60}
        alt={eventMainItem?.name}
      />
      <EventBannerButton eventItemName={eventMainItem?.shortName || "경품"} />
    </div>
  );
};

export default EventBanner;
