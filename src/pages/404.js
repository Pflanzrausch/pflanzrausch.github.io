import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../components/blogLayout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <BlogLayout >
      <SEO title="404: Not Found" />
      <h1 >404: Seite nicht gefunden</h1>
      <p >Du hast Versucht eine Seite aufzurufen, die es nicht gibt.</p>
      <Link to="/">Klicke hier, um zur Seite zurückzukehren</Link>
    </BlogLayout>
  )
}

export default NotFoundPage

