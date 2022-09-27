import React, { useState, useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import { Spinner } from "./Layout/Spinner";
import { getNewDeck, drawCard} from "../queries/getCards";
import { Card } from "./Card";
import { DrawCardButton } from "./DrawCardButton";
import { ICard, IDeck } from "./interfaces";

const App = () => {
  const defaultCard: ICard = {
    code: "AA",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Card_back_05a.svg",
    value: "START",
    suit: "START",
  };

  const defaultDeck = {
    success: false,
    deck_id: "123",
    remaining: 33,
    cards: [defaultCard],
  };

  const [deck, setDeck] = useState<IDeck>(defaultDeck);
  const [prevCard, setPrevCard] = useState(defaultCard);
  const [card, setCard] = useState(defaultCard);
  const [matches, setMatches] = useState({ value: 0, suit: 0 });
  const [axiosParams, setAxiosParams] = useState({queryName: "", url: "", method: ""})


  const { isLoading, error, data, isSuccess } =  useAxios(axiosParams)

useEffect(()=>{
  const { queryName, url, method } = getNewDeck();
  setAxiosParams({queryName, url, method})
},[])

useEffect(()=>{
  if(!isLoading){
    setDeck(data)
    setCard(data.cards[0])
  }
},[isLoading])


// const handleDrawCard = (): void => {
//   setAxiosParams({ 
//     queryName,
//     url,
//     method
//   })

// const newCard=prevCard
//     if (newCard!.value === card.value) {
//       matches.value++;
//     }

//     if (newCard!.suit === card.suit) {
//       matches.suit++;
//     }
//     setPrevCard(card);
//     setCard(newCard!);
//     setMatches(matches);
//   };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {/* <DrawCardButton drawCard={handleDrawCard} /> */}
      <Card image={prevCard.image} />
      <Card image={card.image} />
    </>
  );
};

export default App;
