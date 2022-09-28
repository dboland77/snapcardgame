import React, { useState, useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import { getNewDeck} from "../queries/getCards";
import { Card, DrawCardButton, Spinner, CardTable, Header } from "./Layout";
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
  const [prevCard, setPrevCard] = useState<ICard>(defaultCard);
  const [card, setCard] = useState<ICard>(defaultCard);
  const [matches, setMatches] = useState({ value: 0, suit: 0 });
  const [axiosParams, setAxiosParams] = useState({queryName: "", url: "", method: "", params:{count:0}})


  const { isLoading, error, data, isSuccess } =  useAxios(axiosParams)

  if (error) throw error

useEffect(()=>{
  const { queryName, url, method,params } = getNewDeck();
  setAxiosParams({queryName, url, method, params})
},[])

useEffect(()=>{
  if(!isLoading && isSuccess){
    if (deck.deck_id==="123"){
      setDeck(data)
    }
  }
},[axiosParams, isLoading])


const handleDrawCard = (): void => {

const newCard=deck?.cards.shift() || card;

    if (newCard.value === card.value) {
      matches.value++;
    }

    if (newCard.suit === card.suit) {
      matches.suit++;
    }
    setPrevCard(card);
    setCard(newCard);
    setMatches(matches);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
    <Header/>
    <hr></hr>
    <CardTable>
      <Card image={prevCard.image} />
      <Card image={card.image} />
    </CardTable>
      <DrawCardButton drawCard={handleDrawCard} />
      <p>Value matches: {matches.value}</p>
      <p>Suit matches: {matches.suit}</p>
    </>
  );
};

export default App;
