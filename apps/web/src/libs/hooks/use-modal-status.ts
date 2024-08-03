import { useState } from "react";
import { ModalStatus } from "~/types/modal-status";

const useModalStatus = () => {
  const [status, setStatus] = useState<ModalStatus>("unmounted");

  const open = () => {
    setStatus((prev) => {
      if (prev === "unmounted") return "mounted";
      return prev;
    });
  };

  const close = () => {
    setStatus((prev) => {
      if (prev === "opened") return "closed";
      return prev;
    });
  };

  const transferStatus = () => {
    setStatus((prev) => {
      if (prev === "mounted") return "opened";
      if (prev === "closed") return "unmounted";
      return prev;
    });
  };

  return { status, open, close, transferStatus };
};

export default useModalStatus;
