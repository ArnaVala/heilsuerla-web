import React from 'react'
import {Section, Wrapper} from '../common'
import IntroTextBlock from '../atoms/introTextBlock'

const TextHeader = ({block, raw}) => {
  const {eyebrow, heading} = block
  return (
    <Section bg='accentMuted'>
      <Wrapper variant='container.wide'>
        <IntroTextBlock eyebrow={eyebrow} heading={heading} description={raw.description} />
      </Wrapper>
    </Section>
  )
}
export default TextHeader
