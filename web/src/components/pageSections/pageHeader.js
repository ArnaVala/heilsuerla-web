
/** @jsx jsx */
import {jsx, Flex} from 'theme-ui'
import {Section, PageTitle} from '../common'
import {BackgroundImage} from '../molecules'

// textheader in studio
const PageHeader = ({block}) => {
  const {eyebrow, backgroundImage} = block
  return (
    <Section as='header' variant='container.full'>
      <BackgroundImage width={2000} image={backgroundImage}>
        <Flex
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            pb: '64px',
            pt: ['128px', null, null, '254px'],
            px: ['16px', '32px', '64px', '128px'],
            minHeight: '30vh'
          }}
        >
          <PageTitle children={eyebrow} />
        </Flex>
      </BackgroundImage>
    </Section>
  )
}
export default PageHeader
