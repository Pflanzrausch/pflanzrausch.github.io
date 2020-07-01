import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"

const BlogIndex = ({ data }) => {

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div className="header">
        <div className="header--image">
        <Img critical fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="header--content">
          <img className="header--logo" src="./Pflanzrausch.svg" alt="Pflanzrausch Logo" />
          <p>Hey, cool dass du uns gefunden hast! Wir sind Lea, Tamara und Malte, Studenten der BHT Berlin, und haben unter dem RZE nützliche Tipps und DIY-Projekte zum Thema Plantsharing und Recycling zusammengestellt. Diese kannst du dir hier als Handbuch herunterladen. Falls du in Berlin lebst und deine Pflanzen mit anderen Teilen willst, kannst du unserer Telegram-Gruppe beitreten.</p>
          <a className="button" href="https://t.me/pflanzrausch" target="_blank" rel="noreferrer">Telegramgruppe beitreten</a>
        </div>
      </div>

      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <h1 style={{textAlign: "center", margin: rhythm(1.5)}}>Unsere Tipps</h1>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article className="article-preview" key={node.fields.slug} style={{marginBottom: rhythm(2)}}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}

      </div>
    </Layout>
  )
}

export default BlogIndex

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
            date(formatString: "DD. MMM YYYY", locale: "de")
            title
            # description
          }
        }
      }
    }
    
    file(relativePath: { eq: "hero-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, maxHeight: 1080) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
