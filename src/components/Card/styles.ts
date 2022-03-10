import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;

  height: 100vh;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background: var(--background-card);
    border-radius: 0.5rem;

    max-width: 500px;
    height: auto;

    h1 {
      color: var(--background-title);
      font-size: 0.85rem;
      letter-spacing: 0.3rem;
      padding: 2.5rem 0;
      text-transform: uppercase;
    }

    p {
      color: var(--color-text);
      font-size: 1.5rem;
      margin: 0 2.5rem;
      padding-bottom: 2.5rem;
      text-align: center;
    }

    img {
      padding-bottom: 2rem;
    }

    button {
      align-items: center;
      justify-content: center;

      background: var(--background-title);
      border: 0 none;
      border-radius: 50%;

      display: flex;
      position: relative;

      top: 2rem;
      height: 4rem;
      width: 4rem;

      &:hover {
        box-shadow: 0 0 10px var(--background-title),
          0 0 40px var(--background-title), 0 0 80px var(--background-title);
      }
      img {
        position: relative;
        top: 25%;
      }
    }
  }
`;
