/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author
                    social {
                        twitter
                    }
                }
            }
        }
    `);

    const { author } = data.site.siteMetadata;
    return (
        <BioWrapper
            style={{
                display: `flex`,
            }}
        >
            <StyledImage
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
            />
            <StyledBio>
                Written by <strong>{author}</strong>, who lives and works in
                Arizona trying his best to stay cool.
                {` `}
                {/* <a href={`https://twitter.com/${social.twitter}`}>
                    You should follow him on Twitter
                </a> */}
            </StyledBio>
        </BioWrapper>
    );
};

export default Bio;

const BioWrapper = styled.div`
    border-top: 1px solid var(--vancouver);
    margin-top: 50px;
    padding-top: 10px;
`;


const StyledImage = styled(Image)`
    border-radius: 50%;
    margin: 0 10px 0 0;
    min-width: 50px;
`;

const StyledBio = styled.p`
    color: var(--amsterdam);
    font-size: 15px;
    font-style: italic;
    line-height: 19px;
    line-height: 21px;
    margin-top: 0;
    max-width: 390px;
    padding-top: 6px;
`;
