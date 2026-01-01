import {
  Clubs as ClubsFilled,
  Diamonds as DiamondsFilled,
  Hearts as HeartsFilled,
  Spades as SpadesFilled,
} from "@blackjack-deck/icons/filled";
import { Clubs, Diamonds, Hearts, Spades } from "@blackjack-deck/icons/outline";

export function IconsFilled() {
  return (
    <div>
      <HeartsFilled strokeWidth={1.5} />
      <SpadesFilled strokeWidth={1.5} />
      <DiamondsFilled strokeWidth={1.5} />
      <ClubsFilled strokeWidth={1.5} />
    </div>
  );
}

export function IconsOutlined() {
  return (
    <div>
      <Hearts strokeWidth={1.5} />
      <Spades strokeWidth={1.5} />
      <Diamonds strokeWidth={1.5} />
      <Clubs strokeWidth={1.5} />
    </div>
  );
}
