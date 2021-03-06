import React from "react";
import { Link, graphql } from "gatsby";
import { DiscussionEmbed } from "disqus-react";
import styled from 'styled-components';

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";



class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const { previous, next } = this.props.pageContext;

        const disqusConfig = {
            shortname: 'billpliske',
            config: { identifier: post.frontmatter.title },
          }

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <article>
                    <header>
                        <h1>{post.frontmatter.title}</h1>
                        <p>{post.frontmatter.date}</p>
                    </header>
                    <section dangerouslySetInnerHTML={{ __html: post.html }} />

                    <footer>
                        <Bio />
                    </footer>
                </article>
                <nav>
                    <ul
                        style={{
                            display: `flex`,
                            flexWrap: `wrap`,
                            justifyContent: `space-between`,
                            listStyle: `none`,
                            padding: 0,
                        }}
                    >
                        <NextPrevious>
                            {previous && (
                                <Link to={previous.fields.slug} rel="prev">
                                    ← {previous.frontmatter.title}
                                </Link>
                            )}
                        </NextPrevious>
                        <NextPrevious>
                            {next && (
                                <Link to={next.fields.slug} rel="next">
                                    {next.frontmatter.title} →
                                </Link>
                            )}
                        </NextPrevious>
                    </ul>
                </nav>
                <DiscussionEmbed {...disqusConfig} />
            </Layout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;

const NextPrevious = styled.li`
    width: 40%;
    background-color: #838de6;
    padding: 10px;
    border-radius: 8px;
    a {
        color: white;
        background-color: transparent;
    }
`;
