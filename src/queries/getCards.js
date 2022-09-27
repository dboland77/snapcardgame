export const getNewDeck = () => {
    return {
      queryName: "inital deck query",
      url: "deck/new/draw/",
      method: "GET",
      searchParams: {count: 52}
    };
  };
  