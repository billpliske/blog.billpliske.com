import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --london: #313354;
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

    p {
        font-size: 17px;
        line-height: 25px;
    }

    h1 {
        color: var(--phoenix);
        font-size: 55px;
        line-height: 58px;
        font-weight: 900;
        letter-spacing: -1px;
        font-style: italic;
        margin: 25px 0 5px 0;
    }



    h3 {
        color: var(--vancouver);
        font-family: "Teko", sans-serif;
        font-weight: 600;
        font-size: 29px;
        margin: 60px 0 -15px 0;
    }

    h6 {
        margin-top: -13px;
        font-size: 15px;
        font-weight: 400;
    }


    ol, ul {
        margin-left: 0px;
        li {
            margin-bottom: 20px;
        }
    }

    img {
        width: 100%;
    }

   .gatsby-highlight span, code {
        font-family: 'Roboto Mono', monospace !important;
        font-weight: 600;
    }

    pre code {
        padding-left: 0px;
        padding-right: 0px;
    }

    p code, li code {
        padding-left: 10px !important;
        padding-right: 10px !important;
    }

    code span {
        background-color: transparent !important;
    }

    verticalimage-left {
        img {
            width: 400px;
        }
    }


`;

/*************************************/
/*************************************/
/******** REUSABLE STYLES ************/
/*************************************/
/*************************************/

export const Title = styled.h2`
    color: var(--portland);
    font-family: "Teko", sans-serif;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: ${props => (props.home ? "130px" : "30px")};
    line-height: ${props => (props.home ? "97px" : "20px")};
    max-width: 300px;
    margin: 5px 0 0 0;
    a {
        text-decoration: none;
        font-family: inherit;
        display: block;
        color: var(--portland);
    }
`;

export const Image = styled.img`
    width: 100%;
`;
