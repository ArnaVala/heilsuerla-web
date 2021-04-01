/** @jsx jsx */
import React from 'react'
import {jsx} from 'theme-ui'

import {Details, ContactForm, Intro, Header} from '../components/common/Forms'
import Layout from '../components/organisms/layout'
import {Section, Wrapper} from '../components/common'

const ContactPage = () => (
  <Layout>
    <Wrapper variant='container.wide' py={['64px', '96px']}>
      <section
        sx={{
          mb: 3,
          display: 'grid',
          gridTemplateColumns: [`auto`, null, `2fr 1fr`],
          gridTemplateRows: [`auto`],
          gridTemplateAreas: [
            `
        "header"
        "form"
        "details"
        `,
            null,
            `
        "header header"
        "form details"
        `
          ]
        }}
      >
        <div sx={{gridArea: `header`, mb: [1, null, 3]}}>
          <Header />
        </div>
        <div sx={{gridArea: `form`, pr: [0, null, 5]}}>
          <Intro />
          <ContactForm />
        </div>
        <aside
          sx={{
            gridArea: `details`,
            pl: [0, null, 5],
            borderLeft: [null, null, '2px solid'],
            borderLeftColor: [null, null, 'muted'],
            mt: [3, null, 0],
            pt: [3, null, 0],
            borderTop: ['1px solid', null, 'none'],
            borderTopColor: ['muted', null, null]
          }}
        >
          <Details />
        </aside>
      </section>
    </Wrapper>
  </Layout>
)

export default ContactPage
