import { useDeck } from "@blackjack-deck/react";
import { useState } from "react";

export function Game() {
  const { deck, draw } = useDeck();

  const [player, setPlayer] = useState();
  const [dealer, setDealer] = useState();

  return (
    <div>
      <div className="flex space-x-4">
        <button className="bg-amber-400 text-black px-4 py-1 rounded">
          Hit
        </button>
        <button className="bg-amber-400 text-black px-4 py-1 rounded">
          Stand
        </button>
      </div>
    </div>
  );
}
