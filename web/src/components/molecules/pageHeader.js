/** @jsx jsx */
import {jsx, Box, Flex} from 'theme-ui'

import '../../styles/global.css'

function PageHeader ({children}) {
  return (
    <Flex
      variant='container.full'
      p='32px'
      bg='primary'
      color='muted'
      sx={{justifyContent: 'center', alignItems: 'center', minHeight: '240px'}}
    >
      <Box as='h3' sx={{fontWeight: 'light'}}>
        {children}
      </Box>
    </Flex>

  )
}

export default PageHeader
