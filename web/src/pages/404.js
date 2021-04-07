import React from 'react'
import {Link} from 'gatsby'
import {Flex} from 'theme-ui'
import Layout from '../components/organisms/layout'

import SEO from '../components/atoms/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='Síða fannst ekki' />
    <Flex sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: '128px', 'a': {fontWeight: '500'}}}>
      <h1>Síðan fannst ekki!</h1>
      <p>Viltu ekki fara {' '}
        <Link as='a' to='/'>tilbaka á forsíðu</Link>
      </p>
    </Flex>
  </Layout>
)

export default NotFoundPage
