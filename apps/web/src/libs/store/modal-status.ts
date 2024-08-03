import { StateCreator } from "zustand";
import { ModalStatus } from "~/types/modal-status";

export type ModalStatusStore = {
  status: ModalStatus;
  open: () => void;
  close: () => void;
  transferStatus: () => void;
};

export const getModalStatusStore: StateCreator<ModalStatusStore, [], []> = (
  set,
  get,
) => ({
  status: "unmounted",
  open: () => {
    if (get().status === "unmounted") {
      set({ status: "mounted" });
    }
  },
  close: () => {
    if (get().status === "opened") {
      set({ status: "closed" });
    }
  },
  transferStatus: () => {
    const { status } = get();

    if (status === "mounted") {
      set({ status: "opened" });
    } else if (status === "closed") {
      set({ status: "unmounted" });
    }
  },
});
