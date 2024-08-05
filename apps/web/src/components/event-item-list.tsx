"use client";

import { Prize } from "@daily-phrase/api";
import React, { useEffect, useState } from "react";
import { apis } from "~/apis";
import EventItem from "./event-item";

const EventItemList = () => {
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

  return (
    <div className="w-fit flex gap-[16px] overflow-auto">
      {isLoading
        ? [...Array(3)].map((_, i) => {
            return (
              <div key={i} className="space-y-2">
                <div className="animate-pulse bg-[#ececec] w-[140px] h-[140px] rounded-[8px]" />
                <div className="flex">
                  <div className="animate-pulse bg-[#ececec] w-[41px] h-[41px] rounded-[8px]" />
                  <div className="animate-pulse bg-[#ececec] ml-[5px] w-[94px] h-[41px] rounded-[8px]" />
                </div>
              </div>
            );
          })
        : eventList.map((eventItem) => (
            <EventItem key={eventItem.prizeId} prize={eventItem} />
          ))}
    </div>
  );
};

export default EventItemList;
