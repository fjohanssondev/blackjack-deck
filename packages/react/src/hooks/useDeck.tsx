import { createMultipleDecks, draw, shuffle } from "@blackjack-deck/core";
import { useCallback, useState } from "react";

export function useDeck(decks?: number) {
  const [deck, setDeck] = useState(() => shuffle(createMultipleDecks(decks)));

  const handleResetDeck = () =>
    useCallback(() => {
      setDeck(shuffle(createMultipleDecks(decks)));
    }, [decks]);

  const handleDrawCard = () =>
    useCallback(() => {
      const card = draw(deck);
      setDeck([...deck]);

      return card;
    }, [deck]);

  return {
    deck,
    reset: handleResetDeck,
    draw: handleDrawCard,
    remaining: deck.length,
  };
}
