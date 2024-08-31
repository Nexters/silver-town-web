"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { RemoveScroll } from "react-remove-scroll";
import { create } from "zustand";
import { onAppDownloadClick } from "~/libs/app-download-click";
import {
  ModalStatusStore,
  getModalStatusStore,
} from "~/libs/store/modal-status";
import { cn } from "~/libs/utils";
import { getModalAnimationClassNames } from "~/styles/utils";
import EventItemList from "./event-item-list";
import DimmedBackground from "./ui/dimmed-background";
import { Close } from "./ui/icons";

export const useEventModalStore = create<ModalStatusStore>(getModalStatusStore);

const EventModal = () => {
  const { status, open, close, transferStatus } = useEventModalStore();
  const router = useRouter();

  useEffect(() => {
    open();
  }, [open]);

  const onClickDownloadApp = () => {
    onAppDownloadClick(router.push);
  };

  const onClickClose = () => {
    close();
  };

  if (status === "unmounted") {
    return null;
  }

  return createPortal(
    <RemoveScroll removeScrollBar={false}>
      <DimmedBackground classNames={getModalAnimationClassNames(status)} />
      <div
        className={cn(
          getModalAnimationClassNames(status),
          "z-[1000] max-w-full px-[16px] flex flex-col items-center justify-center fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[368px] overflow-hidden",
        )}
        onAnimationEnd={transferStatus}
      >
        <h2 className="mb-[16px] text-[24px] leading-[28.8px] font-semibold text-white">
          9월 이벤트 오픈
        </h2>
        <div className={cn("z-[1000] w-full bg-[#F4F1EA] rounded-[8px]")}>
          <div className="flex justify-end px-[10px] pt-[10px] pb-[2px]">
            <Close onClick={onClickClose} />
          </div>
          <p className="text-black font-semibold text-center text-[20px] leading-[24px] mx-[12px]">
            매일글귀에서
            <br />
            받을 수 있는 경품이예요.
          </p>
          <div className="my-[24px] overflow-auto">
            <EventItemList />
          </div>
          <div className="w-[calc(100%-32px)] mx-[16px]">
            <button
              type="button"
              className="w-fit h-fit mx-[auto] mb-[40px] px-[44px] py-[13px] flex items-center justify-center h-10 rounded-[8px] overflow-hidden font-semibold text-white text-[18px] leading-[22px] bg-[#FF7900]"
              onClick={onClickDownloadApp}
            >
              앱설치하고 바로 응모
            </button>
          </div>
        </div>
        <button type="button" onClick={onClickClose} className="mt-[16px]">
          <span className="underline text-[16px] leading-[19.2px] font-medium text-white">
            괜찮아요. 다음에 볼게요.
          </span>
        </button>
      </div>
    </RemoveScroll>,
    document.body,
  );
};

export default EventModal;
