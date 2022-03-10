import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: hsl(217, 19%, 38%);
    --background-shadow: hsl(218, 23%, 16%);
    --background-card: hsl(217, 19%, 24%);

    --background-title: hsl(150, 100%, 66%);
    --color-text: hsl(193, 38%, 86%);
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-family:'Manrope',sans-serif ;
    max-width: 1440px;

    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    @media (max-width: 720){
        font-size: 87.5%;
    }


}

body{
    background: var(--background-shadow);
    -webkit-font-smoothing: antialiased;

}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
