import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Header = ({ siteTitle }) => (
    <header>
        <div>
            <Title>
                <Link to="/">{siteTitle}</Link>
            </Title>
        </div>
    </header>
);

export default Header;

const Title = styled.h1`
    padding: 20px;
`;
