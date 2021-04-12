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
            mb: 3,
            display: 'grid',
            gridTemplateColumns: ['auto', '3fr 2fr', '3fr 2fr', null],
            gridTemplateRows: ['auto'],
            gridTemplateAreas: [
              ` "header" "form"  'details' `,
              `
        "header header"
        "form details"
        `
            ]
          }}
        >
          <div sx={{gridArea: 'header', mb: [1, 3]}}>
            <Header heading='Hafa samband' description='Hafið endilega samband til þess að fá tilboð í fyrirlestur eða vinnustofu. Einnig getum við hannað saman fyrirlestur eða námskeið sem hentar þér og þínum hóp eða fyrirtæki!' />
          </div>

          <div sx={{gridArea: 'form', pr: [0, null, 3]}}>
            <Text variant='subheading' pb='32px'>Fylltu út formið</Text>
            <ServiceForm />
          </div>
          <aside
            sx={{
              gridArea: 'details',
              pl: [0, 3],
              borderLeft: [null, '2px solid'],
              borderLeftColor: [null, 'primaryLight'],
              mt: [3, 0],
              pt: [3, 0],
              borderTop: ['1px solid', 'none'],
              borderTopColor: ['primaryLight', null, null]
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
