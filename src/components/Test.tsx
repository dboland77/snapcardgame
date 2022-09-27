import React from "react";
import { useAxios } from "../hooks/useAxios";
import { Spinner } from "./Layout/Spinner";
import {getNewDeck} from "../queries/getCards"

export const TestContainer = () => {
    const { queryName, url, method } = getNewDeck();

    const { isLoading, error, data, isSuccess } = useAxios(
      queryName,
      url,
      method
    );
    if (error) throw error;
  
    if (isSuccess) {
      console.log(data)
    }
    return isLoading ? (
      <Spinner />
    ) : (
      <p>OK</p>
    );
  };
  