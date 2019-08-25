import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    {data.allWordpressPost.edges.map(post => (
      <li>
        <Link to={`/${post.node.slug}`}>
          <h1 dangerouslySetInnerHTML={{ __html: post.node.title }} />
        </Link>
        <p dangerouslySetInnerHTML={{ __html: post.node.date }}/>
      </li>
    ))}
  </Layout>
)

export default IndexPage


export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
