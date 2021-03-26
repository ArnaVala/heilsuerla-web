/** @jsx jsx */
import PortableText from '../../atoms/portableText'
import {jsx, Flex, Box} from 'theme-ui'
import {Eyebrow, Title} from '../../common'

const HeroTextBlock = ({children, eyebrow, heading, description, ...props}) => {
  return (
    <Flex {...props}>
      <Eyebrow as='h1'>{eyebrow}</Eyebrow>
      <Title as='h2' variant='hero'>
        {heading}
      </Title>
      <Box sx={{maxWidth: '540px'}}>
        <PortableText blocks={description} />
      </Box>
      {children}
    </Flex>
  )
}

export default HeroTextBlock
