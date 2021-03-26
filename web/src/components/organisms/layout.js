/** @jsx jsx */
import Helmet from 'react-helmet'
import Headroom from 'react-headroom'

import {jsx, Box} from 'theme-ui'
import '../../styles/global.css'

import Header from './header'
import Footer from './footer'
import Main from './main'

const Layout = ({title, description, children}) => {
  return (
    <Box as='site' variant='layout.site'>
      <Helmet>
        <title>HeilsuErla</title>
        <meta name='description' content='HeilsuErla, heilsumarkþjálfun og ráðgjöf' />
      </Helmet>
      <Header />
      <Main children={children} />
      <Footer />
    </Box>
  )
}

export default Layout
