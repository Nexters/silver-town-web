"use client";

import { useAppDownloadModalStore } from "./app-download-modal";
import EventParticipantFloatingButton from "./event-participant-floating-button";
import { BookmarkLinearIcon, LikeLinearIcon } from "./ui/icons";

export default function AppFooter() {
  // TODO: 앱이 있으면 팝업 없이 바로 앱으로 이동 가능한지 확인
  const openAppDownloadModal = useAppDownloadModalStore((state) => state.open);
  const onLikeClick = () => {
    openAppDownloadModal();
    window.clarity?.("event", "footer-like");
  };
  const onBookmarkClick = () => {
    openAppDownloadModal();
    window.clarity?.("event", "footer-bookmark");
  };
  const onShareClick = () => {
    openAppDownloadModal();
    window.clarity?.("event", "footer-share");
  };

  return (
    <div className="container fixed bottom-0 inset-x-0">
      <div className="flex items-center justify-center gap-3 p-4 pb-[26px] h-[90px] bg-white">
        <button
          type="button"
          className="flex items-center justify-center flex-1"
          style={styles.btnWrapper}
          onClick={onShareClick}
        >
          <div
            className="flex items-center justify-center flex-1"
            style={{
              height: 48,
              borderRadius: 8,
              background: "#FF7900",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              lineHeight: "22px",
            }}
          >
            3초 만에 경품 응모하기
          </div>
        </button>
      </div>
    </div>
  );
}

const styles = {
  btnWrapper: {
    padding: "16px 6px",
    margin: "-16px -6px",
  },
};
