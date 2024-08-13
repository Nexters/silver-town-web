"use client";

import { useAppDownloadModalStore } from "./app-download-modal";
import { Close, Logo } from "./ui/icons";

const AppDownloadHeader = () => {
  const { open } = useAppDownloadModalStore();

  return (
    <div className="w-full px-[20px] py-[10px] bg-[#2C2C2C]">
      <button
        type="button"
        className="w-full flex justify-between items-center"
        onClick={open}
      >
        <div className="flex justify-center items-center gap-[12px]">
          <Close width={20} height={20} />
          <Logo />
          <div className="flex flex-col justify-center items-start">
            <span className="text-[#ffffff] text-[16px] font-bold leading-[20px]">
              매일글귀
            </span>
            <span className="text-[#ffffff] text-[14px] font-medium leading-[20px]">
              나를 위한 명언과 글귀
            </span>
          </div>
        </div>
        <div className="bg-[#00B998] ml-[12px] px-[16px] py-[8px] rounded-[8px]">
          <span className="text-[#ffffff] text-[16px] font-medium leading-[24px] text-center">
            다운로드
          </span>
        </div>
      </button>
    </div>
  );
};

export default AppDownloadHeader;
