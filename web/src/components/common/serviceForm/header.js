import React from 'react'
import {Box, Flex, Text} from 'theme-ui'
import SectionTitle from '../../molecules/SectionTitle/index'
const Header = ({heading, description}) => (
  <Box>
    <SectionTitle heading={heading} description={description} />
  </Box>
)

export default Header
