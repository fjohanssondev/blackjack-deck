import { describe, it, expect } from "bun:test";
import { calculateHandValue, getCardValue, isSoft } from "../hand";

describe("getCardValue", () => {
  it("returns face value for number cards", () => {
    expect(getCardValue("2")).toBe(2);
    expect(getCardValue("7")).toBe(7);
  });

  it("returns 10 for face cards", () => {
    expect(getCardValue("J")).toBe(10);
    expect(getCardValue("Q")).toBe(10);
    expect(getCardValue("K")).toBe(10);
  });

  it("returns 11 for Ace", () => {
    expect(getCardValue("A")).toBe(11);
  });
});

describe("calculateHandValue", () => {
  it("calculates simple hand", () => {
    expect(
      calculateHandValue([
        { suit: "spades", rank: "7" },
        { suit: "hearts", rank: "5" },
      ])
    ).toBe(12);
  });

  it("treats Ace as 11 when possible", () => {
    expect(
      calculateHandValue([
        { suit: "spades", rank: "A" },
        { suit: "hearts", rank: "7" },
      ])
    ).toBe(18);
  });

  it("treats Ace as 1 to avoid bust", () => {
    expect(
      calculateHandValue([
        { suit: "spades", rank: "A" },
        { suit: "hearts", rank: "7" },
        { suit: "clubs", rank: "5" },
      ])
    ).toBe(13);
  });
});

describe("isSoft", () => {
  it("returns true for soft 18", () => {
    expect(
      isSoft([
        { suit: "spades", rank: "A" },
        { suit: "hearts", rank: "7" },
      ])
    ).toBe(true);
  });

  it("returns false for hard 13", () => {
    expect(
      isSoft([
        { suit: "spades", rank: "A" },
        { suit: "hearts", rank: "7" },
        { suit: "clubs", rank: "5" },
      ])
    ).toBe(false);
  });
});
