import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.a`
 

`

const A = ({href = '#', ...props}) => {
  return (
    <Paragraph href={href} color='secondary' {...props} />
  )
}

export default A
