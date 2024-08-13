"use client";

import { AOS_APP_LINK } from "~/constants";
import { detectDevice } from "./detect-device";

export const onAppDownloadClick = (navigate: (route: string) => void) => {
  // TODO: 앱이 있으면 앱 열기, 없으면 playstore로 이동
  const device = detectDevice();
  if (device === "android") navigate(AOS_APP_LINK);
  else if (device !== null) navigate("/ios-not-supported");
  if (device !== null) window.clarity?.("event", `install-modal-${device}`);
};
