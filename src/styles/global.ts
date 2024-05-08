import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --input: #040F1A;
    --background: #071422;
    --profile: #0B1B2B;
    --post: #112131;
    --border: #1C2F41;
    --label: #3A536B;
    --span: #7B96B2;
    --text: #AFC2D4;
    --subtitle: #C4D4E3;
    --title: #E7EDF4;
    --brand-blue: #3294F8;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px;
  }

  body {
    background-color: var(--background);
    color: var(--title);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textaxea, button {
    font: 400 1rem Nunito, sans-serif;
  }
`