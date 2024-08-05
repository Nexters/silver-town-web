export interface BaseResponseSuccess<T> {
  data: T;
}

interface AdditionalErrorConfig {
  fetchRoute: string;
}

export type RequestConfig = RequestInit & { baseURL?: string };

export type OnResponseError<ResponseError, ThrownError> = (
  error: ResponseError,
  requestConfig: RequestConfig & AdditionalErrorConfig,
) => ThrownError;

export type OnResponseSuccess<ResponseSuccess, TransformedResponse> = (
  response: ResponseSuccess,
) => TransformedResponse;

export type OnRequestError<ResponseError> = (
  error: ResponseError,
  requestConfig: RequestConfig & AdditionalErrorConfig,
) => never;

export interface ApiClientProps {
  requestConfig: RequestConfig;
  onRequestSuccess?: (requestConfig: RequestConfig) => RequestConfig;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onRequestError?: OnRequestError<any>;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onResponseSuccess?: OnResponseSuccess<any, any>;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onResponseError?: OnResponseError<any, any>;
}

export interface ApiClientInstance {
  get<T>(route: string, requestConfig?: RequestConfig): Promise<T>;
  delete<T>(route: string, requestConfig?: RequestConfig): Promise<T>;
  post<T>(
    route: string,
    body?: RequestConfig["body"],
    requestConfig?: Omit<RequestConfig, "body">,
  ): Promise<T>;
  put<T>(
    route: string,
    body?: RequestConfig["body"],
    requestConfig?: Omit<RequestConfig, "body">,
  ): Promise<T>;
  patch<T>(
    route: string,
    body?: RequestConfig["body"],
    requestConfig?: Omit<RequestConfig, "body">,
  ): Promise<T>;
}
