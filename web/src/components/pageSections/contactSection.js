/** @jsx jsx */
import React from 'react'
import {jsx, Box, Grid, Text} from 'theme-ui'
import {Section, Wrapper} from '../common'

import {Details, ServiceForm, Header} from '../common/serviceForm'

const Contact = () => {
  return (
    <Box as='section' bg='primaryMuted' variant='container.full' py={['128px']} >
      <Wrapper variant='container.wide'>
        <Grid
          sx={{
            px: ['16px', '64px', null, '64px'],
            mb: 3,
            display: 'grid',
            gridTemplateColumns: ['auto', null, '3fr 2fr', null],
            gridTemplateRows: ['auto'],
            gridTemplateAreas: [
              `
        "header"
        'details'
        "form"
        
        `,
              null,
              `
        "header header"
        "form details"
        `
            ]
          }}
        >
          <div sx={{gridArea: 'header', mb: [1, null, 3]}}>
            <Header />
          </div>

          <div sx={{gridArea: 'form', pr: [0, null, 3]}}>
            <Text>Fylltu út formið</Text>
            <ServiceForm />
          </div>
          <aside
            sx={{
              gridArea: 'details',
              pl: [0, null, 3],
              borderLeft: [null, null, '2px solid'],
              borderLeftColor: [null, null, 'primaryMuted'],
              mb: [3, null, 0],
              pb: [3, null, 0],
              borderTop: ['1px solid', null, 'none'],
              borderTopColor: ['primaryMuted', null, null]
            }}
          >
            <Details />
          </aside>
        </Grid>
      </Wrapper>
    </Box>
  )
}
export default Contact
