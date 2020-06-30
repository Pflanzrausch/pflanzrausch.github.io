import React from "react"
// import { Link } from "gatsby"

// import { rhythm } from "../utils/typography"

const Layout = ({ children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // if (location.pathname === rootPath) {

  return (
    <div>
      {children}
      <footer>
        <span>© 2020 Pflanzrausch</span>
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0 Lizensiert</a>
      </footer>
    </div>
  )
}

export default Layout
