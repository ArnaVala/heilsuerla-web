
/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

import {jsx, Box, Flex, Text} from 'theme-ui'
import {Wrapper} from '../common'

import ContactDetails from '../molecules/Footer/contactDetails'
import FooterLogo from '../molecules/Footer/footerLogo'
import BloggNav from '../molecules/Footer/bloggNav'

const Footer = () => {
  return (
    <Box as='footer' variant='container.full'>
      <Wrapper bg='primary' variant='container.wide' mx='auto' pt={['64px', '64px']}>
        <section
          sx={{
            mx: 'auto',
            mb: 3,
            display: 'grid',
            gridTemplateColumns: ['auto', '1fr 1fr', '1fr 1fr'],
            gridTemplateRows: ['auto'],
            gridTemplateAreas: [
              `
        "header"
        'contact'
        "nav"
        
        `,
              `
        "header header"
        "nav contact"
        `,
              `
        "header header"
        "nav contact"
        `
            ]
          }}
        >
          <div sx={{gridArea: 'header', mb: [4, null, 4]}}>
            <FooterLogo />
          </div>

          <div sx={{gridArea: 'contact', pb: [4, null, 0]
          }}>
            <ContactDetails />
          </div>
          <aside
            sx={{
              gridArea: 'nav',
              borderRight: [null, '1px solid', null],
              borderRightColor: [null, 'primaryMuted', null ],
              mb: [3, null, 0],
              pt: [4, null, 0],
              borderTop: ['1px solid', 'none', null],
              borderTopColor: ['primaryMuted', null, null]
            }}
          >
            <BloggNav />
          </aside>
        </section>
        <Box
          color='primaryBg'
          sx={{pb: '32px', pt: '16px', borderTop: '1px solid', borderColor: 'primaryMuted'}}
        >
          HeilsuErla @ 2021
        </Box>
      </Wrapper>
    </Box>
  )
}
export default Footer
