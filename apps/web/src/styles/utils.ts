import { ModalStatus } from "~/types/modal-status";

export const getModalAnimationClassNames = (status: ModalStatus) => [
  status === "mounted" ? "animate-fade-in" : "",
  status === "closed" ? "animate-fade-out" : "",
];
