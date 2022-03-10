import { Container } from "./styles";
import dividerDesktop from "../../assets/divider-desktop.svg";
import iconDice from "../../assets/icon-dice.svg";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface CardProps {
  slip: {
    id: number;
    advice: string;
  };
}

export function Card() {
  const [advices, setAdvices] = useState<CardProps | null>();

  const setNewAdvice = async () => {
    const { data } = await api.get("advice");

    setAdvices(data);
  };

  useEffect(() => {
    setNewAdvice();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <div>
        <h1>Advice #{advices?.slip.id}</h1>
        <p>{advices?.slip.advice}</p>
        <img src={dividerDesktop} alt="Divider" />
        <button type="button" onClick={setNewAdvice}>
          <img src={iconDice} alt="Dice" />
        </button>
      </div>
    </Container>
  );
}
