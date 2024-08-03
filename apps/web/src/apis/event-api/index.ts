import { ApiClientInstance, ApiData, PrizeTotalList } from "@daily-phrase/api";

export class EventApi {
  private apiClient: ApiClientInstance;
  constructor(apiClient: ApiClientInstance) {
    this.apiClient = apiClient;
  }
  getPrizeList() {
    return this.apiClient.get<ApiData<PrizeTotalList>>(
      "/api/v1/events/prizes",
      {
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }
}
