import React, { FC, ReactElement, ReactNode } from "react";
import styles from "./card.module.css";

interface ICardProps {
  image: string
}
const Card: FC<ICardProps> = ({
 image
}): ReactElement => {
  return (
    <img src={image}/>
      
  );
};

export { Card };