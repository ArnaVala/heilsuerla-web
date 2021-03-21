/** @jsx jsx */
import {Link as GatsbyLink} from 'gatsby'
import {jsx, Box, Grid, Flex, Card, Text, Link} from 'theme-ui'
import Image from 'gatsby-plugin-sanity-image'

import {Section, Wrapper} from '../common'
import TextLink from '../atoms/TextLink'
import AlterImageText from '../pagePlugs/alterImageTextBlock'
import HeaderTextBlock from '../atoms/headerTextBlock'
const HomeServices = ({block}) => {
  const {sectionHeader, heilsumark, radgjof} = block
  return (
    <Section bg='primaryBg'>
      <Wrapper variant='container.wide'>
        <Box sx={{py: '64px'}}>
          <HeaderTextBlock heading={sectionHeader.eyebrow} description={sectionHeader.heading} />
        </Box>
        <Box py='32px'>
          <Card variant='default'>
            <AlterImageText
              blockImageDirectionLeft={heilsumark.blockImageDirectionLeft}
              eyebrow={heilsumark.eyebrow}
              heading={heilsumark.heading}
              description={heilsumark.description}
              linkText={heilsumark.ctaLink.linkText}
              dataText={heilsumark.ctaLink.linkText}
              url={heilsumark.ctaLink.url}
              image={heilsumark.image}
            />
          </Card>
        </Box>
        <Box py='32px'>
          <Card variant='default' my='32px'>
            <AlterImageText
              blockImageDirectionLeft={radgjof.blockImageDirectionLeft}
              eyebrow={radgjof.eyebrow}
              heading={radgjof.heading}
              description={radgjof.description}
              linkText={radgjof.ctaLink.linkText}
              dataText={radgjof.ctaLink.linkText}
              url={radgjof.ctaLink.url}
              image={radgjof.image}
            />
          </Card>
        </Box>

      </Wrapper>
    </Section>
  )
}
export default HomeServices
