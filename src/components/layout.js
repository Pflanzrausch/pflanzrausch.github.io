import React from "react"

const Layout = ({ children }) => {
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
