/** @jsx jsx */
import {jsx, Text} from 'theme-ui'
import {ContactForm, Intro, Header, Details} from './index'
import {Wrapper} from '../../common'

const HeilsuContact = () => (
  <Wrapper variant='container.wide' py={['64px', '96px']}>
    <section
      sx={{
        mb: 3,
        display: 'grid',
        gridTemplateColumns: ['auto', null, '1fr 1fr'],
        gridTemplateRows: ['auto'],
        gridTemplateAreas: [
          `
        "header"
        "form"
        "details"
        
        `,
          null,
          `
        "header header"
        "form ."
        "details details"
        `
        ]
      }}
    >
      <div sx={{gridArea: 'header', mb: [1, null, 3]}}>
        <Header heading='Senda fyrirspurn' description='Erla býður upp á einstaklingsráðgjöf um heildræna heilsu.' />
      </div>

      <div sx={{gridArea: 'form', pl: [0, null, 3, 5]}}>
        <Text as='h4' sx={{fontSize: '24px', pb: '32px'}}>
          Sendu skilaboð
        </Text>
        <ContactForm />
      </div>
      <div sx={{gridArea: 'details',
        borderTop: '2px solid',
        borderTopColor: 'primaryMuted',
        mt: 3,
        pt: 3}}>
        <Details />
      </div>
    </section>
  </Wrapper>
)

export default HeilsuContact
