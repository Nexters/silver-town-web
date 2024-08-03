import React from "react";
import { apis } from "~/apis";

const EventParticipantFloatingButton = async () => {
  const res = await apis.eventApi.getPrizeList();
  const eventList = res.result;
  const eventMainItem = eventList.prizeList[0];
  return (
    <div className="w-fit bg-[#ffffff] py-[5px] px-[12px] rounded-[20px] border-[1px] border-solid border-[#FF7900] shadow-[0_4px_10px_0px_#0000001A]">
      <span className="text-[16px] font-semibold leading-[19.2px] whitespace-pre-wrap">
        현재
        <span className="text-[#FF7900] text-[16px] font-semibold leading-[19.2px]">
          {` ${eventMainItem.totalParticipantCount}명 `}
        </span>
        참여 중
      </span>
    </div>
  );
};

export default EventParticipantFloatingButton;
