/** @jsx jsx */

import {jsx, Box, Flex, Text} from 'theme-ui'

const SectionTitle = ({heading, description}) => {
  return (
    <Flex variant='container.column' pb='64px' sx={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      {heading && (
        <Text
          variant='sectionTitle'
          color='primaryLight'
          sx={{
            maxWidth: '640px'
          }}
        >
          {heading}
        </Text>
      )}
      <Box sx={{height: '2px', mt: '16px', mb: '16px', bg: 'accent', width: '128px'}} />
      {description && (
        <Text as='p' variant='bigBody' sx={{maxWidth: '560px'
        }}>
          {description}
        </Text>
      )}
    </Flex>

  )
}

export default SectionTitle
