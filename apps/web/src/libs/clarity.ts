"use client";

export const modalCloseEvent = (isButtonClick: boolean) => {
  window.clarity?.(
    "event",
    isButtonClick ? "install-modal-close-button" : "install-modal-dim-close",
  );
};
