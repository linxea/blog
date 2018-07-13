import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p style={{padding: rhythm(0.1), margin: 0, textAlign: 'right'}}>
        by <a href="https://github.com/linxea" target="_blank"><strong>linxea</strong></a>
      </p>
    )
  }
}

export default Bio
