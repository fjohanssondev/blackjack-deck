import { Card, Rank } from "./types";

/**
 * Returns the numeric value of a card rank
 * @param rank - The rank of the card (A, 2-10, J, Q, K)
 * @returns The numeric value (J/Q/K = 10, A = 11, others = face value)
 */

export function getCardValue(rank: Rank): number {
  const special = ["J", "Q", "K"];

  if (special.includes(rank)) {
    return 10;
  } else if (rank === "A") {
    return 11;
  }

  return Number(rank);
}

/**
 * Calculates the optimal value of a blackjack hand
 * Aces are counted as 11 when possible, otherwise as 1 to avoid busting
 * @param cards - Array of cards in the hand
 * @returns The best possible hand value (1-21+)
 * @example
 * calculateHandValue([{suit: 'spades', rank: 'A'}, {suit: 'hearts', rank: '7'}]) // Returns 18
 * calculateHandValue([{suit: 'spades', rank: 'A'}, {suit: 'hearts', rank: '7'}, {suit: 'clubs', rank: '5'}]) // Returns 13
 */

export function calculateHandValue(cards: Card[]): number {
  let sum = 0;
  let aces = 0;

  for (let i = 0; i < cards.length; i++) {
    sum += getCardValue(cards[i].rank);
    if (cards[i].rank === "A") {
      aces += 1;
    }
  }

  while (sum > 21 && aces > 0) {
    sum -= 10;
    aces--;
  }

  return sum;
}

/**
 * Checks if a hand is "soft" (contains an Ace counted as 11)
 * A soft hand has at least one Ace that can be counted as 11 without busting
 * @param cards - Array of cards in the hand
 * @returns True if the hand is soft, false otherwise
 * @example
 * isSoft([{suit: 'spades', rank: 'A'}, {suit: 'hearts', rank: '7'}]) // Returns true (soft 18)
 * isSoft([{suit: 'spades', rank: 'A'}, {suit: 'hearts', rank: '7'}, {suit: 'clubs', rank: '5'}]) // Returns false (hard 13, Ace counted as 1)
 */

export function isSoft(cards: Card[]): boolean {
  const hasAce = cards.some((card) => card.rank === "A");
  if (!hasAce) return false;

  let hard = 0;

  for (const card of cards) {
    if (card.rank === "A") {
      hard += 1;
    } else {
      hard += getCardValue(card.rank);
    }
  }

  const actual = calculateHandValue(cards);

  return actual === hard + 10;
}

export function isBusted(cards: Card[]): boolean {
  return calculateHandValue(cards) > 21;
}

export function isBlackjack(cards: Card[]): boolean {
  if (cards.length !== 2) return false;

  const hasAce = cards.some((card) => card.rank === "A");
  const hasTenPointer = cards.some((card) => getCardValue(card.rank) === 10);

  return hasAce && hasTenPointer;
}
