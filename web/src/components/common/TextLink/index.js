/** @jsx jsx */
import {jsx} from 'theme-ui'
import {navigate} from 'gatsby'
import '../../../styles/global.css'

const TextLink = ({children, href, radius = 0, toLink, ...props}) => {
  return (
    <a
      as='button'
      className='btn'
      onClick={() => {
        if (toLink) {
          navigate(toLink)
        }
      }}
      {...props}
    >
      <span className='dot' />
      <span className='inner'>{children}</span>
    </a>
  )
}

export default TextLink
