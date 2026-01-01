import type { Card as CardType } from "@blackjack-deck/core";
import {
  calculateHandValue,
  isSoft,
  isBusted,
  isBlackjack,
} from "@blackjack-deck/core";
import { Card } from "../card";
import type { HTMLAttributes } from "react";

interface HandProps extends HTMLAttributes<HTMLDivElement> {
  cards: CardType[];
  showValue?: boolean;
  faceDown?: boolean[];
  variant?: "outline" | "filled";
}

export function Hand({
  cards,
  showValue = true,
  faceDown = [],
  variant = "outline",
  className,
  ...props
}: HandProps) {
  const value = calculateHandValue(cards);
  const soft = isSoft(cards);
  const busted = isBusted(cards);
  const blackjack = isBlackjack(cards);

  return (
    <div
      className={`bj-hand ${className || ""}`}
      data-value={value}
      data-soft={soft}
      data-busted={busted}
      data-blackjack={blackjack}
      {...props}
    >
      <div className="bj-hand__cards">
        {cards.map((card, index) => (
          <Card
            key={`${card.suit}-${card.rank}-${index}`}
            suit={card.suit}
            rank={card.rank}
            faceDown={faceDown[index]}
            variant={variant}
          />
        ))}
      </div>

      {showValue && !busted && !blackjack && (
        <div className="bj-hand__value">
          {value} {soft && <span className="bj-hand__soft">(soft)</span>}
        </div>
      )}

      {busted && (
        <div className="bj-hand__status bj-hand__status--busted">
          Busted ({value})
        </div>
      )}

      {blackjack && (
        <div className="bj-hand__status bj-hand__status--blackjack">
          Blackjack!
        </div>
      )}
    </div>
  );
}
