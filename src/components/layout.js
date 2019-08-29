import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GlobalStyle } from "../DefaultStyles";

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        let header;

        if (location.pathname === rootPath) {
            header = (
                <Title home>
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                </Title>
            );
        } else {
            header = (
                <Title>
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                </Title>
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
    h6 {
        font-weight: normal;
        margin-top: -20px;
    }
`;

const Title = styled.h2`
    font-size: ${props => (props.home ? "50px" : "20px")};
`;
