/** @jsx jsx */

import {jsx, Box, Flex, Text} from 'theme-ui'

const SectionTitle = ({heading, description, children}) => {
  return (
    <Flex variant='container.column' pb='96px' sx={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      {heading && (
        <Text
          as='h2'
          variant='sectionTitle'
          color='primary'
          sx={{
            maxWidth: '640px'
          }}
        >
          {heading}
        </Text>
      )}
      <Box sx={{height: '2px', mb: '24px', bg: 'accent', width: '128px'}} />
      {description && (
        <Text as='p' color='primary' sx={{maxWidth: '560px', fontFamily: 'body', letterSpacing: '0.03em', fontWeight: '300', fontSize: ['18px', '20px']}}>
          {description}
        </Text>
      )}
      {children}
    </Flex>
  )
}

export default SectionTitle
