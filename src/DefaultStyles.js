import { createGlobalStyle } from "styled-components";
// import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --london: #2c2d3b;
        --sanfrancisco: #cccfe6;
        --phoenix: #cfa872;
        --vancouver: #838de6;
        --portland: #a2bf73;
    }

    * {
        color: var(--sanfrancisco);
        background-color: var(--london);
        font-family: "Raleway", sans-serif;
    }

    a {
        color: var(--vancouver);  
        &:hover {
            text-decoration: none;
        }
    }

    h1 {
        color: var(--phoenix);
        font-size: 55px;
        font-weight: 900;
        letter-spacing: -1px;
        font-style: italic;
    }

    h2 {
        color: var(--portland);
        font-family: "Teko", sans-serif;
        a {
            font-family: "Teko", sans-serif;
            font-weight: 300;
            letter-spacing: 3px;
            text-transform: uppercase;
        }
    }

    h3 {
        color: var(--vancouver);
        font-family: "Teko", sans-serif;
        font-weight: 600;
        font-size: 25px;
    }
    

    ol, ul {
        margin-left: 40px;
    }


`;

/*************************************/
/*************************************/
/******** REUSABLE STYLES ************/
/*************************************/
/*************************************/
