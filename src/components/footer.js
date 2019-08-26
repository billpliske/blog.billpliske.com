import React from 'react'

export default function footer() {
    return (
        <footer>
            <p>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a></p>
        </footer>
    )
}
