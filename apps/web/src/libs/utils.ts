import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AOS_APP_LINK } from "~/constants";
import { detectDevice } from "./detect-device";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function numberWithCommas(x: number | string) {
  if (!x) return "0";

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getAspectRatioArray(str: string) {
  if (!str || typeof str !== "string") {
    return [1, 1];
  }

  return str.split(":") as unknown as [number, number];
}

export function getAspectRatio(str: string) {
  const [w, h] = getAspectRatioArray(str);
  return w / h;
}

export const onAppDownloadClick = (navigate: (route: string) => void) => {
  // TODO: 앱이 있으면 앱 열기, 없으면 playstore로 이동
  const device = detectDevice();
  if (device === "android") window.open(AOS_APP_LINK);
  else if (device !== null) navigate("/ios-not-supported");
  if (device !== null) window.clarity?.("event", `install-modal-${device}`);
};
