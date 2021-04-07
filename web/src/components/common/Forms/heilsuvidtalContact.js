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
        'intro'
        "form"
        "details"
        
        `,
          null,
          `
        "header header"
        "intro form"
        "details details"
        `
        ]
      }}
    >
      <div sx={{gridArea: 'header', mb: [1, null, 3]}}>
        <Header heading='Bóka ókeypis heilsuviðtal' description='Erla býður upp á 50 mínútna heilsuviðtal fyrir þá sem vilja bæta heilsuna og kynna sér heilsumarkþjálfun. Viðtalið er þér að kostnaðarlausu og án allra skuldbindinga.' />
      </div>

      <div sx={{gridArea: 'form', pl: [0, null, 3, 5]}}>
        <Text as='h4' sx={{fontSize: '24px', pb: '32px'}}>
          Sendu skilaboð
        </Text>
        <ContactForm />
      </div>
      <aside
        sx={{
          gridArea: 'intro',
          pr: [0, null, 3, 5],
          borderRight: [null, null, '2px solid'],
          borderRightColor: [null, null, 'primaryMuted'],
          mb: [3, null, 0, null],
          pb: [3, null, 0, null],
          borderBottom: ['2px solid', null, 'none'],
          borderBottomColor: ['primaryMuted', null, null]
        }}
      >
        <Intro />
      </aside>
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