import React from 'react'
import {graphql} from 'gatsby'

import {toPlainText} from '../lib/helpers'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import Container from '../components/organisms/container'
import SinglePost from '../components/pageSections/Posts/singlePost'
import Layout from '../components/organisms/layout'
import SEO from '../components/atoms/seo'

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post

  return (
    <Layout>
      {
        errors && <SEO title='GraphQL Error' />
      }
      {
        post && (
          <SEO
            title={post.title || 'Untitled'}
            description={toPlainText(post._rawExcerpt)}
            image={post.image}
          />
        )
      }
      {
        errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )
      }
      {post && <SinglePost {...post} />}

    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query PostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      title
        id
        slug {
          current
        }
        publishedAt
        categories {
          title
          id
          slug {
            current
          }
        }
        featured
        image {
          alt
          ...SanityImage
        }
        _rawExcerpt(resolveReferences: {maxDepth: 5})
        _rawBody(resolveReferences: {maxDepth: 5})
        authors {
          _key
          author {
            id
            name
            slug {
              current
            }
            image {
              ...SanityImage
              alt
            }
            _rawBio(resolveReferences: {maxDepth: 5})
        }
      }
    }
  }

`
