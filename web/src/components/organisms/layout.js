/** @jsx jsx */
import Helmet from 'react-helmet'
import {jsx, Box} from 'theme-ui'
import Header from './header'
import '../../styles/global.css'
import Footer from './footer'

const Layout = ({title, description, children}) => {
  return (
    <Box as='site' variant='layout.site'>
      <Helmet>
        <title>HeilsuErla</title>
        <meta name='description' content='HeilsuErla, heilsumarkþjálfun og ráðgjöf' />
      </Helmet>
      <Header />
      <Box as='main' variant='layout.main' >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
