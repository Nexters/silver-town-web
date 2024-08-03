export interface PrizeEntryResult {
  status: "ENTERED";
  phoneNumber: string;
  isChecked: true;
}

export interface Prize {
  prizeId: number;
  eventId: number;
  name: string;
  shortName: string;
  manufacturer: string;
  welcomeImageUrl: string;
  bannerImageUrl: string;
  imageUrl: string;
  requiredTicketCount: number;
  totalParticipantCount: number;
  myEntryCount: number;
  myTicketCount: number;
  prizeEntryResult: PrizeEntryResult;
}

export interface PrizeTotalList {
  total: number;
  prizeList: Array<Prize>;
}
