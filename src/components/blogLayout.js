import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"

import { rhythm } from "../utils/typography"

const blogLayout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // if (location.pathname === rootPath) {

  return (
    <Layout>
      <header className="main-header">
        <Link to="/">
          <img src="/Pflanzrausch.svg" alt="Pflanzrausch Logo" />
        </Link>
      </header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        
        <main>{children}</main>
      </div>
    </Layout>
  )
}

export default blogLayout
