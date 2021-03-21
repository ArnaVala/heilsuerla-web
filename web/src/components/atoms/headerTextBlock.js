/** @jsx jsx */

import {jsx, Box, Flex, Text} from 'theme-ui'

const HeaderTextBlock = ({heading, description}) => {
  return (
    <Flex variant='container.column' sx={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
      <Text variant='subtitle' sx={{maxWidth: '640px', mb: '32px'}}>{heading}</Text>
      <Box bg='accent' sx={{width: '40%', height: '2px', mb: '32px'}} />
      <Text variant='bigBody' sx={{mb: 0, fontWeight: '300', maxWidth: '640px'}}>{description}</Text>
    </Flex>
  )
}

export default HeaderTextBlock
