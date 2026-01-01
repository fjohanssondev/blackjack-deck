import { Card, Deck, Rank, Suit } from "./types";

/**
 * Creates a standard 52-card deck
 * @returns An unshuffled deck of 52 cards
 */

export function createDeck() {
  const deck: Deck = [];

  const suits: Suit[] = ["clubs", "hearts", "spades", "diamonds"];
  const rank: Rank[] = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  for (let s = 0; s < suits.length; s++) {
    for (let r = 0; r < rank.length; r++) {
      deck.push({
        rank: rank[r],
        suit: suits[s],
      });
    }
  }

  return deck;
}

/**
 * Shuffles a deck using Fisher-Yates algorithm
 * @param cards - The deck to shuffle
 * @returns A new shuffled deck
 */

export function shuffle(cards: Card[]): Deck {
  const arr = [...cards];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

/**
 * Draws the top card from the deck
 * @param deck - The deck to draw from
 * @returns The drawn card, or undefined if deck is empty
 */

export function draw(deck: Deck) {
  return deck.pop();
}
