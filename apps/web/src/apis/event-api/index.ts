import {
  ApiClientInstance,
  ApiData,
  PrizeTotalList,
  RequestConfig,
} from "@daily-phrase/api";

export class EventApi {
  private apiClient: ApiClientInstance;
  constructor(apiClient: ApiClientInstance) {
    this.apiClient = apiClient;
  }
  getPrizeList(requestConfig?: RequestConfig) {
    return this.apiClient.get<ApiData<PrizeTotalList>>(
      "/api/v1/events/prizes",
      {
        ...requestConfig,
        headers: {
          ...requestConfig?.headers,
          "content-type": "application/json",
        },
      },
    );
  }
}
