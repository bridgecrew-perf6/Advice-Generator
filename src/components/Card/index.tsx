import { Container } from "./styles";
import dividerDesktop from "../../assets/divider-desktop.svg";
import iconDice from "../../assets/icon-dice.svg";

export function Card() {
  return (
    <Container>
      <div>
        <h1>Advice</h1>
        <p>
          Alguma coisa Alguma coisa Alguma coisa Alguma coisa Alguma coisa
          Alguma coisa Alguma coisa Alguma coisa Alguma coisa Alguma coisa
        </p>
        <img src={dividerDesktop} alt="Divider" />
        <button type="button">
          <img src={iconDice} alt="Dice" />
        </button>
      </div>
    </Container>
  );
}
