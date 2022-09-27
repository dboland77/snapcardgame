import React, {FC} from "react";

interface ICardImageProps {
  drawCard: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DrawCardButton :FC<ICardImageProps> = ({drawCard}) => {
    return (
      <button
        type="button"
        className=""
        onClick={drawCard}
      >
        Draw card
      </button>
    )
}