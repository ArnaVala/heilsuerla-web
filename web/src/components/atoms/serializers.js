/** @jsx jsx */
import {jsx, Styled, Text} from 'theme-ui'
import Figure from './Figure'
import RecipeBlock from './recipeBlock'

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'bigBody':
          return <Text as='p' sx={{textAlign: 'center', fontFamily: 'body', fontWeight: '300', fontSize: ['20px', null, '24px'], m: '0 auto', pb: '24px', maxWidth: '960px'}}>{props.children}</Text>
        case 'normal':
          return <Text as='p' variant='body' sx={{maxWidth: '640px', pb: 2}}>{props.children}</Text>
        case 'h2':
          return <Text as='h2' variant='subtitle'>{props.children}</Text>
        case 'h3':
          return <Text as='h3' variant='subheading' sx={{mt: '16px', mb: '8px'}}>{props.children}</Text>
        case 'blockquote':
          return <Text sx={{color: 'primaryLight', textAlign: 'center', fontFamily: 'heading', fontWeight: '300', fontSize: ['24px', null, '24px'], m: '0 auto', py: '32px', maxWidth: '960px'}}>{props.children}</Text>
        default:
          return <Text variant='body'>{props.children}</Text>
      }
    },
    authorReference: ({node}) => <span>{node.author.name}</span>,
    recipe: RecipeBlock,
    mainImage: Figure,

    marks: {
      decorators: [],
      internalLink: ({mark, children}) => {
        const {slug = {}} = mark
        const href = `/${slug.current}`
        return <a sx={{color: 'primary', textDecoration: 'none'}} href={href}>{children}</a>
      }
    },
    link: ({mark, children}) => {
      const {blank, href} = mark
      return blank ? (
        <a sx={{textDecoration: 'none'}} href={href} target='_blank' rel='noopener'>
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    }
  }
}

export default serializers
