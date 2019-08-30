import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GlobalStyle } from "../DefaultStyles";
import { Title } from "../DefaultStyles";

class Layout extends React.Component {
    render() {
        const { location, title, children, description } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        let header;

        // THIS IS FOR THE OVERALL SITE TITLE AND DESCRIPTION

        if (location.pathname === rootPath) {
            header = (
                <>
                    <Title home>
                        <Link to={`/`}>{title}</Link>
                    </Title>
                    <Description>{description}</Description>
                </>
            );
        } else {
            header = (
                <>
                    <Title>
                        <Link to={`/`}>{title}</Link>
                    </Title>
                </>
            );
        }
        return (
            <>
                <GlobalStyle />
                <Wrapper>
                    <header>{header}</header>
                    <main>{children}</main>
                    <footer>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </footer>
                </Wrapper>
            </>
        );
    }
}

export default Layout;

const Wrapper = styled.div`
    padding: 15px;
    max-width: 600px;
    margin: 0 auto;
`;

const Description = styled.p`
    font-size: 22px;
    position: relative;
    top: -22px;
    left: 10px;
    max-width: 360px;
`;
