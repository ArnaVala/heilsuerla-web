/** @jsx jsx */
import {jsx} from 'theme-ui'

import {ContactForm, Intro, Header} from '../components/common/Forms'
import Layout from '../components/organisms/layout'
import {Wrapper} from '../components/common'

const ContactPage = () => (
  <Layout>
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
        
        `,
            null,
            `
        "header header"
        "intro form"
        `
          ]
        }}
      >
        <div sx={{gridArea: 'header', mb: [1, null, 3]}}><Header /></div>

        <div sx={{gridArea: 'form', pl: [0, null, 5]}}>
          <ContactForm />
        </div>
        <aside
          sx={{
            gridArea: 'intro',
            pr: [0, null, 5],
            borderRight: [null, null, '2px solid'],
            borderRightColor: [null, null, 'muted'],
            mb: [3, null, 0],
            pb: [3, null, 0],
            borderBottom: ['1px solid', null, 'none'],
            borderBottomColor: ['muted', null, null]
          }}
        >
          <Intro />

        </aside>
      </section>
    </Wrapper>
  </Layout>
)

export default ContactPage
