import type { Rank, Suit } from "@blackjack-deck/core";
import * as filled from "@blackjack-deck/icons/filled";
import * as outline from "@blackjack-deck/icons/outline";

interface CardProps {
  suit: Suit;
  rank: Rank;
  faceDown: boolean;
  variant?: "outline" | "filled";
  className?: string;
}

export function Card({
  suit,
  rank,
  faceDown,
  variant = "outline",
  className,
}: CardProps) {
  const iconName = suit.charAt(0).toUpperCase() + suit.slice(1);
  const Icon =
    variant === "filled"
      ? filled[iconName as keyof typeof filled]
      : outline[iconName as keyof typeof outline];

  if (faceDown) {
    return <div>Face down</div>;
  }

  return (
    <div
      className={className}
      data-suit={suit}
      data-rank={rank}
      data-facedown={faceDown}
    >
      <span>{rank}</span>
      <Icon />
    </div>
  );
}
