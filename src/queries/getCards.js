export const getNewDeck = () => {
  return {
    queryName: "inital deck query",
    url: "deck/new/draw/",
    method: "GET",
    searchParams: { count: 52 },
  };
};

// export const shuffleCards = () => {

//   https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// }
