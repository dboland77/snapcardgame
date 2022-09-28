import React, { FC } from "react";
import styles from "./dcbutton.module.css"

interface ICardImageProps {
  drawCard: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DrawCardButton: FC<ICardImageProps> = ({ drawCard }) => {
  return (
    <div className={styles.dcButtonContainer}>

    <button type="button" className={styles.dcButton} onClick={drawCard}>
      Draw card
    </button>
    </div>
  );
};
