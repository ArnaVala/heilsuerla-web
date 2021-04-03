/** @jsx jsx */
import {jsx, Text} from 'theme-ui'

function PageTitle ({children, ...props}) {
  return (
    <Text
      as='h1'
      color='white'
      variant='pageTitle'
      {...props}
    >
      {children}
    </Text>
  )
}

export default PageTitle
