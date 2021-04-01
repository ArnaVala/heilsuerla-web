import React from 'react'

import {Section} from '../components/common'
import {Box, Text} from 'theme-ui'
import ContactForm from '../components/common/Forms/contactForm'

const ContactPage = () => {
  return (
    <Section>
      <Box>
        <Text>Hello this is contact</Text>
        <ContactForm />
      </Box>
    </Section>
  )
}

export default ContactPage
