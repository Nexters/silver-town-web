"use client";

import { Prize } from "@daily-phrase/api";
import React, { useEffect, useState } from "react";
import { apis } from "~/apis";

const EventParticipantFloatingButton = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventList, setEventList] = useState<Array<Prize>>([]);

  const getPrizeList = async () => {
    // const res = await apis.eventApi.getPrizeList({ baseURL: "" });
    const res = await fetch("/api/v1/events/prizes", {
      headers: {
        "content-type": "application/json",
      },
    });
    const { data } = await res.json();
    setIsLoading(false);
    setEventList(data.result.prizeList);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getPrizeList();
  }, []);

  if (isLoading) return null;
  const eventMainItem = eventList[0];
  if (!("totalParticipantCount" in eventMainItem)) return null;
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
