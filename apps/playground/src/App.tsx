import { Card, useDeck } from "@blackjack-deck/react";
import { IconsFilled, IconsOutlined } from "./icons";

function App() {
  const { remaining, draw, reset } = useDeck(6);

  return (
    <div>
      <h1>Playground</h1>
      <section>
        <h2>Ikoner</h2>
        <IconsOutlined />
        <IconsFilled />
      </section>
      <section>
        <h2>Card</h2>
        <Card rank="A" suit="spades" faceDown={false} />
        <button
          onClick={() => {
            const card = draw();
            console.log(card);
          }}
        >
          Dra kort
        </button>
        Kort kvar: {remaining}
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
}

export default App;
