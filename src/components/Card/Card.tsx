import React, { FC, ReactElement } from "react";
import styles from "./card.module.css"

interface ICardProps {
  image: string;
}
export const Card: FC<ICardProps> = ({ image }): ReactElement => {
  return(
  <div className={styles.cardContainer} role='div'>
    <img src={image} />
    </div>
  )
};

