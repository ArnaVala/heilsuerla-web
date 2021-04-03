
/** @jsx jsx */
import {jsx, Flex} from 'theme-ui'
import {Section, PageTitle} from '../common'
import {BackgroundImage} from '../molecules'

// textheader in studio
const PageHeader = ({block}) => {
  const {eyebrow, backgroundImage} = block
  return (
    <Section as='header' variant='container.full'>
      <BackgroundImage
        width={2400}
        image={backgroundImage}
      >
        <Flex
          sx={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            py: '96px',
            px: ['16px', '64px', null, null]
          }}
        >
          <PageTitle children={eyebrow} />
        </Flex>
      </BackgroundImage>
    </Section>
  )
}
export default PageHeader
