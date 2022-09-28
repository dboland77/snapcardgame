import React, { FC, ReactElement } from "react";

interface ICardProps {
  image: string;
}
const Card: FC<ICardProps> = ({ image }): ReactElement => {
  return <img src={image} />;
};

export { Card };
