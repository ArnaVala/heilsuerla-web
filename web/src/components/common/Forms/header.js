import React from 'react'
import {Box} from 'theme-ui'
import SectionTitle from '../../molecules/SectionTitle/index'

const Header = ({heading, description}) => (
  <Box>
    <SectionTitle heading={heading} description={description} />
  </Box>
)

export default Header
