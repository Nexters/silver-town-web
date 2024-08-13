"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { onAppDownloadClick } from "~/libs/app-download-click";
import { NavigateNext } from "./ui/icons";

interface Props {
  eventItemName: string;
}

const EventBannerButton = ({ eventItemName }: Props) => {
  const router = useRouter();
  const onClickDownloadApp = () => {
    onAppDownloadClick(router.push);
  };
  return (
    <button
      onClick={onClickDownloadApp}
      type="button"
      className="overflow-hidden flex flex-1 items-center justify-center ml-[6px]"
    >
      <span className="whitespace-nowrap text-ellipsis overflow-hidden">
        <span className="text-[#000000] text-[20px] font-semibold leading-[36px]">
          응모하고
        </span>
        <span className="text-[#F26600] text-[20px] font-semibold leading-[36px] mr-[4px]">
          {` ${eventItemName} 받으러 가기`}
        </span>
      </span>
      <NavigateNext />
    </button>
  );
};

export default EventBannerButton;
