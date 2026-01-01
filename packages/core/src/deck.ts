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
 * Creates multiple standard decks combined into one shoe
 * Used in casino blackjack where 6-8 decks are shuffled together to prevent card counting
 * @param numberOfDecks - Number of 52-card decks to combine (default: 1)
 * @returns A combined deck with numberOfDecks × 52 cards
 * @example
 * createMultipleDecks(1)  // Returns 52 cards (single deck)
 * createMultipleDecks(6)  // Returns 312 cards (standard casino shoe)
 */

export function createMultipleDecks(numberOfDecks: number = 1): Deck {
  return Array.from({ length: numberOfDecks }, () => createDeck()).flat();
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
