import React, { ReactNode, useState } from "react";
import styles from "../../styles/card.module.css";
import CardBack, { CardBackProps } from "./card.back";
import CardBackground, { CardBackgroundProps } from "./card.background";
import CardFront, { CardFrontProps } from "./card.front";

interface StaticCard {
  Background: React.FC<CardBackgroundProps>;
  Back: React.FC<CardBackProps>;
  Front: React.FC<CardFrontProps>;
}

export interface CardProps {
  children?: ReactNode;
  flipped?: boolean;
  onClick?(): void;
}

const Card: React.FC<CardProps> & StaticCard = ({ children, flipped, onClick }) => {
  const flippedStyle = flipped ? styles.flipped : "";
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={`${styles.card} ${flippedStyle}`}>
        {children}
      </div>
    </div>
  );
};

Card.Background = CardBackground;
Card.Back = CardBack;
Card.Front = CardFront;

export default Card;
