export const getNewDeck = () => {
  return {
    queryName: "new deck",
    url: "deck/new/draw/",
    method: "GET",
    params: { count: 52 },
  };
};

export const shuffleCards = () => {
  return {
    queryName: "shuffle deck",
    url: "deck/new/draw/",
    method: "GET",
    params: {count: 52 },
  };
}

export const drawCard = (deckid) => {
  return {
    queryName: "draw a card",
    url: `deck/${deckid}/draw/`,
    method: "GET",
    params: { count: 1 },
  }
}
