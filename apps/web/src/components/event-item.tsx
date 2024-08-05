"use client";

import { Prize } from "@daily-phrase/api";
import React from "react";
import GiftIcon from "src/assets/svg/Ticket.svg";
import BaseImage from "./ui/base-image";

interface Props {
  prize: Prize;
}

const EventItem = ({ prize }: Props) => {
  const { imageUrl, name, requiredTicketCount } = prize;
  return (
    <div className="flex flex-col justify-start">
      <BaseImage
        src={imageUrl}
        alt={name}
        width={140}
        height={140}
        style={{ minWidth: "140px", minHeight: "140px" }}
        className="rounded-[16px]"
      />
      <div className="mt-[8px] flex items-center justify-center">
        <BaseImage src={GiftIcon} alt={"gift icon"} width={41} height={41} />
        <span className="whitespace-nowrap ml-[4px] font-semibold text-[20px] leading-[27px]">{`${requiredTicketCount}장 필요`}</span>
      </div>
    </div>
  );
};

export default EventItem;
