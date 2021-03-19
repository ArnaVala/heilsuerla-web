import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/organisms/container'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/atoms/seo'
import Layout from '../components/organisms/layout'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      image {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      authors {
        _key
        author {
          image {
            ...SanityImage
          }
          name
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.image} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {post && <BlogPost {...post} />}
    </Layout>
  )
}

export default BlogPostTemplate
