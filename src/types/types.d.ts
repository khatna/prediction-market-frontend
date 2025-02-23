interface MarketData {
  id: string;
  question: string;
  created_at: string;
  probability: number;
  volume: number;
  history: [date: string, probability: number][];
}

interface BetRequest {
  market_id: string;
  is_yes: string;
  stake: number;
}

interface BetResponse {
  purchased: number;
  market_data: MarketData;
}
