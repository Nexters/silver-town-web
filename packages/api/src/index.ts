export * from "./fetch";
export * from "./phrase.type";
export * from "./event.type";

export interface ApiData<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
  status: number;
}
