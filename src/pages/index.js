import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { GlobalStyle } from "../DefaultStyles";

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const siteDescription = data.site.siteMetadata.description;
        const posts = data.allMarkdownRemark.edges;

        return (
            <Layout
                location={this.props.location}
                title={siteTitle}
                description={siteDescription}
            >
                <GlobalStyle />
                <SEO title="All posts" />
                <Bio />
                <Subtitle>Recent Posts</Subtitle>
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug;
                    return (
                        <article key={node.fields.slug}>
                                <Headline>
                                    <Link
                                        style={{ boxShadow: `none` }}
                                        to={node.fields.slug}
                                    >
                                        {title}
                                    </Link>
                                </Headline>

                                <small>{node.frontmatter.date}</small>
                            <section>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            node.frontmatter.description ||
                                            node.excerpt,
                                    }}
                                />
                            </section>
                        </article>
                    );
                })}
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`;

const Headline = styled.h3`
    font-weight: 800;
    font-size: 30px;
    margin: 50px 0 0px 0;
    &:first-of-type {
        margin-top: 5px;
    }
    a {
        text-decoration: none;
    }
`;

const Subtitle = styled.h4`
    font-family: "Teko", sans-serif;
    font-weight: 300;
    font-size: 22px;
    margin: 50px 0 10px 0;
    text-transform: uppercase;
    color: var(--portland);
    letter-spacing: 4px;
`;
