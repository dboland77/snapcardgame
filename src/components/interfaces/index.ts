export interface ICard {
  code: string;
  image: string;
  images?: object;
  suit: string;
  value: string;
}

export interface IDeck {
  success: boolean;
  deck_id: string;
  cards: ICard[];
  remaining: number;
}

export interface IAppState {
  deck?: IDeck;
  lastCard: ICard;
  currentCard: ICard;
  matches: {
    value: number;
    suit: number;
  };
}
