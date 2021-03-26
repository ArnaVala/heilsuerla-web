/** @jsx jsx */

import {jsx, Box, Flex, Text} from 'theme-ui'

const HeaderTextBlock = ({heading, description}) => {
  return (
    <Flex sx={{justifyContent: 'center'}}>
      <Text variant='sectionTitle' sx={{color: 'accent', maxWidth: '640px'}}>{heading}</Text>

    </Flex>
  )
}

export default HeaderTextBlock
/* <Text
  variant='sectionTitle'
  sx={{color: 'primaryLight', mb: 0, fontWeight: '300', maxWidth: '560px'}}
>
  {description}
</Text>
 */
