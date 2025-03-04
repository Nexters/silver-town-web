import {
  ApiClientInstance,
  ApiData,
  Phrase,
  PhrasePaging,
  RequestConfig,
} from "@daily-phrase/api";

export class PhraseApi {
  private apiClient: ApiClientInstance;
  constructor(apiClient: ApiClientInstance) {
    this.apiClient = apiClient;
  }
  getPhraseList(size: number, requestConfig?: RequestConfig) {
    return this.apiClient.get<ApiData<PhrasePaging>>(
      `/api/v1/phrases?page=1&size=${size}`,
      {
        ...requestConfig,
        headers: {
          ...requestConfig?.headers,
          "content-type": "application/json",
        },
      },
    );
  }
  getPhrase(id: string) {
    return this.apiClient.get<ApiData<Phrase>>(`/api/v1/phrases/${id}`, {
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
