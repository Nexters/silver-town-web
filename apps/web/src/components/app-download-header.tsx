"use client";

import { useEffect, useState } from "react";
import LocalStorage from "~/libs/localStorage";
import { useAppDownloadModalStore } from "./app-download-modal";
import { Close, Logo } from "./ui/icons";

interface Props {
  onClose: () => void;
}

const AppDownloadHeader = ({ onClose }: Props) => {
  const { open } = useAppDownloadModalStore();

  const handleClose: React.SVGProps<SVGSVGElement>["onClick"] = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="w-full px-[20px] py-[10px] bg-[#2C2C2C]">
      <button
        type="button"
        className="w-full flex justify-between items-center"
        onClick={open}
      >
        <div className="flex justify-center items-center gap-[12px]">
          <Close width={20} height={20} onClick={handleClose} />
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

const AppDownloadHeaderAdaptor = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hide = localStorage.getItem("download-header-close");
    setVisible(hide === null ? true : hide === "false");
  }, []);

  const onClose = () => {
    localStorage.setItem("download-header-close", "true");
    setVisible(false);
  };

  if (typeof window === "undefined") return null;

  return visible ? <AppDownloadHeader onClose={onClose} /> : null;
};

export default AppDownloadHeaderAdaptor;
